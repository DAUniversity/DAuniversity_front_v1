import React from "react";
import "./index.scss";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { CardContent } from "@mui/material";
import whatIsDau from "../../../assets/images/what-is-DAU-removebg.png";

export const AboutUs = () => {
  return (
    <Box className="about-us" sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} className="grid-container">
        <CardContent>
          <h2 className="__title">
            What is DAUniversity?
          </h2>
          <p className="__content">
            DAUniversity is a <b>DAO</b> created to be the <b>first and biggest Decentralized Autonomous University in the world.</b>
            Starting from WEB3 education to anything that the <b>community decides.</b> The Sky is the limit! (or maybe not). </p>
          <div className="__image">
            <img className="what-is-DAU" src={whatIsDau} alt="what-is-DAU" />  
          </div>          
        </CardContent>
      </Grid>
    </Box>
  );
}

export default AboutUs;
