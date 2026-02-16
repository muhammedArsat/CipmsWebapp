import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AddIcon from '@mui/icons-material/Add'
import WorkIcon from '@mui/icons-material/Work'
import { useAuth } from '../contexts/AuthContext'
import { Alert, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, Snackbar } from '@mui/material'
import GroupIcon from '@mui/icons-material/Group'
import LogoutIcon from '@mui/icons-material/Logout'
import { handleLogout } from '../apis/authApi'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface sidebarProps {
    open: boolean,
    toggleSidebar: () => void
}

export default function Sidebar({ open, toggleSidebar }: sidebarProps) {
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' as 'success' | 'error' })

    const menuItems = [
        {
            name: 'Dashboard',
            path: '/dashboard',
            roles: ['ADMIN', 'MENTOR', 'PLACEMENT_OFFICER', 'STUDENT'],
            icon: <DashboardIcon />
        },
        {
            name: 'New Internship',
            path: '/new-internship',
            roles: [ 'PLACEMENT_OFFICER'],
            icon: <AddIcon />
        },
        {
            name: 'Internships',
            path: '/internships',
            roles: ['ADMIN', 'MENTOR', 'PLACEMENT_OFFICER', 'STUDENT'],
            icon: <WorkIcon />
        }, {
            name: 'Users',
            path: "/users",
            roles: ['ADMIN'],
            icon: <GroupIcon />
        }
    ]

    const { user, refetchUser } = useAuth()
    const filteredMenuItems = menuItems.filter(item => user?.role && item.roles.includes(user.role))

    const logout = async () => {
        try {
            await handleLogout()
            setSnackbar({ open: true, message: 'Successfully logged out!', severity: 'success' })
            setTimeout(() => {
                refetchUser()
            }, 1000) // Delay refetch to show the success message
        } catch (err) {
            setSnackbar({ open: true, message: 'Something went wrong during logout', severity: 'error' })
        }
    }

    const handleCloseSnackbar = () => {
        setSnackbar({ ...snackbar, open: false })
    }


    const navigate = useNavigate();
    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleSidebar}>
            <List>
                {filteredMenuItems.map((menu, idx) => {
                    return (
                        <ListItem key={idx} >
                            <ListItemButton onClick={()=>navigate(menu.path)}>
                                <ListItemIcon>
                                    {menu.icon}
                                </ListItemIcon>
                                <ListItemText primary={menu.name} />
                            </ListItemButton>
                        </ListItem>
                    )
                })}
                <Divider />
            </List>

            <List sx={{ bottom: '0px', position: "absolute", width: 250 }}>
                <ListItem sx={{ bgcolor: "error.light" }}>
                    <ListItemButton onClick={logout}>
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Logout"} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )

    return (
        <div>
            <Drawer open={open} onClose={toggleSidebar}>
                {DrawerList}
            </Drawer>

            <Snackbar
                open={snackbar.open}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity={snackbar.severity}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </div>
    )
}
