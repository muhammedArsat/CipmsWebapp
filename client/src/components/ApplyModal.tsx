import { Box, Button, Paper, TextField, Typography } from "@mui/material"
import { useAuth } from "../contexts/AuthContext"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { StudentApi } from "../apis/studentApi"
import { useNavigate, useParams } from "react-router-dom"

interface ApplyFormData {
    name: string,
    rollNo: string,
    department: string,
    cgpa: number | null,
    semester: number | null,
    resumeUrl: string | null
}


interface FormField {
    name: keyof ApplyFormData,
    label: string,
    type?: string,
    disabled?: boolean,
    placeholder?: string
}

const FORM_FIELDS: FormField[] = [
    { name: "name", label: "Name", disabled: true },
    { name: "rollNo", label: "Roll Number", disabled: true },
    { name: "department", label: "Department", disabled: true },
    {
        name: "cgpa",
        label: "CGPA",
        type: "number",
        placeholder: "Enter your CGPA"
    },
    {
        name: "semester",
        label: "Semester",
        type: "number",
        placeholder: "Enter your semester"
    },
]

const ApplyModal = () => {

    const { user } = useAuth()

    const {id} = useParams()
  

    const [formData, setFormData] = useState<ApplyFormData>({
        name: "",
        rollNo: "",
        department: "",
        cgpa: null,
        semester: null,
        resumeUrl: null
    })


    const [isLoading, setIsLoading] = useState(false)

    const fetchUserProfile = async () => {
        try {

            const response = await StudentApi.fetchProfile(user?.id as string)
            setFormData({
                name: response.name || "",
                rollNo:response.userId || "",
                department: response.department || "",
                cgpa: response.cgpa || null,
                semester: response.semester || null,
                resumeUrl: response.resumeUrl || null

            })
        } catch (err: any) {
            toast.error(err.response.data.message || "Something went wrong")
        }
    }

    useEffect(() => {
        fetchUserProfile()
    }, [])

    const handleInputChange = (name: keyof ApplyFormData, value: any) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }


    const handleSubmit = async (e: React.FormEvent) => {
        try {
            e.preventDefault();
            const response = await StudentApi.applyInternship(user?.id as string, id as string)
            console.log(response)
            toast.success("Internship Applied successfully")
        } catch (err:any) {
            toast.error(err.response.data.message || "Something went wrong")
        }
    }
    return (
        <Paper elevation={5} className="min-w-3xl p-2 ">
            <Typography variant="h5" className="m-1">
                Apply Here
            </Typography>
            <Typography color="inherit" variant="body2" sx={{my:"10px"}}>
                Your details filled automatically from your profile if anything missed fill it by you
            </Typography>


            <Box component={"form"} onSubmit={handleSubmit}>
                <div className="flex flex-col gap-3">
                    {FORM_FIELDS.map((field, idx) => (
                        <TextField
                            fullWidth
                            label={field.label}
                            placeholder={field.placeholder}
                            disabled={field.disabled}
                            value={formData[field.name] ?? ""}
                            onChange={(e) => handleInputChange(
                                field.name,
                                field.type === "number" ? (e.target.value ? Number(e.target.value) : null) : e.target.value
                            )}
                            InputProps={{
                                inputProps: {
                                    step: field.type === "number" && field.name === "cgpa" ? "0.01" : undefined
                                }
                            }}

                        />
                    ))}

                    <Button variant="contained" className="p-4" type="submit">Apply Now</Button>
                </div>

            </Box>
        </Paper>
    )
}

export default ApplyModal
