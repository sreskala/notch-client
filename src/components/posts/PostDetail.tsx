import React, { FC, useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Paper,
  Typography,
  Card,
  Divider,
  CardActions,
  CardHeader,
  Collapse,
  Avatar,
  IconButton,
  IconButtonProps,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Post } from "../../types/post";
import PostDescription from "./PostDescription";

interface Props {
  post: Post;
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const formatDate = (sourceDate: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  };
  return new Intl.DateTimeFormat("en-US", options).format(new Date(sourceDate));
};

const shortenedDescription = (description: string) => {
  if (description.length > 75) {
    return `${description.substring(0, 75)}...`;
  }

  return description;
};

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const PostDetail: FC<Props> = ({ post }) => {
  const [expanded, setExpanded] = useState(false);
  const [showingDetail, setShowingDetail] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    setShowingDetail(!showingDetail);
  };

  const postDate = formatDate(post.dateCreated);

  return (
    <Paper elevation={4} sx={{ width: "75%" }}>
      <Card variant="outlined" sx={{ alignItems: "center" }}>
        <CardHeader
          avatar={<Avatar aria-label="user">U</Avatar>}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={
            <Typography sx={{ fontSize: "2rem" }} variant="h2" component="h6">
              {post.title}
            </Typography>
          }
          subheader={`Posted on: ${postDate}`}
        />
        <Divider variant="middle" />
        {!showingDetail && (
          <PostDescription
            description={shortenedDescription(post.description)}
          />
        )}
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <PostDescription description={post.description} />
        </Collapse>
      </Card>
    </Paper>
  );
};

export default PostDetail;
