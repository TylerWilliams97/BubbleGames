import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SwipeableTemporaryDrawer from './home.js'
import GCKingsCup from './kingsCup'
import BGHeader from './Header'
import Quarters from './Quarters'
import FlipCup from './FlipCup'
import BeerPong from './BeerPong.js'
import SignIn from './Login'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className="App-header">
      <div className={classes.root}>
        <SignIn />

        <Grid container spacing={2}
          // direction="column"
          // alignItems="flex center"
          justify="center"
          style={{ minHeight: '100vh', textAlign: "center", maxWidth: 466 }}
        >
          <Grid item xs={12}>
      
          </Grid>
          <Grid item xs={12}>
            <BGHeader></BGHeader>
            <SwipeableTemporaryDrawer></SwipeableTemporaryDrawer>
          </Grid>

          <Grid item xs={6}>
            <GCKingsCup></GCKingsCup>
          </Grid>
          <Grid item xs={6}>
            <Quarters></Quarters>
          </Grid>

          <Grid item xs={6}>
            <FlipCup></FlipCup>
          </Grid>
          <Grid item xs={6}>
            <BeerPong></BeerPong>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}