import React from "react";
import "./index.scss";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { CardContent } from "@mui/material";

export const FirstAnnouncement = () => {
  return (
    <Box className="first-announcement" sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} className="grid-container">
        <Grid item md={6} className="item1">
          <CardContent>
            <h2 className="__title">
              10 ETH
            </h2><br />
            <p className="__content">Current bid</p>
          </CardContent>
        </Grid>
        <Grid item md={6} className="item2">
          <h4 className="__title">Auctions ends in</h4>
          <Grid container className="__content">
            <Grid item>000 :<br />
              <span className="--text">Day(s)</span>
            </Grid>
            <Grid item>00 :<br />
              <span className="--text">Hour(s)</span>
            </Grid>
            <Grid item>00 :<br />
              <span className="--text">Minute(s)</span>
            </Grid>
            <Grid item>00<br />
              <span className="--text">Second(s)</span></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FirstAnnouncement;
