import { Box, Button, Paper, Typography, useTheme } from "@mui/material"
import Google from '../assets/google.svg'
import Tags from "./Tags"
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined'
import WorkIcon from '@mui/icons-material/Work'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

const InternshipCard = () => {
    const theme = useTheme()

    return (
        <Paper elevation={5} className="w-full md:max-w-80 p-3">
            {/* Header with company and "New" badge */}
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1
            }}>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px"
                }}>
                    <img src={Google} alt="Google_logo" className="w-9 h-9" />
                    <Typography color="inherit">Google</Typography>
                </Box>

                <Box sx={{
                    bgcolor: "primary.main",
                    px: "10px",
                    borderRadius: "50px",
                    color: "white"
                }}>
                    <Typography variant="body1" color="inherit">New</Typography>
                </Box>
            </Box>

            {/* Job Title */}
            <Box sx={{ mb: 1.5 }}>
                <Typography variant="h6" fontWeight="bold">
                    Fullstack Engineer Intern
                </Typography>
            </Box>

            {/* Tags Container with flex wrap */}
            <Box sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 0.8,
                alignItems: "flex-start"
            }}>
                <Tags icon={<FmdGoodOutlinedIcon fontSize="small" />} value="Remote" />
                <Tags icon={<CalendarTodayIcon fontSize="small" />} value="3 Months" />
                <Tags icon={<WorkIcon fontSize="small" />} value="Full-Time" />
                <Tags icon={<AttachMoneyIcon fontSize="small" />} value="25,000/Month" />
                <Tags icon={<AccessTimeIcon fontSize="small" />} value="Feb'28" />

            </Box>

            {/* Custom dotted separator with better visibility */}
            <Box
                sx={{
                    width: '100%',
                    height: '10px',
                    backgroundImage: `radial-gradient(circle, ${theme.palette.mode === 'dark' ? '#666' : '#9e9e9e'
                        } 1.5px, transparent 1.5px)`,
                    backgroundSize: '20px 20px',
                    backgroundRepeat: 'repeat-x',
                    backgroundPosition: 'left center',
                    my: 2
                }}
            />

            <Box sx={{
                display: 'flex',
                justifyContent: "space-between",
                alignItems:"center"
            }}>

                <span className="border border-neutral-400  dark:border-neutral-500 p-2 rounded-lg">
                    <BookmarkBorderOutlinedIcon/>
                </span>
                <Button variant="contained">
                    View More
                </Button>
            </Box>
        </Paper>
    )
}

export default InternshipCard
