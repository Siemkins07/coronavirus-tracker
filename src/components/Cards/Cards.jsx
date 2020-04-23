import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import cx from 'classnames';
import covid from '../../images/covid.png'

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
 
  const variants = [{
    id: 1,
    name: 'Infected',
    style: styles.infected,
    end: confirmed,
    text: ' active cases of '
  },
    {
    id: 2,
    name: 'Recovered',
    style: styles.recovered,
    end: recovered,
    text: ' recovered cases of '
  },
    {
    id: 3,
    name: '.deaths',
    style: styles.deaths,
    end: deaths,
    text: ' deaths caused by '
  }];
   
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
          <Grid item component={Card} xs={12} md={3} key={variant.id} className={cx(styles.card, `${variant.style}`)} >
          <CardContent>
              <Typography color='textSecondary' gutterBottom>{variant.name}</Typography>
            <Typography variant='h4'>
              <CountUp
                start={0}
                end={variant.end.value}
                duration={3.0}
                separator=','
              />            
            </Typography>
            <Typography color='textSecondary' gutterBottom>{new Date(lastUpdate).toLocaleDateString()}</Typography>
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
