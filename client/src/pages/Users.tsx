import { Typography } from "@mui/material"
import FileUploadButton from "../components/FileUploadBtn"
import UserTab from '../components/UserTab'
const Users = () => {

    const handleUploadSuccess = (response: any) => {
        console.log('Files uploaded successfully:', response)
        // Show success toast, refresh data, etc.
    }

    const handleUploadError = (error: any) => {
        console.error('Upload failed:', error)
        // Show error toast to user
    }

    return (
        <div className="flex flex-col pt-2" >
            <div className="flex justify-between items-center">
                <div className="basis-9/12 ">
                    <Typography variant="h4" >User Management</Typography>
                    <Typography variant="body1" color="inherit">
                        View, manage, and add students, mentors, and placement officers. Create new user accounts,
                        update existing profiles, assign roles and permissions, and maintain comprehensive records
                        of all system users in one centralized location.
                    </Typography>
                </div>

                <FileUploadButton
                    onUploadSuccess={handleUploadSuccess}
                    onUploadError={handleUploadError}
                    acceptedFileTypes=".pdf,.jpg,.png,.doc,.docx"
                />

            </div>

            <div className="">

                <UserTab />

            </div>
        </div>
    )
}

export default Users
