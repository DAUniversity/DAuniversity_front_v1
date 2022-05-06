import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import "./index.scss";

import tempNounU from "../../../assets/images/temp_noun_u.png"; // Tell webpack this JS file uses this image
import { Button, Card, CardContent } from "@mui/material";

export const NounsSale = () => {

  const [mounted, setMounted] = useState(false);
  const [date, setDate] = useState(moment());
  const [nounImage, setNounImage] = useState({ id: null, svg: <img className="temp-noun-u" src={tempNounU} alt="temp-noun-u" />, "price": 0, "owner": null, "offerors": [] });

  const getNoun = async () => {
    return axios.get(process.env.REACT_APP_API_HOST + '/v1/api/noun/' + date.format('YYYYMMDD')).then((response) => { return response.data });
  }

  const getOldNoun = async () => {
    return axios.get(process.env.REACT_APP_API_HOST + 'http://localhost:4000/v1/api/noun?limit=5').then((response) => { return response.data });
  }

  const navigateNoun = async (event, value) => {
    const newdate = date.add(value, 'days')
    setDate(newdate)
    const result = await getNoun();
    console.log('result')
    console.log(result)
    if (result !== null) {
      setNounImage({ id: result.id, svg: <div className="noun-data"><div dangerouslySetInnerHTML={{ __html: result.nounImage }} /></div>, "price": result.price, "owner": result.owner, "offerors": result.offerors })
    }
  }

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
      navigateNoun(null, 0);
    }
  });

  return (
    <Box className="nouns-sale" sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        <Grid item md={6} className="grid grid-left">
          {nounImage.svg}
        </Grid>

        <Grid item md={6} className="grid grid-right">
          <div className="buttons">
            <Button onClick={async (e) => await navigateNoun(e, -1)}>
              {'<'}
            </Button>
            <div>{nounImage.id}</div>
            <Button onClick={async (e) => await navigateNoun(e, 1)}>
              {'>'}
            </Button>
          </div>
          <Card className="card-sale">
            <CardContent>
              <div className="title">
                <b ># de Noun:</b> Beta 0.1
              </div>
              <div>precio de venta : {nounImage.price} eth</div>
              <div>Subasta termina en: 10h 33m</div>              
              <div className="lastOffers">
                <div className="title_lastOffers">ultimas ofertas</div>
                {
                  nounImage.offerors.map(item => {
                    return <div className="item_lastOffers"><b>{item.owner.walletShort}:</b> {item.price} ETH</div>
                  })
                }
              </div>
              <div>
                <Button>ofertar</Button>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default NounsSale;
