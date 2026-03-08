import { Box, Button, Paper, Typography, useTheme } from "@mui/material"
import Tags from "./Tags"
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
import { InternshipUtils } from "../utils/Internship.utils"
import { useNavigate } from "react-router-dom"

interface InternshipCardProps {
    id: string,
    companyName: string,
    companyLogo: string,
    title: string,
    location: string,
    duration: string,
    deadline: string,
    salaryPackage: string,
    status: string
    match: string | null
}
const InternshipCard = ({ id, companyName, companyLogo, title, location, duration, deadline, salaryPackage, status, match = null }: InternshipCardProps) => {
    const theme = useTheme()
    const navigate = useNavigate()



    const handleClick = () => {
        navigate(`/internship-detail/${id}`)
    }
    return (
        <Paper elevation={5} className="w-full md:max-w-80 p-3">
            {/* Header with company and "New" badge */}
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1,
                gap: 1
            }}>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    minWidth: 0, // Allow flex item to shrink
                    flex: 1
                }}>
                    <img src={companyLogo} alt="Company logo" className="w-9 h-9 rounded-full flex-shrink-0" />
                    <Typography
                        color="inherit"
                        variant="subtitle2"
                        fontWeight="bold"
                        sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        {companyName}
                    </Typography>
                </Box>

                <Box sx={{
                    display: 'flex',
                    gap: 1,
                    alignItems: 'center',
                    flexShrink: 0 // Prevent badges from shrinking
                }}>
                    {match && (
                        <Typography
                            variant="button"
                            sx={{
                                bgcolor: 'success.main',
                                color: 'white',
                                px: 1,
                                borderRadius: '50px',
                                fontSize: '0.75rem',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            {match}%
                        </Typography>
                    )}
                    <Box sx={{
                        bgcolor: "primary.main",
                        px: 1,
                        borderRadius: "50px",
                        color: "white"
                    }}>
                        <Typography variant="body2" color="inherit">{status}</Typography>
                    </Box>
                </Box>
            </Box>

            {/* Job Title */}
            <Box sx={{ mb: 1.5 }}>
                <Typography variant="h6" fontWeight="semibold">
                    {title}
                </Typography>
            </Box>

            {/* Tags Container with flex wrap */}
            <Box sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 0.8,
                alignItems: "flex-start"
            }}>
                <Tags icon={<FmdGoodOutlinedIcon fontSize="small" />} value={location} />
                <Tags icon={<CalendarTodayIcon fontSize="small" />} value={duration} />
                {/* <Tags icon={<WorkIcon fontSize="small" />} value="Full-Time" /> */}
                <Tags icon={<CurrencyRupeeIcon fontSize="small" />} value={salaryPackage} />
                <Tags icon={<AccessTimeIcon fontSize="small" />} value={InternshipUtils.formatDate(deadline)} />

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
                alignItems: "center"
            }}>

                <span className="border border-neutral-400  dark:border-neutral-500 p-2 rounded-lg">
                    <BookmarkBorderOutlinedIcon />
                </span>

                <Button variant="contained" onClick={handleClick}>
                    View More
                </Button>
            </Box>
        </Paper>
    )
}

export default InternshipCard
