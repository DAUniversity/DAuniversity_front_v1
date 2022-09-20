import React from "react";
import "./index.scss";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { CardContent } from "@mui/material";

export const InspiredBy = () => {
  return (
    <Box className="inspired-by" sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} className="grid-container">
        <CardContent>
          <p className="__content">
            DAUNIVERSITY</p>
          <h2 className="__title">
            Inspired by de nouns
          </h2>
          <div className="__image">
            <img className="inspired-by-img" src={"https://dau-resources.s3.amazonaws.com/inspired-by.png"} alt="inspired-by-img" />
          </div>
        </CardContent>
      </Grid>
    </Box>
  );
}

export default InspiredBy;
