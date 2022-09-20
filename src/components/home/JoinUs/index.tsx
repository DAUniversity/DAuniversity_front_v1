import React from "react";
import "./index.scss";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, CardContent } from "@mui/material";
import { styled } from '@mui/material/styles';

export const JoinUs = () => {
  const ColorCard = styled(CardContent)(() => ({
    color: '#ffffff',
    backgroundColor: '#544fff',
    '&:hover': {
      backgroundColor: '#544fff',
    },
    padding: '10px 25px',
    border: '3px solid #000',
    boxShadow: '5px 5px #000',
    borderRadius: '10px'
  }));

  const ColorButton = styled(Button)(() => ({
    color: '#000000',
    backgroundColor: '#ffffff',
    '&:hover': {
      backgroundColor: '#ffffff',
    },
    padding: '10px 25px',
    border: '3px solid #000',
    boxShadow: '5px 5px #000',
    borderRadius: '10px'
  }));

  return (
    <Box className="join-us" sx={{ flexGrow: 1 }}>
      <ColorCard>
        <Grid container spacing={1} className="grid-container">
          <Grid item md={9} className="item1">
            <CardContent>
              <h2 className="__title">
                Join us in the future of education
              </h2><br />
              <p className="__content">DAUniversity</p>
              <p className="__content">The Decentralized Autonomous University</p>
            </CardContent>
          </Grid>
          <Grid item md={3} className="item2">
            <ColorButton>
              Join Today
            </ColorButton>
          </Grid>
        </Grid>
      </ColorCard>
    </Box>
  );
}

export default JoinUs;
