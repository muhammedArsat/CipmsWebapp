import { Box, Typography, useTheme, Paper, Divider, Button, ListItem, ListItemText } from "@mui/material"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useNavigate, useParams } from "react-router-dom"
import { PlacementOfficerApi } from "../apis/PlacementOfficerApi"
import { useAuth } from "../contexts/AuthContext"
import { InternshipUtils } from "../utils/Internship.utils"
import type { MODE } from "../types/internship.type"

import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import LaptopMacIcon from '@mui/icons-material/LaptopMac'
import ApplyModal from "../components/ApplyModal"
export interface FetchInternshipData {
    id: string,
    title: string
    companyName: string
    companyUrl?: string
    description: string
    companyLogo: string
    mode: MODE
    location: string
    salaryPackage?: string
    applicationDeadline?: string
    requirement?: string
    skills: string[],
    duration: string
    postedById: string,
    minCgpa: number,
    applicantCount: number
}


const InternshipDetail = () => {
    const { id } = useParams()
    const { user } = useAuth()
    const [internship, setInternship] = useState<FetchInternshipData>()
    const theme = useTheme()
    const navigate = useNavigate()

    const [isApplyOpen, setIsApplyOpen] = useState(false)

    useEffect(() => {
        fetchInternship()

    }, [])


    useEffect(() => {
        
        if (isApplyOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
    },[isApplyOpen])

    const handleEdit = () => {
        navigate(`/new-internship?edit=true&id=${id}`)
    }

    const handleDelete = async () => {
        if (!internship?.id || !user?.id) {
            toast.error("Unable to delete: Missing internship or user ID.")
            return
        }
        try {
            const response = await PlacementOfficerApi.deletePlacement(internship.id, user.id)
            if (response.success) {
                setTimeout(() => {
                    navigate("/dashboard")
                }, 500)

                toast.success("Internship deleted successfully")
            }
        } catch (err: any) {
            toast.error(err.response.data.message || "Internal server error")
        }
    }

    const fetchInternship = async () => {
        try {
            const response = await PlacementOfficerApi.getDetailOfTheInternship(id, user?.id)
            setInternship(response.data)
        } catch (err: any) {
            toast.error(err.response.data.message || "Internal server error")
        }
    }

    return (
        <div className="flex flex-col">
            <div className="flex flex-col lg:flex-row justify-center items-start gap-2">
                <Paper className="basis-3/4 min-h-fit p-2">
                    <Typography variant="h6" fontWeight="bold">Description</Typography>
                    <Box
                        dangerouslySetInnerHTML={{
                            __html: internship?.description || '<p>No description available</p>'
                        }}
                        sx={{
                            color: theme.palette.text.primary,
                            '& p': {
                                mb: 2,
                                color: theme.palette.text.primary,
                                fontweight: "normal"

                            },
                            '& h1, & h2, & h3, & h4, & h5, & h6': {
                                mb: 1,
                                mt: 2,
                                color: theme.palette.text.primary,
                                fontweight: "normal"
                            },
                            '& ul, & ol': {
                                ml: 3,
                                mb: 2,
                                color: theme.palette.text.primary
                            },
                            '& li': {
                                mb: 0.5,
                                color: theme.palette.text.primary
                            },
                            '& strong': {
                                fontWeight: 'bold',
                                color: theme.palette.text.primary
                            },
                            '& em': {
                                fontStyle: 'italic',
                                color: theme.palette.text.primary
                            },
                            '& a': {
                                color: theme.palette.primary.main,
                                textDecoration: 'underline'
                            },
                            '& blockquote': {
                                color: theme.palette.text.secondary,
                                borderLeft: `4px solid ${theme.palette.divider}`,
                                paddingLeft: 2,
                                margin: '16px 0',
                                fontStyle: 'italic'
                            }
                        }}
                    />
                    <Typography variant="h6">Requirements</Typography>
                    <Typography variant="body1" color="inherit" fontWeight="normal">{internship?.requirement}</Typography>

                    <Typography variant="h6" className="pt-2">Skills</Typography>

                    <Box sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 1,
                        justifyContent: {
                            xs: 'center',        // Center on mobile
                            sm: 'flex-start',    // Left align on tablet+
                            md: 'space-between', // Space between on desktop
                        },
                        alignItems: 'flex-start',
                        mt: 1
                    }}>
                        {internship?.skills.map((skill, _idx) => {
                            return (
                                <ListItem
                                    key={_idx}
                                    sx={{
                                        width: {
                                            xs: 'calc(100% - 8px)',  // Full width on mobile (minus gap)
                                            sm: 'calc(50% - 8px)',   // Half width on small screens
                                            md: 'auto',              // Auto width on medium+ screens
                                            lg: 'auto'               // Auto width on large screens
                                        },
                                        p: 1,

                                        '&:hover': {
                                            backgroundColor: theme.palette.action.hover,
                                        }
                                    }}
                                >
                                    <ListItemText
                                        primary={
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <Typography
                                                    variant="body2"

                                                    sx={{
                                                        backgroundColor: 'primary.main',
                                                        color: "white",
                                                        borderRadius: '50%',
                                                        width: 24,
                                                        height: 24,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        fontSize: '0.75rem',
                                                        fontWeight: 'bold',
                                                        flexShrink: 0 // Prevent number from shrinking
                                                    }}
                                                >
                                                    {_idx + 1}
                                                </Typography>
                                                <Typography
                                                    variant="body1"
                                                    color="inherit"
                                                    sx={{
                                                        fontSize: { xs: '0.875rem', md: '1rem' },
                                                        wordBreak: 'break-word' // Handle long skill names
                                                    }}
                                                >
                                                    {skill}
                                                </Typography>
                                            </Box>
                                        }
                                    />
                                </ListItem>
                            )
                        })}
                    </Box>

                </Paper>

                <Paper className="w-full lg:basis-1/4 p-4" elevation={4}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {/* Header with divider */}
                        <Box>
                            <Typography variant="h6" fontWeight="semibold" align="center">
                                Job Overview
                            </Typography>
                            <Divider sx={{ mt: 1, mb: 2 }} />
                        </Box>

                        {/* Company Info */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                            <img
                                src={internship?.companyLogo}
                                alt="company_logo"
                                className="w-20 h-20 rounded-full"
                            />
                            <Typography variant="h6" fontWeight="bold" align="center">
                                {internship?.companyName}
                            </Typography>

                            <Typography
                                sx={{ color: "primary.light" }}
                                variant="body1"
                                align="center"
                            >
                                <a href={`${internship?.companyUrl}`} target="_blank"> {internship?.companyUrl}</a> 
                            </Typography>
                           
                            { <Typography
                                variant="body1"
                                align="center"
                            color="inherit">
                                Applicants Count : {internship?.applicantCount}
                            </Typography>}

                        </Box>

                        <Divider sx={{ my: 1 }} />

                        {/* Additional Info */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Typography variant="body1" color="inherit" className="flex items-center gap-2">
                                <FmdGoodOutlinedIcon />
                                <strong>Location:</strong> {internship?.location}
                            </Typography>
                            <Typography variant="body1" color="inherit" className="flex items-center gap-2">
                                <LaptopMacIcon />
                                <strong>Mode:</strong> {internship?.mode}
                            </Typography>
                            <Typography variant="body1" color="inherit" className="flex items-center gap-2">
                                <AccessTimeIcon />
                                <strong>Duration:</strong> {internship?.duration}
                            </Typography>
                            <Typography variant="body1" color="inherit" className="flex items-center gap-2">
                                <CurrencyRupeeIcon />
                                <strong>Salary:</strong> {internship?.salaryPackage}
                            </Typography>
                            <Typography variant="body1" color="inherit" className="flex items-center gap-2">
                                <CalendarTodayIcon />
                                <strong>Deadline:</strong> {InternshipUtils.formatDate(internship?.applicationDeadline as string)}
                            </Typography>
                            <Typography color="inherit" className="flex items-center gap-2">
                                <SchoolOutlinedIcon />
                                <strong>Academic Eligibility: </strong>{internship?.minCgpa}
                            </Typography>

                            {user?.role === "PLACEMENT_OFFICER" && <div className="flex items-center gap-3 w-full mt-2">

                                <Button
                                    variant="outlined"
                                    className="w-full"
                                    color="error"
                                    sx={{ borderColor: theme.palette.error.light, color: theme.palette.error.light }}
                                    onClick={handleDelete}
                                >
                                    Delete
                                </Button>
                                <Button variant="contained" className="w-full" onClick={handleEdit}>
                                    Edit
                                </Button>
                            </div>}

                            {user?.role === "STUDENT" && <>
                                <Button variant="contained" onClick={() => setIsApplyOpen((prev) => !prev)}>
                                    Apply Now
                                </Button>
                            </>}

                        </Box>
                    </Box>

                    {isApplyOpen && 
                    
                        <div className="inset-0 fixed bg-black/50 backdrop-blur-2xl z-50 flex justify-center items-center" onClick={()=>setIsApplyOpen((prev)=>!prev)}>
                          
                            <div onClick={(e)=>e.stopPropagation()}>
                                <ApplyModal/>

                          </div>
                    </div>
                    }
                </Paper>
            </div>
        </div>
    )
}

export default InternshipDetail
