import { Box, Button, Divider, IconButton, Paper, Typography } from "@mui/material"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { useState } from "react"
import InboxDialog from "./InboxDialog"
import toast from "react-hot-toast"
// import { MentorApi, type updateStatusType } from "../apis/mentorApi"
// import { useAuth } from "../contexts/AuthContext"
export interface InboxCardProps {
    id: string,
    title: string,
    company: string,
    companyLogo: string,
    minCgpa: number,
    studentName: string,
    studentDepartment: string,
    studentResumeUrl: string,
    studentCgpa: number,
    studentRollNo: string,
    appliedAt: string,
    studentEmail: string
    handleApprove: (id: string) => void
    handleReject: (id: string) => void

}

const InboxCard = ({ title, company, minCgpa, appliedAt, studentDepartment, id, studentName, studentCgpa, studentEmail, studentResumeUrl, companyLogo, studentRollNo, handleApprove,handleReject }: InboxCardProps) => {

    // const { user } = useAuth()
    // const mentorId = user?.id as string
    const [isExpand, setIsExpand] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const handleModalOpenFunc = () => {
        setIsModalOpen(prev => !prev)
    }

    const handleApplicationApprove = async () => {
        try {

            if (handleApprove) {
                handleApprove(id as string)
            }

        } catch (err: any) {
            toast.error(err.response.data.message || "Something went wrong")
        }
    }

    const handleApplicationReject = async() => {
        try {

           handleReject(id as string)
        } catch (err: any) {
            toast.error(err.response.data.message || "Something went wrong")
        }
    }
    const dateConversion = (date: string) => {
        const newDate = new Date(date)
        const convertedDate = newDate.toLocaleDateString()
        return convertedDate
    }
    return (
        <Paper className="p-2 h-fit" elevation={5}>


            <div className="flex mb-2 flex-col md:flex-row justify-between items-center">
                <div className="flex  flex-row  gap-3 items-start  w-full">
                    <div>
                        {/* left side */}
                        <img src={companyLogo} referrerPolicy="no-referrer" alt="profile_img" className="w-8 h-8 object-contain rounded-full" />

                    </div>
                    <div>
                        {/* middle side */}
                        <Typography color="inherit" variant="h6">{title}</Typography>
                        <Typography color="inherit">{company}</Typography>
                        <Typography color="inherit"><span className="text-red-400">Required Cgpa :</span> {minCgpa}</Typography>
                        <Typography color="inherit" variant="body2">Applied at: {dateConversion(appliedAt)}</Typography>

                    </div>
                </div>

                <div className="w-full flex justify-end mt-2 mb-1">
                    {/* right side */}

                    <Box sx={{
                        display: "flex",
                        gap: 2,


                    }}>
                        <Button variant="outlined" color="error" onClick={() => setIsModalOpen(prev => !prev)}>Reject</Button>
                        <Button variant="contained" color="primary" onClick={handleApplicationApprove}>Approve</Button>
                    </Box>
                </div>
            </div>

            <Divider />

            <div className="flex justify-between items-center md:pl-10">
                <Typography variant="subtitle1" color="inherit" sx={{

                }}>Student Details</Typography>

                <IconButton onClick={() => setIsExpand(prev => !prev)} className="transition-all duration-500">
                    {!isExpand ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
                </IconButton>

            </div>

            {isExpand && <div className=" pl-2 md:pl-10">
                <Typography variant="subtitle1" color="inherit">Name: <span className="font-bold">{studentName}</span></Typography>
                <Typography variant="subtitle1" color="inherit">Department: <span className="font-bold">{studentDepartment}</span></Typography>
                <Typography variant="subtitle1" color="inherit">Roll No: <span className="font-bold">{studentRollNo}</span></Typography>
                <Typography variant="subtitle1" color="inherit">Email: <span className="font-bold">{studentEmail}</span></Typography>


                <Typography variant="subtitle1" color="inherit">CGPA: <span className="font-bold">{studentCgpa}</span></Typography>

                <Typography variant="subtitle1" color="inherit">Resume: <Button variant="text" href={studentResumeUrl} target="_blank">
                    View Resume
                </Button></Typography>

            </div>}

            {isModalOpen && <div onClick={(e) => e.stopPropagation()} className="inset-0  fixed flex justify-center items-center backdrop-blur-2xl bg-black/50">
                <InboxDialog handleModalOpen={handleModalOpenFunc} handleReject={handleApplicationReject} /></div>}

        </Paper>
    )
}

export default InboxCard
