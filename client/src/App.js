import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SwipeableTemporaryDrawer from './home.js'
import GCKingsCup from './kingsCup'
import BGHeader from './Header'
import Quarters from './Quarters'
import FlipCup from './FlipCup'

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

      <Grid container spacing={2}
        direction="column"
        // alignItems="flex center"
        justify="center"
        style={{ minHeight: '100vh', textAlign: "center" }}
      >
        <Grid item xs={12}>
          <BGHeader></BGHeader>
        </Grid>
       
        <Grid item xs={3}>
          <GCKingsCup></GCKingsCup>
        </Grid>
        <Grid item xs={3}>
          <Quarters></Quarters>
        </Grid>
        
        <Grid item xs={3}>
          <FlipCup></FlipCup>
        </Grid>
        <SwipeableTemporaryDrawer></SwipeableTemporaryDrawer>
      </Grid>
      </div>
    </div>
  );
}