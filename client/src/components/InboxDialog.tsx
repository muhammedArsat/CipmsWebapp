import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

interface InboxDialogProps{
    handleModalOpen: () => void
    handleReject:()=>void
}
export default function InboxDialog({handleModalOpen,handleReject}:InboxDialogProps) {
    const [open, setOpen] = React.useState(true)

   

    const handleClose = () => {
        console.log("clicked")
        setOpen(false)
        handleModalOpen()
    }

    return (
        <React.Fragment>
            
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            > 
                <DialogTitle id="alert-dialog-title" color='inherit'>
                    {"Are you sure want to reject?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      If you click reject the application will be rejected
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant='outlined'>Cancel</Button>
                    <Button onClick={() => {
                        handleClose();
                        handleReject();
                    }} color='error' variant='outlined'>
                        Reject
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}
