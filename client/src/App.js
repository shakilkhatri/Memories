import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { useDispatch } from "react-redux";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { getPosts } from "./actions/posts";
import "./App.css";
import memories from "./images/memories.png";

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Memories
            </Typography>
            <Button color="inherit"></Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth="lg">
        <div>
          {/* <AppBar className="appBar" position="static" color="inherit">
          <Typography className="heading" variant="h2" align="center">
            Memories
          </Typography>
          <img className="image" src={memories} alt="icon" height="60" />
        </AppBar> */}
          <Grow in>
            <Container>
              <Grid
                item
                // xs={12}
                // sm={4}
                container
                justifyContent="center"
                sx={{ margin: "20px 0" }}
              >
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
              <Grid
                container
                justify="space-between"
                alignItems="stretch"
                spacing={3}
                justifyContent="center"
              >
                <Grid item xs={12} sm={7}>
                  <Posts setCurrentId={setCurrentId} />
                </Grid>
              </Grid>
            </Container>
          </Grow>
        </div>
      </Container>
    </>
  );
};

export default App;
