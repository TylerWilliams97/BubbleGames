import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SideBar from './Components/SideBar.js'
import GCKingsCup from './Components/KingsCup'
import BGHeader from './Components/Header'
import Quarters from './Components/Quarters'
import FlipCup from './Components/FlipCup'
import BeerPong from './Components/BeerPong.js'
import KingsCupAcc from './Components/GPKingsCup'
import QuartersAcc from './Components/GPQuarters'
import SignInCard from './Components/Login'

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
      <QuartersAcc/>
      <div className={classes.root}>
        <SignInCard />

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
            <SideBar />
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