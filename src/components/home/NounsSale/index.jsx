import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import "./index.scss";

import tempNounU from "../../../assets/images/temp_noun_u.png"; // Tell webpack this JS file uses this image
import { Button, Card, CardContent } from "@mui/material";

function NounsSale() {
  return (
    <Box className="nouns-sale" sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        <Grid item md={6} className="grid grid-left">
          <img className="temp-noun-u" src={tempNounU} alt="temp-noun-u" />
        </Grid>
        <Grid item md={6} className="grid grid-right">
          <Card className="card-sale">
            <CardContent>
              <div>
                <b># de Noun:</b> Beta 0.1
              </div>
              <div>precio de venta : 100 eth.</div>
              <div>Subasta termina en: 10h 33m</div>
              <div>
                <Button>ofertar</Button>
              </div>
              <div>
                <div>ultimas ofertas</div>
                <div>suuj.eth - 10eth</div>
                <div>suuj.eth - 10eth</div>
                <div>suuj.eth - 10eth</div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default NounsSale;
