import React from "react";

import Card from "@mui/material/Card";
import {CardActionArea} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function ContentMediaCard(props) {
  return (
    <Card sx={{
      width: '29%'
    }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={props.image}
          alt={props.name}
          sx={{
            height: "230px"
          }}
        />
        <CardContent>
          <Typography variant="h5" sx={{
            textAlign: "center"
          }}>
            {props.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
