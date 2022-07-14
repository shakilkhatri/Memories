import React from "react";
import { Grid, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import "./styles.css";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className="container"
      container
      alignItems="stretch"
      spacing={3}
      // columns={2}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={12} md={12}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
