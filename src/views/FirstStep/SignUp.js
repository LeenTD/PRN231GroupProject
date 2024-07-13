import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const defaultTheme = createTheme();

export default function SignUp() {
    const [values, setValues] = React.useState({
        username: "",
        password: "",
        verifyPassword: "",
        showPassword: false,
        showVerifyPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleClickShowVerifyPassword = () => {
        setValues({
            ...values,
            showVerifyPassword: !values.showVerifyPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            username: data.get("username"),
            password: data.get("password"),
            verifyPassword: data.get("verifyPassword"),
            email: data.get("email"),
            phoneNumber: data.get("phoneNumber"),
        });
        navigate("/user");
    };

    const isButtonDisabled =
        values.username === "" ||
        values.password === "" ||
        values.verifyPassword === "" ||
        values.email === "" ||
        values.phoneNumber === "";

    return (
        <ThemeProvider theme={defaultTheme}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "100vh",
                    backgroundColor: "#015E44",
                    justifyContent: "center",
                }}
            >
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        backgroundColor: "rgba(255, 255, 255, 0.7)",
                        borderRadius: "10px",
                        padding: "40px",
                        width: "70vh",
                        backgroundImage: "url(../src/assets/Img/logo2x.png)",
                        backgroundSize: "40%",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                    }}
                >
                    <Grid
                        container
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        sx={{ width: "100%", mb: 6 }}
                    >
                        <Grid item xs={2}>
                            <IconButton
                                aria-label="Go back"
                                component={RouterLink}
                                to="/signIn"
                            >
                                <ArrowBackIcon />
                            </IconButton>
                        </Grid>
                        <Grid item xs={8}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    width: "100%",
                                }}
                            >
                                <Typography
                                    component="h1"
                                    variant="h4"
                                    sx={{ color: "#015E44" }}
                                >
                                    Sign Up
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs />
                    </Grid>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        value={values.username}
                        onChange={handleChange("username")}
                        sx={{
                            bgcolor: "white",
                            borderRadius: "5px",
                            height: "56px", // Consistent height
                        }}
                        InputProps={{
                            style: { height: "100%" }, // Ensure inner input fills the TextField
                        }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type={values.showPassword ? "text" : "password"}
                        autoComplete="new-password"
                        value={values.password}
                        onChange={handleChange("password")}
                        sx={{
                            bgcolor: "white",
                            borderRadius: "5px",
                            height: "56px", // Consistent height
                        }}
                        InputProps={{
                            style: { height: "100%" }, // Ensure inner input fills the TextField
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? (
                                            <VisibilityOff />
                                        ) : (
                                            <Visibility />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="verifyPassword"
                        label="Verify Password"
                        type={values.showVerifyPassword ? "text" : "password"}
                        autoComplete="new-password"
                        value={values.verifyPassword}
                        onChange={handleChange("verifyPassword")}
                        sx={{
                            bgcolor: "white",
                            borderRadius: "5px",
                            height: "56px", // Consistent height
                        }}
                        InputProps={{
                            style: { height: "100%" }, // Ensure inner input fills the TextField
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowVerifyPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showVerifyPassword ? (
                                            <VisibilityOff />
                                        ) : (
                                            <Visibility />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={values.email}
                        onChange={handleChange("email")}
                        sx={{
                            bgcolor: "white",
                            borderRadius: "5px",
                            height: "56px", // Consistent height
                        }}
                        InputProps={{
                            style: { height: "100%" }, // Ensure inner input fills the TextField
                        }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="phoneNumber"
                        label="Phone Number"
                        name="phoneNumber"
                        autoComplete="phoneNumber"
                        autoFocus
                        value={values.phoneNumber}
                        onChange={handleChange("phoneNumber")}
                        sx={{
                            bgcolor: "white",
                            borderRadius: "5px",
                            height: "56px", // Consistent height
                        }}
                        InputProps={{
                            style: { height: "100%" }, // Ensure inner input fills the TextField
                        }}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        disabled={isButtonDisabled}
                        sx={{
                            mt: 5,
                            bgcolor: isButtonDisabled ? "grey" : "#52D681",
                        }}
                    >
                        Sign Up
                    </Button>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
