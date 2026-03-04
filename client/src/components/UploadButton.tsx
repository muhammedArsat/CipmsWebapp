import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { toast } from 'react-hot-toast'

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
})

interface UploadButtonProps {
    onFileSelect: (file: File | null) => void
}

const UploadButton = ({ onFileSelect }: UploadButtonProps) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null
        if (file && file.type !== "application/pdf") {
            toast.error("Please upload a PDF file")
            return
        }
        if (file && file.size > 5 * 1024 * 1024) {
            toast.error("File size should be less than 5MB")
            return
        }
        onFileSelect(file)
    }

    return (
        <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
        >
            Upload files
            <VisuallyHiddenInput
                type="file"
                onChange={handleChange}
                multiple
            />
        </Button>
    )
}

export default UploadButton
