import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Sidebar from './Sidebar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'

import { useAuth } from '../contexts/AuthContext'
import { Avatar } from '@mui/material'
import { useThemeContext } from '../contexts/ThemeContext'

const MenuAppBar = () => {
    const [openSidebar, setOpenSidebar] = React.useState(false)

    const { user, logout } = useAuth()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
    }

    const handleLogout = async () => {
        await logout()
        handleMenuClose()
    }

    const toggleSidebar = () => {
        setOpenSidebar((prev) => !prev)
    }

    const { toggleTheme } = useThemeContext()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" color='inherit'>
                <Toolbar >
                    {/* Left menu icon (optional) */}
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        sx={{ mr: 2 }}
                        onClick={toggleSidebar}
                    >
                        <MenuIcon />
                    </IconButton>

                    {/* Title */}
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        CIPMS
                    </Typography>

                    <IconButton color='inherit' onClick={toggleTheme}>
                        <WbSunnyOutlinedIcon />
                    </IconButton>
                    <IconButton color='inherit'>
                        <NotificationsNoneOutlinedIcon />

                    </IconButton>

                    {/* Show profile ONLY if logged in */}
                    {user && (
                        <>

                            <IconButton
                                size="large"
                                color="inherit"
                                onClick={handleMenuOpen}
                            >

                                {user.profileUrl ? <>
                                    <img src={user.profileUrl} alt="Profile_img" referrerPolicy='no-referrer' className='w-10 h-10 object-contain rounded-full ' />

                                </> :
                                    <Avatar sx={{ width: 40, height: 40, bgcolor: 'primary.main' }}>
                                        {user.name?.charAt(0)?.toUpperCase() || '?'}
                                    </Avatar>
                                }

                            </IconButton>

                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                            >
                                <MenuItem disabled>{user.name}</MenuItem>
                                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                                <MenuItem onClick={handleLogout} sx={{ color: "white", bgcolor: "error.light" }}>Logout</MenuItem>
                            </Menu>
                        </>
                    )}
                </Toolbar>
            </AppBar>
            <Sidebar open={openSidebar} toggleSidebar={toggleSidebar} />
        </Box>
    )
}

export default MenuAppBar
