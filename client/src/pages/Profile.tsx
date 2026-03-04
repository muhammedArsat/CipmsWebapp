import toast from "react-hot-toast"
import { StudentApi } from "../apis/studentApi"
import { useAuth } from "../contexts/AuthContext"
import { useEffect, useState } from "react"
import UploadButton from "../components/UploadButton"
import { Box, Typography } from "@mui/material"

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
  { name: "email", label: "Email", disabled: true },
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
      setFormData(response)
      setOriginalData(response)
      setSkillInput(response.skills?.join(", ") || "")
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

      // await StudentApi.updateProfile(user?.id as string, submissionData)
      console.log("Final submission data:", submissionData)

      toast.success("Profile updated successfully")
      setOriginalData(submissionData)
      setFormData(submissionData)
      setResumeFile(null)
    } catch (err: any) {
      toast.error(err.response.data.message || "Failed to update profile")
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
    <div className="p-6 w-full">
      <Typography color="inherit" variant="h4">Profile</Typography>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {FORM_FIELDS.map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium mb-2">
                {field.label}
              </label>
              <input
                type={field.type || "text"}
                step={field.type === "number" && field.name === "cgpa" ? "0.01" : undefined}
                placeholder={field.placeholder}
                disabled={field.disabled}
                value={formData[field.name] as any || ""}
                onChange={(e) => handleInputChange(
                  field.name,
                  field.type === "number" ? (e.target.value ? Number(e.target.value) : null) : e.target.value
                )}
                className={`
                  w-full px-4 py-2 border rounded-lg
                  ${field.disabled
                    ? "bg-gray-100 cursor-not-allowed"
                    : "focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  }
                  ${errors[field.name] ? "border-red-500" : "border-gray-300"}
                `}
              />
              {errors[field.name] && (
                <p className="text-red-500 text-sm mt-1">
                  {errors[field.name]}
                </p>
              )}
            </div>
          ))}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Skills</label>
          <input
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            placeholder="Add skills (comma separated)"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        
        </div>

        <Box sx={{
          bgcolor: "background.paper",
          p: 2,
          borderRadius: 1,
          border: 1,
          borderColor: "divider",
          display: "flex",
          flexDirection: "column",
          alignItems:"center"
        }}>
          <label className="block text-sm font-medium mb-2">Resume (PDF)</label>
          <UploadButton onFileSelect={handleResumeUpload} />
          {resumeFile && (
            <Typography variant="body2" sx={{ mt: 1, color: "success.main" }}>
              Selected: {resumeFile.name}
            </Typography>
          )}
          {!resumeFile && formData.resumeUrl && (
            <a
              href={formData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline mt-2 inline-block"
            >
              View Current Resume
            </a>
          )}
        </Box>

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={!isDirty || isLoading}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? "Updating..." : "Update Profile"}
          </button>

          <button
            type="button"
            onClick={handleReset}
            disabled={!isDirty}
            className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:cursor-not-allowed transition-colors"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  )
}

export default Profile
