import React from 'react';
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddIngredientModal({ open, handleClose }) {
  return (
    // backdrop
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
      <Box display="flex" alignItems="center" mb={2}>
          <IconButton onClick={handleClose} edge="start" >
            <ArrowBackIcon sx={{color : "#015E44", fontSize :40}}/>
          </IconButton>
          <Typography variant="h6" component="h2" ml={1} color={"#015E44"} fontSize={25} fontWeight={"bold"}>
            Create Ingredients
          </Typography>
        </Box>
        <form noValidate autoComplete="off">
          <TextField
            margin="normal"
            fullWidth
            label="Name"
            variant="outlined"
          />
          <TextField
            margin="normal"
            fullWidth
            label="Price"
            variant="outlined"
          />
          <TextField
            margin="normal"
            fullWidth
            label="Quantity"
            variant="outlined"
          />
          <TextField
            margin="normal"
            fullWidth
            label="Import Date"
            variant="outlined"
          />
          <TextField
            margin="normal"
            fullWidth
            label="Expired Date"
            variant="outlined"
          />
          <Box display="flex" justifyContent="space-between" mt={2}>
            <Button variant="outlined" onClick={handleClose} color='error'>
              Cancel
            </Button>
            <Button variant="contained" sx={{backgroundColor : "#015E44"}}>
              Update
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
}
