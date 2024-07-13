import * as React from "react";
import { toast } from "react-toastify";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ApproveModal from "../ApproveModal/ApproveModal";

export default function HandleApproveButton({ id }) {
  const [open, setOpen] = React.useState(false);

  const [formData, setFormData] = React.useState({
    username: 'totoo_edd',
    fullname: 'Toto San',
    dob: '',
    gender: '',
    email: 'tt@mai.con',
    phone_number: '1234567890',
    address: '123 Tokyo',
    image: '',
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormSubmit = (data) => {
    console.log(data);
    handleClose();
  };

  const handleFormChange = (updatedData) => {
    setFormData(updatedData);
  };

  return (
    <>
      <Button
        sx={{
          backgroundColor: "#6DF292",
          p: "8px",
          minWidth: "0px",
          borderRadius: "10px",
          "&:hover": {
            backgroundColor: "#6DF292",
          },
        }}
        onClick={handleClickOpen}
      >
        <EditIcon style={{ color: "#fff" }} />
      </Button>
      <ApproveModal
        open={open}
        handleClose={handleClose}
        handleSubmit={handleFormSubmit}
        formData={formData}
        onFormChange={handleFormChange}
      />
    </>
  );
}
