import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SwipeableTemporaryDrawer from './univeralComponents/SideBar.js'
import GCKingsCup from './cards/KingsCup'
import BGHeader from './univeralComponents/Header'
import Quarters from './cards/Quarters'
import FlipCup from './cards/FlipCup'
import BeerPong from './cards/BeerPong.js'
import KingsCupAcc from './pages/GPKingsCup'
import SignIn from './pages/Login'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className="App-header">
      <KingsCupAcc/>
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
          <Grid item s={12}>
            <BGHeader></BGHeader>
            <SwipeableTemporaryDrawer></SwipeableTemporaryDrawer>
          </Grid>

          <Grid item s={6}>
            <GCKingsCup></GCKingsCup>
          </Grid>
          <Grid item s={6}>
            <Quarters></Quarters>
          </Grid>

          <Grid item s={6}>
            <FlipCup></FlipCup>
          </Grid>
          <Grid item s={6}>
            <BeerPong></BeerPong>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}