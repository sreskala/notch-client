import React, { FC } from "react";
import { Container, Grid } from "@mui/material";

import { Post } from "../types/post";

interface Props {
  posts: Post[];
}

const PostsContainer: FC<Props> = ({ posts }) => {
  return (
    <Container>
      <Grid container spacing={2}>
        {posts.map((post) => (
          <Grid item xs={4} key={post.id}>
            {post.title}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PostsContainer;
