import { DataGrid } from '@mui/x-data-grid'
import type { GridColDef } from '@mui/x-data-grid'
import Paper from '@mui/material/Paper'
import { Box, Avatar, IconButton } from '@mui/material'
import { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit'
import UserEditModal, { type UserDataType } from './UserEditModal'

interface User {
    id: string
    name: string
    email: string
    role?: string
}

interface UserTableProps {
    data: User[]
}

const UserTable = ({ data }: UserTableProps) => {
    const [paginationModel, setPaginationModel] = useState({
        page: 0,
        pageSize: 10,
    })

    const [openUserEditModal, setOpenUserEditModal] = useState(false)
    const [userDetail, setUserDetail] = useState<UserDataType>({
         id: "",
            department: "",
            email: "",
            name: "",
            role:"ADMIN",
            profile: "",
            isActive: false,
            phoneNo: "",
            mentorName:null
    })

    const handleUserEditModal = () => {
        setOpenUserEditModal(prev => !prev)
    }

    const columns: GridColDef[] = [
        { field: 'idx', headerName: 'ID', width: 70 },
        {
            field: 'profileUrl', headerName: 'Profile', renderCell: (params) => {
                return <Box sx={{ pt: 1 }}>
                    {params.row.profileUrl ? (
                        <img
                            src={params.row.profileUrl}
                            alt='profile_url'
                            referrerPolicy='no-referrer'
                            className='w-10 h-10 rounded-full object-cover'
                        />
                    ) : (
                        <Avatar sx={{ width: 40, height: 40, bgcolor: 'primary.main' }}>
                            {params.row.name?.charAt(0)?.toUpperCase() || '?'}
                        </Avatar>
                    )}
                </Box>
            }
        },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'userId', headerName: 'Unique Id', width: 200 },
        { field: 'email', headerName: 'Email', width: 300 },
        { field: 'role', headerName: 'Role', width: 200 },
        { field: "internshipCount", headerName: "Count", width: 100 },
        {
            field: "isActive", headerName: "Status", width: 150, renderCell: (param) => {
                return <Box >
                    <span className={`${param.row.isActive === true ? 'bg-green-400':"bg-red-500"} text-white px-2 rounded-full`}>
                        {param.row.isActive === true ? "Active" : "Inactive"}
                    </span>
                </Box>
            }
        },
        {
            field: "edit", headerName: "Edit", width: 45, renderCell: (param) => {
                return <Box>
                    <IconButton onClick={() => {
                        console.log("Row details:", param.row)
                        setUserDetail(param.row)
                        handleUserEditModal()
                    }}>
                        <EditIcon />
                    </IconButton>
                </Box>
            }
        }
    ]

    return (
        <>
            <Paper sx={{
                height: 400,
                width: '100%',
                margin: { xs: 0, sm: 'auto' },
                padding: 0,
                borderRadius: { xs: 0, sm: 1 },
                boxShadow: { xs: 'none', sm: 1 }
            }} >
                <DataGrid
                    rows={data || []}
                    columns={columns}
                    paginationModel={paginationModel}
                    onPaginationModelChange={setPaginationModel}
                    pageSizeOptions={[5, 10]}
                    
                    disableRowSelectionOnClick
                    checkboxSelection
                    sx={{
                        border: 0,
                        '& .MuiDataGrid-main': {
                            padding: { xs: 0, sm: 'inherit' }
                        }
                    }}
                    
                />
            </Paper>
            {openUserEditModal && <UserEditModal open={openUserEditModal} handleUserEditModal={handleUserEditModal}  userData={userDetail}/>}
        </>
    )
}

export default UserTable
