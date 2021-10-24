import React, { useEffect, useState } from 'react';
import './App.css';

import axios from 'axios'
import { Container, Typography, Box, Slider } from '@mui/material';
import { Post } from './types/post';

function App() {

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/posts').then(res => {
      const postResponse = (res.data) as Post[];
      setPosts(postResponse);
    })
  }, [])

  return (
    <div className="App">
      {
        posts && posts.map((post: Post) => (
          <h5>{post.title}</h5>
        ))
      }
      <Container maxWidth="md">
        <Typography variant="h4" component="h1" gutterBottom>
          quick test for MUI
        </Typography>

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
