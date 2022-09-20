import React from "react";
import "./index.scss";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { CardContent } from "@mui/material";


export const WeWant = () => {
  return (
    <Box className="we-want" sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} className="grid-container">
        <CardContent>
          <p className="__content">
            DAUniversity wants to create an ecosystem where education can be: </p>
          <div className="__image">
            <img className="we-want-img" src={'https://dau-resources.s3.amazonaws.com/we-want.png'} alt="we-want-img" />
          </div>
        </CardContent>
      </Grid>
    </Box>
  );
}

export default WeWant;
