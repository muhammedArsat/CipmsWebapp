import {  Button, Typography } from "@mui/material"
import NewInternshipForm from "../components/NewInternshipForm"
import { useState } from "react"
import type { MODE } from "../types/internship.type"
import { useAuth } from "../contexts/AuthContext"
import { PlacementOfficerApi } from "../apis/PlacementOfficerApi"
import toast from "react-hot-toast"

export interface InternshipData {
  title: string
  companyName: string
  companyUrl?: string
  description: string
  mode: MODE
  location: string
  salaryPackage?: string
  applicationDeadline?: string
  requirements?: string
  skills: string,
  duration: string
  postedById: string
}

const NewInternship = () => {

  const { user } = useAuth()

  const [internshipData, setInternshipData] = useState<InternshipData>({
    title: "",
    companyName: "",
    companyUrl: "",
    description: "",
    mode: "" as MODE,
    location: "",
    duration: "",
    salaryPackage: "",
    applicationDeadline: "",
    requirements: "",
    skills: "",

    postedById: String(user?.id)
  })

  const handleChange = (field: keyof InternshipData, value: any) => {

    setInternshipData(prev => ({ ...prev, [field]: value }))

  }

  const handleSubmit = async () => {
    const finalData = {
      ...internshipData,
      skills: internshipData.skills
        .split(',')
        .map(skill => skill.trim())
        .filter(skill => skill !== '')
    }

    try {
      const response = await PlacementOfficerApi.createPlacement(finalData)
      if (response.success) {
        toast.success("Internship posted successfully")
        setInternshipData({
          title: "",
          companyName: "",
          companyUrl: "",
          description: "",
          mode: "" as MODE,
          location: "",
          duration: "",
          salaryPackage: "",
          applicationDeadline: "",
          requirements: "",
          skills: "",

          postedById: String(user?.id)
        })
      }
    } catch (err:any ) {
      toast.error(err.response.data.message || "Something went wrong")


    }
  }
    return (
      <div className="flex flex-col gap-3">

        <div className="flex justify-between items-center mt-2">
          <div className="flex flex-col gap-2 basis-10/12">

            <Typography variant="h3" className="">
              New Internship
            </Typography>
            <Typography variant="body1" color="inherit">
              This page allows administrators and placement officers to create new internship opportunities
              for students. You can define all the essential details including company information,
              job requirements, application deadlines, and selection criteria.
            </Typography>
          </div>
          <Button variant="contained" className="basis-1/12" size="large" onClick={handleSubmit}>
            Submit
          </Button>
        </div>




        <NewInternshipForm data={internshipData} onChange={handleChange} />
      </div>
    )
  }

export default NewInternship
