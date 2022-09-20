import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import "./index.scss";

import { styled } from '@mui/material/styles';
import { Button, Card, CardContent } from "@mui/material";

export const NounsSale = () => {

  const ColorButton = styled(Button)(() => ({
    color: '#ffffff',
    backgroundColor: '#c8b7ce',
    '&:hover': {
      backgroundColor: '#c8b7ce',
    },
    padding: '10px 25px',
    border: '3px solid #000',
    boxShadow: '5px 5px #000'
  }));

  const WithoutColorCard = styled(Card)(() => (
    {
      backgroundColor: 'transparent',
      boxShadow: 'none'
    }
  ));

  const [mounted, setMounted] = useState(false);
  const [date, setDate] = useState(moment());
  const [nounImage, setNounImage] = useState({ id: null, svg: <img className="temp-noun-u" src={"https://dau-resources.s3.amazonaws.com/temp_noun_u.png"} alt="temp-noun-u" />, "price": 0, "owner": null, "offerors": [] });

  const getNoun = async () => {
    return axios.get(process.env.REACT_APP_API_HOST + '/v1/api/noun/' + date.format('YYYYMMDD')).then((response) => { return response.data });
  }

  /*const getOldNoun = async () => {
    return axios.get(process.env.REACT_APP_API_HOST + '/v1/api/noun?limit=5').then((response) => { return response.data });
  }*/

  const navigateNoun = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, value: moment.DurationInputArg1) => {
    const newdate = date.add(value, 'days')
    setDate(newdate)
    const result = await getNoun();
    if (result !== null && result.id) {
      setNounImage({ id: result.id, svg: <div className="noun-data"><div dangerouslySetInnerHTML={{ __html: result.nounImage }} /></div>, "price": result.price, "owner": result.owner, "offerors": result.offerors })
    } else {
      setNounImage({ id: null, svg: <img className="temp-noun-u" src={"https://dau-resources.s3.amazonaws.com/temp_noun_u.png"} alt="temp-noun-u" />, "price": 0, "owner": null, "offerors": [] });
    }
  }

  const getButtonsNavigate = () => {
    if (nounImage.id) {
      return <div className="buttons">
        <Button onClick={async (e) => await navigateNoun(e, -1)}>
          {'<'}
        </Button>
        <div>{nounImage.id}</div>
        <Button onClick={async (e) => await navigateNoun(e, 1)}>
          {'>'}
        </Button>
      </div>
    }
    return null
  };

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
      navigateNoun(null, 0);
    }
  });

  return (
    <Box className="nouns-sale" sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} className="grid-container">
        <Grid item md={6} className="grid grid-left __item">
          {
            getButtonsNavigate()
          }
          <WithoutColorCard className="card-sale">
            <CardContent>
              <h2 className="__title">DauNoun 0</h2>
              <h3 className="__subtitle">ONE DAUNOUN,<br />
                EVERY DAY,<br />
                FOREVER</h3>
              <div className="lastOffers">
                <div className="title_lastOffers">Last Offers</div>
                {
                  nounImage.offerors ? nounImage.offerors.map(item => {
                    return <div className="item_lastOffers"><b>{item['owner']['walletShort']}:</b> {item['price']} ETH</div>
                  }) : null
                }
              </div>
              <div>
                <ColorButton>PLACE BID</ColorButton>
              </div>
            </CardContent>
          </WithoutColorCard>
        </Grid>
        <Grid item md={6} className="grid grid-right __item">
          <div className="img-noun">
            {nounImage.svg}
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default NounsSale;
