import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import TranslateIcon from "@mui/icons-material/Translate";
import loginlogo from "../assets/login/abstract-design-1.5x.png";
import logo from "../assets/login/Logo.png";
import styles from "./login.module.css";
import { red } from "@mui/material/colors";
//add images
import side_back from "../assets/add-new-project/add-new-side-back.png";
import zap1 from "../assets/projects/zap1.png";
//icons
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
//menu button imports
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
// navigate user after Login
import { useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "} Battery Management
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme({
  main_color: {
    danger: "#FE4B24",
  },
  
  palette: {
    primary: {
      main: "#FE4B24",
      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
    pallid: {
      main: "#fff",
      contrastText: "#968E86",
    },
  },
});

const New_project = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    navigate("./projects");
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={4}
          md={2}
          sx={{ backgroundColor: "#ffffff" }}
        ></Grid>
        <Grid item xs={12} sm={8} md={8} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Button
              type="submit"
              color="pallid"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              startIcon={<ChevronLeftIcon />}
              onClick={() => navigate("/projects")}
            >
              Back
            </Button>
            <Box style={{ display: "flex", alignItems: "center" }}>
              <Avatar
                sx={{
                  bgcolor: "#ff0000",
                  width: "50px",
                  height: "50px",
                  borderRadius: "8px",
                  mr: 2,
                }}
                aria-label="recipe"
              >
                <img src={zap1} alt="" />
              </Avatar>

              <Typography component="h1" variant="h5">
                <b>Add New Project</b>
              </Typography>
            </Box>

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <div>
                <TextField
                  id="filled-multiline-flexible"
                  label="Project Name"
                  fullWidth
                  autoFocus
                  variant="filled"
                  margin="normal"
                />
              </div>
              <div style={{ display: "flex" }}>
                <TextField
                  id="filled-textarea"
                  label="Zone Limit Count"
                  minRows={6}
                  style={{ flexBasis: "50%" }}
                  placeholder="Zone Limit Count"
                  variant="filled"
                  margin="normal"
                />
                <TextField
                  id="filled-multiline-static"
                  label="Battery Limit Count"
                  rows={6}
                  style={{ flexBasis: "50%", marginLeft: "10px" }}
                  variant="filled"
                  margin="normal"
                />
              </div>
              <div style={{ display: "flex" }}>
                <TextField
                  id="filled-multiline-static"
                  label="String Limit Count"
                  rows={6}
                  style={{ flexBasis: "50%" }}
                  variant="filled"
                  margin="normal"
                />
              </div>

              <Button
                type="submit"
                color="primary"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                endIcon={<ChevronRightIcon />}
                onClick={(e) => e.preventDefault()}
              >
                Save
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={2}>
          <img src={side_back} alt="" />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default New_project;
