import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import cx from 'classnames';
import covid from '../../images/covid.png'

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
 
  const variants = [{
    state: 'Infected',
    end: confirmed,
    text: ' active cases of '
  },
  {
    state: 'Recovered',
    end: recovered,
    text: ' recovered cases of '
  },
  {
    state: 'Deaths',
    end: deaths,
    text: ' deaths caused by '
  },
  ];
   

  if (!confirmed) {
    return (
    <>
      <img src={covid} alt="covid-19"/>
      <h3>Loading...</h3>
      </>
    )}

  return ( 
    <div className={styles.container}>
      <Grid container spacing={3} justify='center'>

        {variants.map(variant => (
          <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
          <CardContent>
              <Typography color='textSecondary' gutterBottom>{variant.state}</Typography>
            <Typography variant='h4'>
              <CountUp
                start={0}
                end={variant.end.value}
                duration={2.0}
                separator=','
              />            
            </Typography>
            <Typography color='textSecondary' gutterBottom>{new Date(lastUpdate).toLocaleString()}</Typography>
              <Typography variant="body2">Number of{variant.text}Covid-19</Typography>
          </CardContent>
        </Grid> 
        ))
        }
    </Grid>
    </div>
   );
}
 
export default Cards;
