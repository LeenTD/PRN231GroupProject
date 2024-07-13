import * as React from "react";
import { toast } from "react-toastify";
import { Button } from "@mui/material";
import BlockIcon from "@mui/icons-material/Block";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function HandleDeleteButton({ id, onDelete }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    // Handle reject action
    onDelete(id)
    handleClose()
    toast.error(`Deleted row with id: ${id}`);
  };

  return (
    <>
      <Button sx={{
          backgroundColor: "red",
          p: "8px",
          mx: '5px',
          minWidth: "0px",
          borderRadius: "10px",
          "&:hover": {
            backgroundColor: "red",
          }
        }} onClick={handleClickOpen}>
        <BlockIcon style={{ color: "#fff" }} />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirm"}
        </DialogTitle>
        <DialogContent sx={{
          minWidth: '500px'
        }}>
          <DialogContentText id="alert-dialog-description">
            Do you want to delete?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDelete} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}