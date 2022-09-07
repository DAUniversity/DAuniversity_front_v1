import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { CardContent } from "@mui/material";

export const Faq = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange =
    (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box className="first-announcement" sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} className="grid-container">        
        <CardContent>
          <h2 className="__title">
            FAQ
          </h2>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header">
              <Typography sx={{ width: '33%', flexShrink: 0 }}>NFT</Typography>
              {/* <Typography sx={{ color: 'text.secondary' }}>NFT</Typography> */}
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Inspired by the Nouns DAO, we created the UNIBADGES, an NFT that gives you the right to vote
                in the DAUniversity DAO. You need at least one UNIBADGE to submit a proposal, or to vote a proposal.
                <br/><br/>
                Each UNIBADGE is a 32x32 pixel badges, each represent _______. here are some examples:
                <br/><br/>
                Light will be the main topic: Lightbulbs, Lighthouse, fire, Matches, etc.
                <br/><br/>
                <a href="https://www.artblocks.io/token/250001022" target="_blank">https://www.artblocks.io/token/250001022</a>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header">
              <Typography sx={{ width: '33%', flexShrink: 0 }}>DAO</Typography>
              {/* <Typography sx={{ color: 'text.secondary' }}>DAO</Typography> */}
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                DAUniversity DAO treasury increases by three sources:
                <br/>
                1. UNIBADGES daily auction (bidding starting price will be: treasury/supply)
                <br/><br/>
                <h2>ONE DAO, EVERY DAY, FOREVER.</h2>
                <br/>
                2. Income from paid courses.
                <br/>
                3. Donations.
                <br/>
                4. Token sale.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </Grid>
    </Box>
  );
}

export default Faq;