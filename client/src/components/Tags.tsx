import { Box, Typography, useTheme } from '@mui/material'
import  { type ReactNode } from 'react'

interface TagsProps {
    icon: ReactNode,
    value: string
}

const Tags = ({ icon, value }: TagsProps) => {
    const theme = useTheme()

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 0.6,
            px: 1.2,
            py: 0.5,
            borderRadius: 1.5,
            // Dynamic background based on theme mode
            bgcolor: theme.palette.mode === 'dark' ? '#424242' : "#eeeeee", // Blue-gray for dark, light blue for light
            // Dynamic text color
            color: theme.palette.mode === 'dark' ? 'white' : 'black',
            width: 'fit-content',
            fontSize: '0.75rem'
        }}>
            {icon}
            <Typography
                variant='body2'
                sx={{
                    color: 'inherit', // Inherit from parent
                    fontSize: '0.75rem',
                    fontWeight: 400,
                    whiteSpace: 'nowrap'
                }}
            >
                {value}
            </Typography>
        </Box>
    )
}

export default Tags