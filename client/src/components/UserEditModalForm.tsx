import type { UserDataType } from './UserEditModal'
import { TextField, MenuItem } from '@mui/material'

interface UserEditModalFormProps {
    data: UserDataType
    onChange: (field: keyof UserDataType, value: any) => void
}

const UserEditModalForm = ({ data, onChange }: UserEditModalFormProps) => {
    const allFieldConfigs = [
        { key: 'name', label: 'Name', type: 'text', required: true },
        { key: 'email', label: 'Email', type: 'email', required: true },
        { key: 'department', label: 'Department', type: 'text' },
        { key: 'phoneNo', label: 'Phone Number', type: 'tel' },
        { key: 'mentorName', label: 'Mentor Name', type: 'text' },
        {
            key: 'role',
            label: 'Role',
            type: 'select',
            options: ['PLACEMENT_OFFICER', 'MENTOR', 'STUDENT'],
            placeholder: 'SELECT ROLE'
        }, {
            key: 'isActive',
            label: "Status",
            type: 'select',
            options: ["Active", "Inactive"],
            placeholder: 'SELECT STATUS'
        }
    ] as const

    const handleFieldChange = (field: keyof UserDataType, value: any) => {
        if (field === 'isActive') {
            // Convert "Active"/"Inactive" to true/false
            const booleanValue = value === 'Active'
            onChange(field, booleanValue)
        } else {
            onChange(field, value)
        }
    }

    const getDisplayValue = (field: any, value: any) => {
        if (field.key === 'isActive') {
            // Convert true/false to "Active"/"Inactive" for display
            return value ? 'Active' : 'Inactive'
        }
        return value || ''
    }

    const fieldConfigs = allFieldConfigs.filter(field => {
        if (field.key === 'mentorName') {
            // Hide mentorName if role is PLACEMENT_OFFICER or MENTOR
            if (data.role === 'PLACEMENT_OFFICER' || data.role === 'MENTOR') {
                return false
            }
            // Also hide if mentorName is null or empty
            return data.mentorName !== null && data.mentorName !== ''
        }
        return true
    })

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
            {fieldConfigs.map((field) => (
                <div key={field.key}>
                    {field.type === 'select' ? (
                        <TextField
                            select
                            fullWidth
                            label={field.label}
                            value={getDisplayValue(field, data[field.key])}
                            onChange={(e) => handleFieldChange(field.key, e.target.value)}
                            required
                        >
                            <MenuItem value="" disabled>
                                {field.placeholder}
                            </MenuItem>
                            {field.options?.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                    ) : (
                        <TextField
                            fullWidth
                            label={field.label}
                            type={field.type}
                            value={data[field.key] || ''}
                            onChange={(e) => handleFieldChange(field.key, e.target.value)}
                            required
                        />
                    )}
                </div>
            ))}
        </div>
    )
}

export default UserEditModalForm

