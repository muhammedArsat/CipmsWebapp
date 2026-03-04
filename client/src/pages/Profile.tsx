import toast from "react-hot-toast"
import { StudentApi } from "../apis/studentApi"
import { useAuth } from "../contexts/AuthContext"
import { useEffect, useState } from "react"
import UploadButton from "../components/UploadButton"
import { Box, Typography, TextField, Button } from "@mui/material"
import Grid from "@mui/material/Grid"

interface ProfileFormData {
  name: string
  email: string
  department: string
  phoneNo: string
  cgpa: number | null
  semester: number | null
  year: number | null
  skills: string[]
  profileUrl: string
  resumeUrl: string | null
}

interface FormField {
  name: keyof ProfileFormData
  label: string
  type?: string
  disabled?: boolean
  placeholder?: string
  validate?: (value: any) => string | null
}

const FORM_FIELDS: FormField[] = [
  { name: "name", label: "Name", disabled: true },
  { name: "email", label: "Email", type: "email", disabled: true },
  { name: "department", label: "Department", disabled: true },
  {
    name: "phoneNo",
    label: "Phone Number",
    placeholder: "Enter 10-digit phone number",
    validate: (value) => {
      if (!value) return "Phone number is required"
      if (!/^[0-9]{10}$/.test(value)) return "Enter valid 10-digit phone number"
      return null
    }
  },
  {
    name: "cgpa",
    label: "CGPA",
    type: "number",
    placeholder: "Enter CGPA (0-10)",
    validate: (value) => {
      if (value && (value < 0 || value > 10)) return "CGPA must be between 0 and 10"
      return null
    }
  },
  {
    name: "semester",
    label: "Semester",
    type: "number",
    placeholder: "Enter semester (1-8)",
    validate: (value) => {
      if (value && (value < 1 || value > 8)) return "Semester must be between 1 and 8"
      return null
    }
  },
  {
    name: "year",
    label: "Year",
    type: "number",
    placeholder: "Enter year (1-4)",
    validate: (value) => {
      if (value && (value < 1 || value > 4)) return "Year must be between 1 and 4"
      return null
    }
  },
]

const Profile = () => {
  const { user } = useAuth()
  const [skillInput, setSkillInput] = useState<string>("")
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [formData, setFormData] = useState<ProfileFormData>({
    name: "",
    email: "",
    department: "",
    phoneNo: "",
    cgpa: null,
    semester: null,
    year: null,
    skills: [],
    profileUrl: "",
    resumeUrl: null
  })
  const [errors, setErrors] = useState<Partial<Record<keyof ProfileFormData, string>>>({})
  const [isLoading, setIsLoading] = useState(false)
  const [originalData, setOriginalData] = useState<ProfileFormData | null>(null)

  const handleProfileFetch = async () => {
    try {
      const response = await StudentApi.fetchProfile(user?.id as string)
      console.log(response)

      // Extract skill names from the nested structure
      const skillNames = response.skills?.map((item: any) => item.skill.name) || []

      const formattedData = {
        ...response,
        skills: skillNames
      }

      setFormData(formattedData)
      setOriginalData(formattedData)
      setSkillInput(skillNames.join(", "))
    } catch (err: any) {
      toast.error(err.response.data.message || "Something went wrong")
    }
  }

  const handleInputChange = (name: keyof ProfileFormData, value: any) => {
    setFormData(prev => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleResumeUpload = (file: File | null) => {
    setResumeFile(file)
  }

  const validateForm = () => {
    const newErrors: Partial<Record<keyof ProfileFormData, string>> = {}

    FORM_FIELDS.forEach(field => {
      if (field.validate) {
        const error = field.validate(formData[field.name])
        if (error) {
          newErrors[field.name] = error
        }
      }
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      toast.error("Please fix the errors in the form")
      return
    }

    const skillArray = skillInput
      .split(",")
      .map(skill => skill.trim())
      .filter(skill => skill.length > 0)

    setIsLoading(true)
    try {
      let resumeUrl = formData.resumeUrl

      // Upload resume file if a new one is selected
      if (resumeFile) {
        const formDataToUpload = new FormData()
        formDataToUpload.append("resume", resumeFile)
        // const uploadResponse = await StudentApi.uploadResume(user?.id as string, formDataToUpload)
        // resumeUrl = uploadResponse.url
        console.log("Resume file to upload:", resumeFile)
      }

      const submissionData: ProfileFormData = {
        ...formData,
        skills: skillArray,
        resumeUrl: resumeUrl
      }

      console.log("Final submission data:", submissionData)
      const response = await StudentApi.updateProfile(submissionData)

      toast.success(response?.message || "Profile updated successfully")

      setOriginalData(submissionData)
      setFormData(submissionData)
      setResumeFile(null)
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Failed to update profile")
    } finally {
      setIsLoading(false)
    }
  }

  const handleReset = () => {
    if (originalData) {
      setFormData(originalData)
      setSkillInput(originalData.skills?.join(", ") || "")
      setResumeFile(null)
      setErrors({})
    }
  }

  const isDirty =
    JSON.stringify(formData) !== JSON.stringify(originalData) ||
    skillInput !== (originalData?.skills?.join(", ") || "") ||
    resumeFile !== null

  useEffect(() => {
    handleProfileFetch()
  }, [])

  return (
    <Box sx={{ p: 3, width: "100%" }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Profile
      </Typography>

      <form className="grid grid-cols-1 md:grid-cols-2 w-full gap-3" onSubmit={handleSubmit}>
       
          {FORM_FIELDS.map((field) => (
            
              <TextField
                fullWidth
                label={field.label}
                type={field.type || "text"}
                placeholder={field.placeholder}
                disabled={field.disabled}
                value={formData[field.name] ?? ""}
                onChange={(e) => handleInputChange(
                  field.name,
                  field.type === "number" ? (e.target.value ? Number(e.target.value) : null) : e.target.value
                )}
                error={!!errors[field.name]}
                helperText={errors[field.name]}
                InputProps={{
                  inputProps: {
                    step: field.type === "number" && field.name === "cgpa" ? "0.01" : undefined
                  }
                }}
              />
          
          ))}

          
            <TextField
              fullWidth
              label="Skills"
              placeholder="Add skills (comma separated)"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              helperText="Example: JavaScript, React, Node.js, TypeScript"
            />
         

         
            <Box sx={{
              bgcolor: "background.paper",
              p: 2,
              borderRadius: 1,
              border: 1,
              borderColor: "divider",
              display: "flex",
              flexDirection: "column",
          alignItems: "center",
          width: "100%",
          gridColumn:"1/-1"
            }}>
              <Typography variant="subtitle1" sx={{ mb: 2 }}>
                Resume (PDF)
              </Typography>
              <UploadButton onFileSelect={handleResumeUpload} />
              {resumeFile && (
                <Typography variant="body2" sx={{ mt: 1, color: "success.main" }}>
                  Selected: {resumeFile.name}
                </Typography>
              )}
              {!resumeFile && formData.resumeUrl && (
                <Button
                  component="a"
                  href={formData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ mt: 2 }}
                  size="small"
                  variant="text"
                >
                  View Current Resume
                </Button>
              )}
            </Box>
       

       
        
        
      </form>
      <Box sx={{ display: "flex", mt: "10px", gap: 2 }}>
        <Button
          type="submit"
          variant="contained"
          disabled={!isDirty || isLoading}
          onClick={handleSubmit}
        >
          {isLoading ? "Updating..." : "Update Profile"}
        </Button>

        <Button
          type="button"
          variant="outlined"
          onClick={handleReset}
          disabled={!isDirty}
        >
          Reset
        </Button>
      </Box>
    </Box>
  )
}

export default Profile
