import { MenuItem, TextField } from "@mui/material"
import type { InternshipData } from "../pages/NewInternship"
import FormTextEditor from "./FormTextEditor"


interface NewInternshipForm {
    data: InternshipData,
    onChange: (field: keyof InternshipData, value: any) => void
}

const NewInternshipForm = ({ data, onChange }: NewInternshipForm) => {
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
    ] as const

    const handleFieldChange = (field: keyof InternshipData, value: any) => {
        onChange(field, value)
    }

    return (
        <form className="grid grid-cols-1 lg:grid-cols-2 gap-3" >
            {fieldConfigs.map((field, idx) => (
                <div key={idx}>
                    {field.type === "select" ? (
                        <TextField
                            fullWidth
                            select
                            label={field.label}
                            required
                            value={data[field.key]}
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
                                shrink: true, // This keeps the label above the input
                            }}
                            inputProps={{
                                placeholder: "" // Remove default placeholder
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

            <FormTextEditor
                label="Description"
                value={data["description"]}
                onChange={(htmlContent) => handleFieldChange('description', htmlContent)}
            />
        </form>
    )
}

export default NewInternshipForm
