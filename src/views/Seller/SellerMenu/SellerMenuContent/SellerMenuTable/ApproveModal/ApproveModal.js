import React, { useEffect, useState } from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  IconButton,
  Grid,
  DialogContentText,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { primaryButton, grayButton } from "~/styles/Buttons/Buttons";

const commonTextFieldStyles = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#015E44",
    },
    "&:hover fieldset": {
      borderColor: "#028A69",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#015E44",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#015E44",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#015E44",
  },
  "& .MuiInputBase-input": {
    borderRadius: "8px",
    "&::placeholder": {
      color: "#015E44",
      opacity: 1,
    },
  },
};

const RecipeModal = ({
  open,
  handleClose,
  handleSubmit,
  formData,
  onFormChange,
}) => {
  const {
    control,
    handleSubmit: formSubmit,
    watch,
    getValues,
  } = useForm({
    defaultValues: formData,
  });
  const [isDirty, setIsDirty] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "directions",
  });

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name && name.startsWith("directions")) {
        const updatedDirections = getValues("directions");
        onFormChange({ ...value, directions: updatedDirections });
      } else {
        onFormChange(value);
      }
      setIsDirty(true);
    });
    return () => subscription.unsubscribe();
  }, [watch, onFormChange, getValues]);

  const handleImageUpload = event => {
    const files = Array.from(event.target.files);
    const imageUrls = files.map(file => URL.createObjectURL(file));
    onFormChange({ ...formData, images: [...formData.images, ...imageUrls] });
    setIsDirty(true);
  };

  const onSubmit = data => {
    data.images = formData.images;
    handleSubmit(data);
    setIsDirty(false);
  };

  const handleCloseWithConfirmation = () => {
    if (isDirty) {
      setConfirmOpen(true);
    } else {
      handleClose();
    }
  };

  const handleConfirmClose = () => {
    setConfirmOpen(false);
    handleClose();
  };

  useEffect(() => {
    const subscription = watch(value => {
      onFormChange(value);
      setIsDirty(true);
    });
    return () => subscription.unsubscribe();
  }, [watch, onFormChange]);

  return (
    <>
      <Dialog
        open={open}
        onClose={handleCloseWithConfirmation}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle sx={{ color: "#015E44", fontWeight: "bold" }}>
          Create New Recipe
        </DialogTitle>
        <DialogContent>
          <form onSubmit={formSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  {formData.images.map((src, index) => (
                    <Box
                      component="img"
                      key={index}
                      src={src}
                      sx={{ width: 56, height: 56 }}
                    />
                  ))}
                  <input
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleImageUpload}
                  />
                  <Button
                    component="label"
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                    htmlFor="contained-button-file"
                    sx={primaryButton}
                  >
                    Upload Images
                  </Button>
                </Box>
              </Grid>
              <Grid container item xs={6} spacing={2}>
                <Grid item xs={12}>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        placeholder="Title..."
                        fullWidth
                        sx={commonTextFieldStyles}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="ingredients"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        multiline
                        rows={4}
                        fullWidth
                        placeholder="Ingredients..."
                        sx={commonTextFieldStyles}
                      />
                    )}
                  />
                </Grid>
                <Grid item container xs={12} spacing={2}>
                  <Grid item xs={4}>
                    <Controller
                      name="serving_number"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          placeholder="Servings"
                          type="number"
                          fullWidth
                          sx={commonTextFieldStyles}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Controller
                      name="prep_time"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          placeholder="Prep Time"
                          fullWidth
                          sx={commonTextFieldStyles}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Controller
                      name="cook_time"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          fullWidth
                          placeholder="Cook Time"
                          sx={commonTextFieldStyles}
                        />
                      )}
                    />
                  </Grid>
                </Grid>
                <Grid item container xs={12} spacing={2}>
                  <Grid item xs={4}>
                    <Controller
                      name="total_time"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          placeholder="Total Time (minutes)"
                          fullWidth
                          sx={commonTextFieldStyles}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Controller
                      name="additional_time"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          placeholder="Addtional Time (minutes)"
                          fullWidth
                          sx={commonTextFieldStyles}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Controller
                      name="process_material"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          fullWidth
                          placeholder="Process Material"
                          sx={commonTextFieldStyles}
                        />
                      )}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid item xs={12}>
                  <Box>
                    {fields.map((field, index) => (
                      <Box
                        key={field.id}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                          mb: 2,
                        }}
                      >
                        <Controller
                          name={`directions.${index}.content`}
                          control={control}
                          defaultValue={field.content}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              placeholder={`Step ${index + 1}`}
                              sx={commonTextFieldStyles}
                            />
                          )}
                        />
                        <IconButton onClick={() => remove(index)}>
                          <DeleteIcon sx={{ color: "red" }} />
                        </IconButton>
                      </Box>
                    ))}
                    <Button
                      variant="outlined"
                      onClick={() => append({ content: "" })}
                      sx={primaryButton}
                      startIcon={<AddCircleOutlineIcon />}
                    >
                      Add Step
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <DialogActions>
              <Button type="submit" sx={primaryButton}>
                Update
              </Button>
              <Button onClick={handleCloseWithConfirmation} sx={grayButton}>
                Cancel
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
      <Dialog open={confirmOpen} onClose={() => setConfirmOpen(false)}>
        <DialogTitle>Discard Changes?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You have unsaved changes. Do you want to discard all changes?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmOpen(false)} color="primary">
            No
          </Button>
          <Button onClick={handleConfirmClose} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default RecipeModal;
