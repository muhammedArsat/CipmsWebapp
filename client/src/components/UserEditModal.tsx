import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import type { Role } from '../types/user.type'
import UserEditModalForm from './UserEditModalForm'
import { useState } from 'react'
import { Alert } from '@mui/material'
import { updatePlacementOfficer } from '../apis/adminApi'






export interface UserDataType {
    id: string,
    department: string,
    email: string,
    name: string,
    role: Role,
    profile: string,
    isActive: boolean,
    phoneNo: string,
    mentorName: string | null

}
interface UserEditModalProps {
    open: boolean,
    handleUserEditModal: () => void
    userData: UserDataType

}

export default function UserEditModal({ open, handleUserEditModal, userData }: UserEditModalProps) {
    const [formData, setFormData] = useState<UserDataType>(userData)

    const handleFieldChange = (field: keyof UserDataType, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }))
    }

    const handleSave = async() => {
        console.log('Updated data:', formData)
        // Add your save logic here (API call, etc.)

        try {
            
            const res = await updatePlacementOfficer(formData);
            if (res.success) {
                <Alert severity='success'>Updated successfully</Alert>
            }
        } catch (err) {
            if (err instanceof Error) {
                <Alert severity='error'>
                    Error
                </Alert>
            }
        }
        handleUserEditModal()
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: {
            xs: '95%',  // 95% width on extra small screens
            sm: '90%',  // 90% width on small screens
            md: 700,    // 700px on medium screens
            lg: 800,    // 800px on large screens
            xl: 900     // 900px on extra large screens
        },
        maxWidth: '95vw', // Never exceed 95% of viewport width
        maxHeight: '90vh', // Never exceed 90% of viewport height
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: { xs: 2, sm: 3, md: 4 }, // Responsive padding
        overflow: 'auto', // Allow scrolling if content is too tall
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleUserEditModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        color='inherit'
                        sx={{ fontSize: { xs: '1.1rem', sm: '1.25rem' } }}
                    >
                        Edit User
                    </Typography>
                    <Typography
                        id="modal-modal-description"
                        sx={{
                            mt: 2,
                            mb: 2,
                            fontSize: { xs: '0.875rem', sm: '1rem' }
                        }}
                        color='inherit'
                    >
                        Edit the details of the user here
                    </Typography>

                    <UserEditModalForm
                        data={formData}
                        onChange={handleFieldChange}
                    />

                    <Box sx={{ mt: 3, display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                        <Button onClick={handleUserEditModal} variant="outlined">
                            Cancel
                        </Button>
                        <Button onClick={handleSave} variant="contained">
                            Save Changes
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    )
}
