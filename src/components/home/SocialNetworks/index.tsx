import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { CardContent } from "@mui/material";

export const SocialNetworks = () => {
  return (
    <Box className="nouns-sale" sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} className="grid-container">
        <CardContent>
          <img className="what-is-DAU" src={"https://dau-resources.s3.amazonaws.com/logoTwitter.png"} alt="what-is-DAU" />
        </CardContent>
      </Grid>
    </Box>
  );
}

export default SocialNetworks;
