import React, { FC } from "react";
import { Container, Stack, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";

import { Post } from "../types/post";
import PostDetail from '../components/posts/PostDetail';

interface Props {
  posts: Post[];
}

const PostWrapper = styled(Container)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  display: "flex",
  justifyContent: "center",
  textAlign: "center"
}));

const PostsContainer: FC<Props> = ({ posts }) => {
  return (
    <Container>
      <Stack spacing={2}
      alignItems="center"
      divider={<Divider orientation="vertical" flexItem />}
      >
        {posts.map((post) => (
          <PostWrapper key={post.id}>
              <PostDetail post={post} />
          </PostWrapper>
        ))}
      </Stack>
    </Container>
  );
};

export default PostsContainer;
