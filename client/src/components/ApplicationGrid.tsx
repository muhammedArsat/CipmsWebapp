import Box from '@mui/material/Box'
import { DataGrid, type GridColDef } from '@mui/x-data-grid'
import type { ApplicationType } from '../pages/MyApplications'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import SendIcon from '@mui/icons-material/Send'
import VisibilityIcon from '@mui/icons-material/Visibility'
import toast from 'react-hot-toast'
import { Button, styled, Typography } from '@mui/material'
import { useState } from 'react'
import { StudentApi } from '../apis/studentApi'
import { useAuth } from '../contexts/AuthContext'

interface ApplicationGridProps {
    data: ApplicationType[]
    onUploadSuccess?: () => void
}

export default function ApplicationGrid({ data, onUploadSuccess }: ApplicationGridProps) {
    const { user } = useAuth()
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    })

    // Store files with application ID as key
    const [selectedFiles, setSelectedFiles] = useState<Record<string, File>>({})

    const handleCertificateUpload = async (file: File, applicationId: string) => {
        try {
            // Create FormData
            const formData = new FormData()
            formData.append('certificate', file)
            formData.append('applicationId', applicationId)
            formData.append('userId', user?.id as string)

            // Log FormData contents
            console.log('Uploading certificate:')
            for (let [key, value] of formData.entries()) {
                console.log(`${key}:`, value)
            }

            // Send to backend
            const response = await StudentApi.uploadCertificate(formData)

            toast.success('Certificate uploaded successfully')

            // Clear the selected file for this application
            setSelectedFiles(prev => {
                const newFiles = { ...prev }
                delete newFiles[applicationId]
                return newFiles
            })

            // Refresh data if callback provided
            if (onUploadSuccess) {
                onUploadSuccess()
            }

            console.log('Upload response:', response)

        } catch (error: any) {
            toast.error(error.response?.data?.message || 'Failed to upload certificate')
            console.error('Upload error:', error)
        }
    }

    const columns: GridColDef<ApplicationType>[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'internship.companyLogo',
            headerName: 'Logo',
            width: 100,
            renderCell: ((params) => {
                return (
                    <div className='flex items-center pt-2'>
                        <img src={params.row.internship.companyLogo} alt="" className='rounded-full w-8 h-8' />
                    </div>
                )
            })
        },
        {
            field: 'CompanyName',
            headerName: 'Company',
            width: 200,
            valueGetter: (_value, row) => row.internship.companyName || "N/A"
        },
        {
            field: 'internship.title',
            headerName: 'Title',
            width: 250,
            valueGetter: (_value, row) => row.internship.title || "N/A"
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 150,
            renderCell: ((params) => {
                const getStatusColor = (status: string) => {
                    switch (status) {
                        case "APPLIED":
                            return "#fbbf24"
                        case "ONGOING":
                            return "#60a5fa"
                        case "COMPLETED":
                            return "#4ade80"
                        case "REJECTED":
                            return "#f87171"
                        default:
                            return "#9ca3af"
                    }
                }

                return (
                    <Box sx={{
                        width: "100%",
                        color: 'white',
                        fontWeight: 'bold',
                        borderRadius: 1,
                        px: 1
                    }}>
                        <span className="rounded-lg px-3" style={{
                            backgroundColor: getStatusColor(params.row.status)
                        }}>
                            {params.row.status}
                        </span>
                    </Box>
                )
            })
        },
        {
            field: 'appliedAt',
            headerName: 'Date',
            width: 200,
            valueGetter: (_value, row) => {
                if (!row.appliedAt) return 'N/A'
                return new Date(row.appliedAt).toLocaleDateString("en-us", {
                    year: "numeric",
                    month: 'numeric',
                    day: "2-digit"
                })
            }
        },
        {
            field: 'certificate',
            headerName: 'Certificate',
            width: 250,
            renderCell: ((params) => {
                const applicationId = params.row.id
                const certificateUrl = params.row.certificateUrl
                const selectedFile = selectedFiles[applicationId]
                const showUpload = params.row.status === 'ONGOING'

                // If certificate already exists, show view button
                if (certificateUrl) {
                    return (
                        <Button
                            variant="contained"
                            size="small"
                            color="success"
                            startIcon={<VisibilityIcon />}
                            component="a"
                            href={certificateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Certificate
                        </Button>
                    )
                }

                // If not ONGOING status, show dash
                if (!showUpload) {
                    return (
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                            height: '100%'
                        }}>
                            -
                        </Box>
                    )
                }

                // If ONGOING and no certificate, show upload interface
                return (
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, py: 1 }}>
                        {!selectedFile ? (
                            <Button
                                component="label"
                                variant="contained"
                                size="small"
                                startIcon={<CloudUploadIcon />}
                            >
                                Choose File
                                <VisuallyHiddenInput
                                    type="file"
                                    accept=".pdf"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        if (e.target.files && e.target.files.length > 0) {
                                            const file = e.target.files[0]

                                            // Validate PDF
                                            if (file.type !== 'application/pdf') {
                                                toast.error('Please upload a PDF file')
                                                return
                                            }

                                            // Validate size (5MB)
                                            if (file.size > 5 * 1024 * 1024) {
                                                toast.error('File size should be less than 5MB')
                                                return
                                            }

                                            setSelectedFiles(prev => ({
                                                ...prev,
                                                [applicationId]: file
                                            }))
                                        }
                                    }}
                                />
                            </Button>
                        ) : (
                            <>
                              
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        color="primary"
                                        startIcon={<SendIcon />}
                                        onClick={() => handleCertificateUpload(selectedFile, applicationId)}
                                    >
                                        Post
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        size="small"
                                        color="error"
                                        onClick={() => {
                                            setSelectedFiles(prev => {
                                                const newFiles = { ...prev }
                                                delete newFiles[applicationId]
                                                return newFiles
                                            })
                                        }}
                                    >
                                        Cancel
                                    </Button>
                                </Box>
                            </>
                        )}
                    </Box>
                )
            })
        }
    ]

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={data}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5, 10, 25]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    )
}
