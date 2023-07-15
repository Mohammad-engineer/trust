import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
//boxshadow for box element
import Paper from "@mui/material/Paper";
//import iamges
import projectlogo from "../assets/projects/project-page-logo.png";
import zap1 from "../assets/projects/zap1.png";
//pagination
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
//box (div)
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "../assets/login/Logo.png";
import styles from "./projects.module.css";
import { red } from "@mui/material/colors";
//button icons imports
import GridViewIcon from "@mui/icons-material/GridView";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
// navigate user after Login
import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { styled } from "@mui/material/styles";

//Alerts
import Alert from "@mui/material/Alert";

const defaultTheme = createTheme();

const Projects = () => {
  const red500 = red[500];

  const navigate = useNavigate();

  const logOutHandler = () => {
    navigate("/");
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={2} sx={{ backgroundColor: "#ffffff" }}>
          <Box className={styles.project_sidebar}>
            <Box className={styles.pr_left_col}>
              <img src={projectlogo} alt="" style={{ marginRight: "12px" }} />
              <Typography variant="subtitle1" component="p">
                <b>Battery</b>
                <br />
                Monitoring System
              </Typography>
              <Button
                variant="outline"
                endIcon={<SettingsOutlinedIcon />}
              ></Button>
            </Box>

            <Box className={styles.project_user}>
              <Button variant="outline" startIcon={<GridViewIcon />}>
                Projects
              </Button>

              <Button
                variant="outline"
                startIcon={<PeopleOutlineIcon />}
                onClick={() => navigate("/users")}
              >
                Users
              </Button>
            </Box>

            <Box>
              <Button
                variant="outline"
                onClick={logOutHandler}
                startIcon={<LogoutIcon />}
              >
                Logout
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={10}
          sx={{ backgroundColor: "#F3F1EF", borderRadius: "30px 0 0 30px" }}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              //width: "100%",
            }}
          >
            <Box className={styles.project_wrapper}>
              <Card className={styles.project_card}
              onClick={()=>navigate('/add-new-project')}>
                <CardHeader
                  className={styles.add_new_project}
                  sx={{ paddingBottom: "60px" }}
                  avatar={
                    <Avatar
                      className={styles.add_new_icon}
                      sx={{
                        //bgcolor: "#ff0000",

                        width: "50px",
                        height: "50px",
                        borderRadius: "8px",
                      }}
                      aria-label="recipe"
                    >
                      <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                  }
                  title="Add New"
                  subheader="Project"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard sdfsdfsdfsfsf
                  </Typography>
                </CardContent>
              </Card>

              <Card className={styles.project_card}>
                <CardHeader
                  sx={{ paddingBottom: "60px" }}
                  avatar={
                    <Avatar
                      sx={{
                        bgcolor: "#ff0000",
                        width: "50px",
                        height: "50px",
                        borderRadius: "8px",
                      }}
                      aria-label="recipe"
                    >
                      <img src={zap1} alt="" />
                    </Avatar>
                  }
                  action={
                    <IconButton
                      aria-label="settings"
                      sx={{ paddingLeft: "30px" }}
                    >
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Project1"
                  subheader="12 Zones"
                />

                <CardActions disableSpacing>
                  <Stack sx={{ width: "auto" }} spacing={2}>
                    <Alert severity="error" sx={{ padding: "0px 7px" }}>
                      5 DAYS LEFT
                    </Alert>
                  </Stack>
                </CardActions>
              </Card>

              <Card className={styles.project_card}>
                <CardHeader
                  sx={{ paddingBottom: "60px" }}
                  avatar={
                    <Avatar
                      sx={{
                        bgcolor: "#ff0000",
                        width: "50px",
                        height: "50px",
                        borderRadius: "8px",
                      }}
                      aria-label="recipe"
                    >
                      <img src={zap1} alt="" />
                    </Avatar>
                  }
                  action={
                    <IconButton
                      aria-label="settings"
                      sx={{ paddingLeft: "30px" }}
                    >
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Project2"
                  subheader="5 Zones"
                />

                <CardActions disableSpacing>
                  <Stack sx={{ width: "auto" }} spacing={2}>
                    <Alert severity="warning" sx={{ padding: "0px 7px" }}>
                      EXPIRED
                    </Alert>
                  </Stack>
                </CardActions>
              </Card>

              <Card className={styles.project_card}>
                <CardHeader
                  sx={{ paddingBottom: "60px" }}
                  avatar={
                    <Avatar
                      sx={{
                        bgcolor: "#ff0000",
                        width: "50px",
                        height: "50px",
                        borderRadius: "8px",
                      }}
                      aria-label="recipe"
                    >
                      <img src={zap1} alt="" />
                    </Avatar>
                  }
                  action={
                    <IconButton
                      aria-label="settings"
                      sx={{ paddingLeft: "30px" }}
                    >
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Project1"
                  subheader="12 Zones"
                />

                <CardActions disableSpacing>
                  <Stack sx={{ width: "auto" }} spacing={2}>
                    <Alert severity="error" sx={{ padding: "0px 7px" }}>
                      5 DAYS LEFT
                    </Alert>
                  </Stack>
                </CardActions>
              </Card>

              <Card className={styles.project_card}>
                <CardHeader
                  sx={{ paddingBottom: "60px" }}
                  avatar={
                    <Avatar
                      sx={{
                        bgcolor: "#ff0000",
                        width: "50px",
                        height: "50px",
                        borderRadius: "8px",
                      }}
                      aria-label="recipe"
                    >
                      <img src={zap1} alt="" />
                    </Avatar>
                  }
                  action={
                    <IconButton
                      aria-label="settings"
                      sx={{ paddingLeft: "30px" }}
                    >
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Project2"
                  subheader="5 Zones"
                />

                <CardActions disableSpacing>
                  <Stack sx={{ width: "auto" }} spacing={2}>
                    <Alert severity="warning" sx={{ padding: "0px 7px" }}>
                      EXPIRED
                    </Alert>
                  </Stack>
                </CardActions>
              </Card>

              <Card className={styles.project_card}>
                <CardHeader
                  sx={{ paddingBottom: "60px" }}
                  avatar={
                    <Avatar
                      sx={{
                        bgcolor: "#ff0000",
                        width: "50px",
                        height: "50px",
                        borderRadius: "8px",
                      }}
                      aria-label="recipe"
                    >
                      <img src={zap1} alt="" />
                    </Avatar>
                  }
                  action={
                    <IconButton
                      aria-label="settings"
                      sx={{ paddingLeft: "30px" }}
                    >
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Project1"
                  subheader="12 Zones"
                />

                <CardActions disableSpacing>
                  <Stack sx={{ width: "auto" }} spacing={2}>
                    <Alert severity="error" sx={{ padding: "0px 7px" }}>
                      5 DAYS LEFT
                    </Alert>
                  </Stack>
                </CardActions>
              </Card>

              <Card className={styles.project_card}>
                <CardHeader
                  sx={{ paddingBottom: "60px" }}
                  avatar={
                    <Avatar
                      sx={{
                        bgcolor: "#ff0000",
                        width: "50px",
                        height: "50px",
                        borderRadius: "8px",
                      }}
                      aria-label="recipe"
                    >
                      <img src={zap1} alt="" />
                    </Avatar>
                  }
                  action={
                    <IconButton
                      aria-label="settings"
                      sx={{ paddingLeft: "30px" }}
                    >
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Project2"
                  subheader="5 Zones"
                />

                <CardActions disableSpacing>
                  <Stack sx={{ width: "auto" }} spacing={2}>
                    <Alert severity="warning" sx={{ padding: "0px 7px" }}>
                      EXPIRED
                    </Alert>
                  </Stack>
                </CardActions>
              </Card>

              <Card className={styles.project_card}>
                <CardHeader
                  sx={{ paddingBottom: "60px" }}
                  avatar={
                    <Avatar
                      sx={{
                        bgcolor: "#ff0000",
                        width: "50px",
                        height: "50px",
                        borderRadius: "8px",
                      }}
                      aria-label="recipe"
                    >
                      <img src={zap1} alt="" />
                    </Avatar>
                  }
                  action={
                    <IconButton
                      aria-label="settings"
                      sx={{ paddingLeft: "30px" }}
                    >
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Project1"
                  subheader="12 Zones"
                />

                <CardActions disableSpacing>
                  <Stack sx={{ width: "auto" }} spacing={2}>
                    <Alert severity="error" sx={{ padding: "0px 7px" }}>
                      5 DAYS LEFT
                    </Alert>
                  </Stack>
                </CardActions>
              </Card>

              <Card className={styles.project_card}>
                <CardHeader
                  sx={{ paddingBottom: "60px" }}
                  avatar={
                    <Avatar
                      sx={{
                        bgcolor: "#ff0000",
                        width: "50px",
                        height: "50px",
                        borderRadius: "8px",
                      }}
                      aria-label="recipe"
                    >
                      <img src={zap1} alt="" />
                    </Avatar>
                  }
                  action={
                    <IconButton
                      aria-label="settings"
                      sx={{ paddingLeft: "30px" }}
                    >
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Project2"
                  subheader="5 Zones"
                />

                <CardActions disableSpacing>
                  <Stack sx={{ width: "auto" }} spacing={2}>
                    <Alert severity="warning" sx={{ padding: "0px 7px" }}>
                      EXPIRED
                    </Alert>
                  </Stack>
                </CardActions>
              </Card>

              <Card className={styles.project_card}>
                <CardHeader
                  sx={{ paddingBottom: "60px" }}
                  avatar={
                    <Avatar
                      sx={{
                        bgcolor: "#ff0000",
                        width: "50px",
                        height: "50px",
                        borderRadius: "8px",
                      }}
                      aria-label="recipe"
                    >
                      <img src={zap1} alt="" />
                    </Avatar>
                  }
                  action={
                    <IconButton
                      aria-label="settings"
                      sx={{ paddingLeft: "30px" }}
                    >
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Project1"
                  subheader="12 Zones"
                />

                <CardActions disableSpacing>
                  <Stack sx={{ width: "auto" }} spacing={2}>
                    <Alert severity="error" sx={{ padding: "0px 7px" }}>
                      5 DAYS LEFT
                    </Alert>
                  </Stack>
                </CardActions>
              </Card>

              <Card className={styles.project_card}>
                <CardHeader
                  sx={{ paddingBottom: "60px" }}
                  avatar={
                    <Avatar
                      sx={{
                        bgcolor: "#ff0000",
                        width: "50px",
                        height: "50px",
                        borderRadius: "8px",
                      }}
                      aria-label="recipe"
                    >
                      <img src={zap1} alt="" />
                    </Avatar>
                  }
                  action={
                    <IconButton
                      aria-label="settings"
                      sx={{ paddingLeft: "30px" }}
                    >
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Project2"
                  subheader="5 Zones"
                />

                <CardActions disableSpacing>
                  <Stack sx={{ width: "auto" }} spacing={2}>
                    <Alert severity="warning" sx={{ padding: "0px 7px" }}>
                      EXPIRED
                    </Alert>
                  </Stack>
                </CardActions>
              </Card>
            </Box>

            <Box className={styles.projects_pagination}>
              <Stack spacing={2}>
                <Pagination count={10} variant="outlined" />
              </Stack>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Projects;
