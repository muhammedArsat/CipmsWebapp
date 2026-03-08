import { Typography } from "@mui/material"
import ApplicationTab from '../components/ApplicationTab'
import { StudentApi } from "../apis/studentApi"
import toast from "react-hot-toast"
import { useAuth } from "../contexts/AuthContext"
import { useEffect, useState } from "react"


export interface InternshipType{
  applicationDeadline: string,
  companyLogo: string,
  companyName: string,
  title:string
}

export interface ApplicationType{
  appliedAt: string,
  certificateUrl?: string,
  id: string,
  internshipId: string,
  studentId: string,
  status: string
  internship:InternshipType
}


interface ApplicationResponse {
  appliedApplications: ApplicationType[],
  appliedApplicationsCount: number,
  
  ongoingApplications: ApplicationType[]
  ongoingApplicationsCount: number,
  
  completedApplications: ApplicationType[],
  completedApplicationsCount: number,
  
  rejectedApplications: ApplicationType[],
  rejectedApplicationsCount:number
}

const MyApplications = () => {

  const { user } = useAuth()

  const [response, setResponse] = useState<ApplicationResponse>();
  const handleFetchApplications = async () => {
    try {

      const response = await StudentApi.fetchAllApplication(user?.id as string)
      setResponse(response)
      // console.log(response)
    } catch (err: any) {
      toast.error(err.response.data.message || "Something went wrong")
    }
  }


  useEffect(() => {
    handleFetchApplications()
  }, [])
  return (
    <div>
      <Typography variant="h3" color="inherit">
        My Applications
      </Typography>
      <Typography variant="body1" color="inherit">
        Here you can view all of your applied applications. Which are in ongoing, completed and pending
      </Typography>

      <ApplicationTab
        ongoingCount={response?.ongoingApplicationsCount ?? 0}
        rejectedCount={response?.rejectedApplicationsCount ?? 0}
        completedCount={response?.completedApplicationsCount ?? 0}
        appliedCount={response?.appliedApplicationsCount ?? 0}
        ongoingApplications={response?.ongoingApplications }
        completedApplications={response?.completedApplications}
        rejectedApplications={response?.rejectedApplications}
        appliedApplications={response?.appliedApplications}
      />
    </div>
  )
}

export default MyApplications
