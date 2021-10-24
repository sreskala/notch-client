import React, { useEffect, useState } from 'react';
import './App.css';

import axios from 'axios'
import { Container, Typography, Box, Slider } from '@mui/material';

function App() {

  const [posts, setPosts] = useState<any>();

  useEffect(() => {
    axios.get('http://localhost:5000/api/posts').then(res => {
      setPosts(res.data)
    })
  }, [])

  return (
    <div className="App">
      {
        posts && posts.map((post: any) => (
          <h5>{post.title}</h5>
        ))
      }
      <Container maxWidth="sm">
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
