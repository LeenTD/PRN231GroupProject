import * as React from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  Divider,
  Typography,
} from "@mui/material";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import Avatar from "@mui/material/Avatar";
import { BorderClear } from "@mui/icons-material";
import avatar from '~/assets/Img/26.png'
const CreatePost = ({ open, handleClose }) => {
  const [label, setLabel] = React.useState("What's on your mind, Pickky?");

  const handleFocus = () => {
    setLabel("");
  };

  const handleBlur = () => {
    if (label === "") {
      setLabel("What's on your mind, Pickky?");
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="create-post-modal-title"
      aria-describedby="create-post-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 470,
          bgcolor: "background.paper",
          border: "2px solid #00CA92",
          boxShadow: 24,
        }}
      >
        <h2
          id="create-post-modal-title"
          style={{ display: "flex", justifyContent: "center" }}
        >
          Post Blog
        </h2>
        <Divider
          sx={{
            my: 0,
            bgcolor: "#00CA92",
            height: "0.2px",
          }}
        />

        <Button
          variant="outlined"
          color="success"
          sx={{
            //mb: 2,
            //ml: 32,
            color: "#000",
            textTransform: "lowercase",
            //pl: 2.5,
            
            ml: "auto", // Moves the button to the right
            display: "flex",
            justifyContent: "space-between", // This ensures space between elements if you add more
            alignItems: "center",
            
          }}
        >
          <ImageOutlinedIcon />
          picture/video
        </Button>
        <Box sx={{ display: "flex", gap: 1, p: 2 }}>
          <Avatar
            sx={{ width: 56, height: 56 }}
            alt="Remy Sharp"
            src={avatar}
          />
          <Typography sx={{ mt: 2 }}>Pickky</Typography>
        </Box>

        <TextField
          id="filled-basic"
          fullWidth
          label={label}
          multiline
          rows={6}
          variant="filled"
          onFocus={handleFocus}
          onBlur={handleBlur}
          sx={{
            "& .MuiFilledInput-root": {
              backgroundColor: "white", // Background color for filled variant
            },
            "& .MuiFilledInput-root::before": {
              borderBottom: "none", // Remove bottom border
            },
            "& .MuiFilledInput-root:hover:not(.Mui-disabled)::before": {
              borderBottom: "none", // Remove bottom border on hover
            },
            "& .MuiFilledInput-root.Mui-focused::before": {
              borderBottom: "none", // Remove bottom border when focused
            },
            "& .MuiFilledInput-root::after": {
              borderBottom: "none", // Remove bottom border after input
            },
            "& .MuiFilledInput-root.Mui-focused": {
              boxShadow: "none", // Remove box shadow when focused
            },
          }}
          InputLabelProps={{
            sx: {
              color: "black", // Label color
            },
          }}
        />
        <Divider
          sx={{
            my: 2,
            bgcolor: "#00CA92",
            height: "0.2px",
          }}
        />
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2, mb: 2, ml: 4, pl: 6, pr: 6

             }}
            onClick={handleClose}
          >
            Post
          </Button>

          <Button
            variant="contained"
            color="error"
            sx={{ mt: 2, mb: 2, ml: 4, position: "right" }}
            onClick={handleClose}
          >
            Save Draft
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CreatePost;
