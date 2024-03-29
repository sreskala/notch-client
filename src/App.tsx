import React, { useEffect, useState } from "react";
import "./App.css";

import axios from "axios";
import {
  Container,
  Typography,
  Box,
  Slider,
  CircularProgress,
} from "@mui/material";
import { Post } from "./types/post";
import Navbar from "./components/navbar/Navbar";
import PostsContainer from "./containers/PostsContainer";

function App() {
  const [loading, setLoading] = useState<boolean>();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:5000/api/posts").then((res) => {
      const postResponse = res.data as Post[];
      setPosts(postResponse);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <CircularProgress color="success" />;
  }

  return (
    <div className="App">
      <Navbar name="sam" />
      <Container maxWidth="md">
        <Typography variant="h4" component="h1" gutterBottom>
          Notch App
        </Typography>

        <PostsContainer posts={posts} />

        <Box width={300} alignContent="center">
          <Slider
            size="small"
            defaultValue={65}
            aria-label="Small"
            valueLabelDisplay="auto"
          />
        </Box>
      </Container>
    </div>
  );
}

export default App;
