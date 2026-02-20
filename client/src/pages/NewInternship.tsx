import { Button, Typography } from "@mui/material"
import NewInternshipForm from "../components/NewInternshipForm"
import { useState, useEffect } from "react"
import { useSearchParams, useNavigate } from "react-router-dom"
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
  minCgpa: number
}

const NewInternship = () => {
  const { user } = useAuth()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  // Check if we're in edit mode
  const isEditMode = searchParams.get('edit') === 'true'
  const editId = searchParams.get('id')

  const [loading, setLoading] = useState(false)
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
    postedById: String(user?.id),
    minCgpa: 0
  })

  // Fetch data for edit mode
  useEffect(() => {
    if (isEditMode && editId && user?.id) {
      fetchInternshipForEdit()
    }
  }, [isEditMode, editId, user?.id])

  const fetchInternshipForEdit = async () => {
    setLoading(true)
    try {
      const response = await PlacementOfficerApi.getDetailOfTheInternship(editId, user?.id)
      const fetchedData = response.data

      // Transform the fetched data to match form structure
      setInternshipData({
        title: fetchedData.title || "",
        companyName: fetchedData.companyName || "",
        companyUrl: fetchedData.companyUrl || "",
        description: fetchedData.description || "",
        mode: fetchedData.mode || "" as MODE,
        location: fetchedData.location || "",
        duration: fetchedData.duration || "",
        salaryPackage: fetchedData.salaryPackage || "",
        applicationDeadline: fetchedData.applicationDeadline ?
          new Date(fetchedData.applicationDeadline).toISOString().split('T')[0] : "",
        requirements: fetchedData.requirement || fetchedData.requirements || "",
        skills: Array.isArray(fetchedData.skills)
          ? fetchedData.skills.join(', ')
          : fetchedData.skills || "",
        postedById: String(user?.id),
        minCgpa: fetchedData.minCgpa || 0
      })
    } catch (err: any) {
      toast.error("Failed to fetch internship data for editing")
      navigate('/dashboard') // Redirect back if failed to fetch
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (field: keyof InternshipData, value: any) => {
    setInternshipData(prev => ({ ...prev, [field]: value }))
  }

  const validateForm = (): boolean => {
    const requiredFields: (keyof InternshipData)[] = [
      'title', 'companyName', 'mode', 'location', 'duration',
      'skills', 'applicationDeadline', 'requirements'
    ]

    for (const field of requiredFields) {
      if (!internshipData[field] || internshipData[field] === "") {
        toast.error(`Please fill in the ${field} field`)
        return false
      }
    }

    if (internshipData.minCgpa < 0 || internshipData.minCgpa > 10) {
      toast.error("Minimum CGPA should be between 0 and 10")
      return false
    }

    return true
  }

  const handleSubmit = async () => {
    if (!validateForm()) return

    setLoading(true)

    // Transform skills from comma-separated string to array
    const finalData = {
      ...internshipData,
      skills: internshipData.skills
        .split(',')
        .map(skill => skill.trim())
        .filter(skill => skill !== '')
    }

    try {
      let response

      if (isEditMode && editId) {
        console.log(finalData)
        // Update existing internship
        response = await PlacementOfficerApi.updatePlacement(editId, finalData,user?.id)
        if (response.success) {
          toast.success("Internship updated successfully!")
          navigate(`/internship-detail/${editId}`)
        }
      } else {
        // Create new internship (existing functionality)
        response = await PlacementOfficerApi.createPlacement(finalData)
        if (response.success) {
          toast.success("Internship posted successfully!")
          // Reset form for new internship
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
            postedById: String(user?.id),
            minCgpa: 0
          })
        }
      }
    } catch (err: any) {
      const errorMessage = isEditMode
        ? "Failed to update internship. Please try again."
        : "Failed to create internship. Please try again."

      toast.error(err?.response?.data?.message || errorMessage)
    } finally {
      setLoading(false)
    }
  }

  if (loading && isEditMode) {
    return (
      <div className="flex flex-col gap-3">
        <Typography variant="h4">Loading internship data...</Typography>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center mt-2">
        <div className="flex flex-col gap-2 basis-10/12">
          <Typography variant="h3">
            {isEditMode ? "Edit Internship" : "New Internship"}
          </Typography>
          <Typography variant="body1" color="inherit">
            {isEditMode
              ? "Update the internship details below. Make sure all required fields are filled correctly."
              : "This page allows administrators and placement officers to create new internship opportunities for students. You can define all the essential details including company information, job requirements, application deadlines, and selection criteria."
            }
          </Typography>
        </div>

        <Button
          variant="contained"
          className="basis-1/12"
          size="large"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "..." : (isEditMode ? "Update" : "Submit")}
        </Button>
      </div>

      <NewInternshipForm
        data={internshipData}
        onChange={handleChange}
      />
    </div>
  )
}

export default NewInternship
