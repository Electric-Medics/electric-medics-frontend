import React from 'react';
import { Button, Grid, makeStyles } from '@material-ui/core';
import { mdiMapMarker } from '@mdi/js';
import Icon from '@mdi/react';

import './Header.css';
import Logo from '../../assets/images/transparentLogo.png';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    top: '20px',
    fontFamily: 'Work Sans, sans-serif',
    fontWeight: 400,
  },
  gridItemTitle: {
    fontWeight: 500,
    fontSize: '18px',
  },
  gridItemContainer: {
    display: 'flex',
  },
  mapMarker: {
    top: '-17px',
    marginLeft: '10px',
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={3}>
        <Button href='/' className='headerLogo'>
          <img
            src={Logo}
            alt='Electrics Medics Logo'
            style={{
              position: 'relative',
              height: '125px',
              width: '225px',
              top: '-25px',
            }}
          />
        </Button>
      </Grid>
      <Grid item xs={3} style={{ top: '20px' }}>
        <p className={classes.gridItemTitle}>The Best Electricians</p>
        <p>Serving Mission Viejo and Surrounding Areas</p>
      </Grid>
      <Grid item xs={2} style={{ top: '20px' }}>
        <p className={classes.gridItemTitle}>BUSINESS HOURS:</p>
        <p>Monday - Friday: 8:00AM - 5:00PM</p>
      </Grid>
      <Grid className={classes.gridItemContainer} item xs={3} justify='center'>
        <span className='containerSubmitRequest'>
          <span className='btnSubmitRequest'>
            <span>SUBMIT REQUEST</span>
          </span>
        </span>
        <Button
          className={classes.mapMarker}
          href='https://www.google.com/maps/place/Electric+Medics/@33.613528,-117.6789378,15z/data=!4m5!3m4!1s0x0:0xbfe07d4931a23eaf!8m2!3d33.613528!4d-117.6789378'
          style={{ backgroundColor: 'rgba(0, 0, 0, 0) !important' }}
        >
          <Icon path={mdiMapMarker} size={2} color='#1A8FE3' />
        </Button>
      </Grid>
    </Grid>
  );
};

export default Header;
