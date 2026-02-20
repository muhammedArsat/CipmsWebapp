import { MenuItem, TextField } from "@mui/material"
import type { InternshipData } from "../pages/NewInternship"
import FormTextEditor from "./FormTextEditor"
import { useAuth } from "../contexts/AuthContext"
import { useSearchParams } from "react-router-dom"
import { useEffect } from "react"
import { PlacementOfficerApi } from "../apis/PlacementOfficerApi"
import toast from "react-hot-toast"


interface NewInternshipForm {
    data: InternshipData,
    onChange: (field: keyof InternshipData, value: any) => void
}

const NewInternshipForm = ({ data, onChange }: NewInternshipForm) => {
    const { user } = useAuth()
    const [searchParams] = useSearchParams()

    const isEditMode = searchParams.get('edit') === 'true'
    const editId = searchParams.get('id')

    const fieldConfigs = [
        { key: "title", label: "Title", type: "text", required: true },
        { key: "companyName", label: "Company Name", type: "text", required: true },
        { key: "companyUrl", label: "Company Url", type: "text", required: true },
        { key: "mode", label: "Mode", type: "select", required: true, options: ['ONLINE', "OFFLINE", "HYBRID"], placeholder: "SELECT MODE" },
        { key: "location", label: "Location", type: "text", required: true },
        { key: "salaryPackage", label: "Salary Package", type: "text", required: true },
        { key: "skills", label: "Skills", type: "text", required: true },
        { key: "applicationDeadline", type: "date", required: true, label: "Deadline" },
        { key: "duration", type: "text", required: true, label: "Duration" },
        { key: "requirements", label: "Requirements", type: "text", required: true },
        { key: "minCgpa", label: "Minimum CGPA", type: "number", required: true }
    ] as const

    // Fetch data for edit mode when component mounts
    useEffect(() => {
        if (isEditMode && editId && user?.id) {
            fetchInternshipForEdit()
        }
    }, [isEditMode, editId, user?.id])

    const fetchInternshipForEdit = async () => {
        try {
            const response = await PlacementOfficerApi.getDetailOfTheInternship(editId, user?.id)
            const fetchedData = response.data

            // Transform and populate the form data
            const transformedData: Partial<InternshipData> = {
                title: fetchedData.title || "",
                companyName: fetchedData.companyName || "",
                companyUrl: fetchedData.companyUrl || "",
                description: fetchedData.description || "",
                mode: fetchedData.mode || "",
                location: fetchedData.location || "",
                duration: fetchedData.duration || "",
                salaryPackage: fetchedData.salaryPackage || "",
                applicationDeadline: fetchedData.applicationDeadline ?
                    new Date(fetchedData.applicationDeadline).toISOString().split('T')[0] : "",
                requirements: fetchedData.requirement || fetchedData.requirements || "",
                skills: Array.isArray(fetchedData.skills)
                    ? fetchedData.skills.join(', ')
                    : fetchedData.skills || "",
                minCgpa: fetchedData.minCgpa || 0
            }

            // Update all fields at once
            Object.entries(transformedData).forEach(([key, value]) => {
                if (value !== undefined) {
                    onChange(key as keyof InternshipData, value)
                }
            })

        } catch (err: any) {
            toast.error("Failed to fetch internship data for editing")
        }
    }

    const handleFieldChange = (field: keyof InternshipData, value: any) => {
        onChange(field, value)
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {fieldConfigs.map((field, idx) => (
                <div key={idx}>
                    {field.type === "select" ? (
                        <TextField
                            fullWidth
                            select
                            label={field.label}
                            required
                            value={data[field.key] || ""}
                            onChange={(e) => handleFieldChange(field.key, e.target.value)}
                        >
                            {field.options.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                    ) : field.type === "date" ? (
                        <TextField
                            fullWidth
                            label={field.label}
                            type="date"
                            value={data[field.key] || ""}
                            onChange={(e) => handleFieldChange(field.key, e.target.value)}
                            required
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                placeholder: ""
                            }}
                        />
                    ) : field.type === "number" ? (
                        <TextField
                            fullWidth
                            label={field.label}
                            type="number"
                            value={data[field.key] || ""}
                            onChange={(e) => handleFieldChange(field.key, e.target.value)}
                            required
                            inputProps={{
                                min: field.key === "minCgpa" ? "0" : undefined,
                                max: field.key === "minCgpa" ? "10" : undefined,
                                step: field.key === "minCgpa" ? "0.1" : undefined
                            }}
                        />
                    ) : (
                        <TextField
                            fullWidth
                            label={field.label}
                            type={field.type}
                            value={data[field.key] || ""}
                            onChange={(e) => handleFieldChange(field.key, e.target.value)}
                            required
                        />
                    )}
                </div>
            ))}

            <div className="md:col-span-2">
                <FormTextEditor
                    label="Description"
                    value={data["description"]}
                    onChange={(htmlContent) => handleFieldChange('description', htmlContent)}
                />
            </div>
        </div>
    )
}

export default NewInternshipForm
