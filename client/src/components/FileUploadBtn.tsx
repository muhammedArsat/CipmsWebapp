import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { useState } from 'react'
import { uploadFiles } from '../apis/adminApi'
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    Typography
} from '@mui/material'

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

interface FileUploadButtonProps {
    onUploadSuccess?: (response: any) => void
    onUploadError?: (error: any) => void
    disabled?: boolean
    acceptedFileTypes?: string
}

interface RoleOption {
    value: string
    label: string
    endpoint: string
}

const roleOptions: RoleOption[] = [
    { value: 'student', label: 'Student', endpoint: 'upload-students' },
    { value: 'mentor', label: 'Mentor', endpoint: 'upload-mentors' },
    { value: 'placementOfficer', label: 'Placement Officer', endpoint: 'upload-placementOfficer' },
]

export default function FileUploadButton({
    onUploadSuccess,
    onUploadError,
    disabled = false,
    acceptedFileTypes = '*/*'
}: FileUploadButtonProps) {
    const [uploading, setUploading] = useState(false)
    const [dialogOpen, setDialogOpen] = useState(false)
    const [selectedRole, setSelectedRole] = useState('')
    const [selectedFile, setSelectedFile] = useState<File | null>(null)

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files
        if (!files || files.length === 0) return

        // Take only the first file
        setSelectedFile(files[0])
        setDialogOpen(true)
        // Reset input
        event.target.value = ''
    }

    const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedRole(event.target.value)
    }

    const handleUpload = async () => {
        if (!selectedFile || !selectedRole) return

        const roleOption = roleOptions.find(option => option.value === selectedRole)
        if (!roleOption) return

        setUploading(true)
        setDialogOpen(false)

        try {
            // Create a FileList-like object with single file
            const fileList = {
                0: selectedFile,
                length: 1,
                item: (index: number) => index === 0 ? selectedFile : null,
                [Symbol.iterator]: function* () {
                    yield selectedFile
                }
            } as FileList

            const response = await uploadFiles(fileList, roleOption.endpoint)
            console.log('Upload successful:', response)

            if (onUploadSuccess) {
                onUploadSuccess(response)
            }
        } catch (error: any) {
            console.error('Upload failed:', error)

            if (onUploadError) {
                onUploadError(error?.response?.data || error)
            }
        } finally {
            setUploading(false)
            setSelectedFile(null)
            setSelectedRole('')
        }
    }

    const handleCancel = () => {
        setDialogOpen(false)
        setSelectedFile(null)
        setSelectedRole('')
    }

    return (
        <>
            <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
                disabled={disabled || uploading}
            >
                {uploading ? 'Uploading...' : 'Upload file'}
                <VisuallyHiddenInput
                    type="file"
                    onChange={handleFileSelect}
                    accept={acceptedFileTypes}
                />
            </Button>

            <Dialog open={dialogOpen} onClose={handleCancel} maxWidth="sm" fullWidth>
                <DialogTitle color='inherit'>Select Upload Role</DialogTitle>
                <DialogContent>
                    <Typography variant="body2" color="inherit" sx={{ mb: 2 }}>
                        {selectedFile && `Selected file: ${selectedFile.name}`}
                    </Typography>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Choose the role for file upload:</FormLabel>
                        <RadioGroup
                            value={selectedRole}
                            onChange={handleRoleChange}
                            sx={{ mt: 1 }}
                        >
                            {roleOptions.map((option) => (
                                <FormControlLabel
                                    key={option.value}
                                    value={option.value}
                                    control={<Radio />}
                                    label={option.label}
                                />
                            ))}
                        </RadioGroup>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancel} color="secondary">
                        Cancel
                    </Button>
                    <Button
                        onClick={handleUpload}
                        color="primary"
                        variant="contained"
                        disabled={!selectedRole}
                    >
                        Upload
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}