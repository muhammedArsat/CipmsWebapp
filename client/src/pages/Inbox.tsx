import { Typography } from "@mui/material"
import toast from "react-hot-toast"
import { MentorApi, type updateStatusType } from "../apis/mentorApi"
import { useAuth } from "../contexts/AuthContext"
import { useEffect, useState } from "react"
import InboxCard, { type InboxCardProps } from "../components/InboxCard"


const Inbox = () => {


  const { user } = useAuth()
  const [applications, setApplications] = useState<InboxCardProps[]>([])

  const handleApproveButton = async(id:string) => {
    try {

      const updateStatus: updateStatusType = "APPROVED"
      const response = await MentorApi.updateApplication({ id, mentorId:user?.id as string, updateStatus })
      setApplications(prev => prev.filter(app => app.id !== id))
      console.log(response)

    } catch (err: any) {
      toast.error(err.response.data.message || "Something went wrong")
    }
  }
  const handleApplications = async () => {
    try {

      const response = await MentorApi.fetchAllApplications(user?.id as string)
      setApplications(response.data)
      console.log(response)

    } catch (err: any) {
      toast.error(err.response.data.message || "Something went wrong")
    }
  }

  const handleRejectApplication = async (id : string) => {
    try {
      const updateStatus: updateStatusType = "REJECTED"
      const response = await MentorApi.updateApplication({ id , mentorId: user?.id as string, updateStatus })
      setApplications(prev => prev.filter(app => app.id !== id))

      console.log(response)
    } catch (err: any) {
      toast.error(err.response.data.message || "Something went wrong")

    }
  }
  


  useEffect(() => {
    handleApplications()
  }, [])

  return (
    <div>
      <Typography variant="h3" color="inherit">Inbox</Typography>
      <Typography variant="subtitle2" color="inherit">You can manage all your mentees applied application which have to approve/rejected by you</Typography>

      {applications.length === 0 ? <Typography color="inherit" variant="subtitle1" className="text-center" sx={{my:"30px"}}>Inbox is empty</Typography>
        :

        applications.map((application, idx) => {
          return (
            <div key={idx} className="my-2">
              <InboxCard
                id={application.id}
                title={application.title}
                company={application.company}
                minCgpa={application.minCgpa}
                studentDepartment={application.studentDepartment}
                studentName={application.studentName}
                studentResumeUrl={application.studentResumeUrl}
                studentCgpa={application.studentCgpa}
                studentEmail={application.studentEmail}
                studentRollNo={application.studentRollNo}
                appliedAt={application.appliedAt}
                companyLogo={application.companyLogo}
                handleApprove={handleApproveButton}
                handleReject={handleRejectApplication}
              />

            </div>
          )
        })}
    </div>
  )
}

export default Inbox
