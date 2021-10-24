import React, { FC } from "react";
import { CardContent, Typography } from "@mui/material";


interface Props {
    description: string;
}

const PostDescription:FC<Props> = ({description}) => {
  return (
    <CardContent sx={{ textAlign: "center" }}>
      <Typography variant="body2" textAlign="center">
        {description}
      </Typography>
    </CardContent>
  );
};

export default PostDescription;
