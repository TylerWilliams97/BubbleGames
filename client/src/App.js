import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SideBar from './Components/SideBar.js'
//import GCKingsCup from './Components/KingsCup'
import BGHeader from './Components/Header'
import QuartersAcc from './Components/GPQuarters'
import FlipcupAcc from './Components/GPFlipcup'
import BeerPongAcc from './Components/GPBeerpong'
import KingsCupAcc from './Components/GPKingsCup'
//import SignIn from './pages/Login'
import GamesButtons from './Components/buttons'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
export default function CenteredGrid() {
  const classes = useStyles();
  return (
    <Router>
    <div className="App-header">
      <div className={classes.root}>
     

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
          
            
            <Switch>
              <Route exact path="/">
                <GamesButtons/>
              </Route>
              <Route exact path="/KingsCup">
                  <KingsCupAcc />
              </Route>
              <Route exact path="/FlipCup">
                  <FlipcupAcc />
              </Route>
              <Route exact path="/Quarters">
                  <QuartersAcc />
              </Route>
              <Route path="/BeerPong">
                  <BeerPongAcc />
              </Route>
            </Switch>
            
          
            

            {/* Add router for games and default it to GamesButtons */}
          </Grid>
          <Grid item s={6}>
            
          </Grid>
          <Grid item s={6}>
            
          </Grid>
          <Grid item s={6}>
            
          </Grid>
        </Grid>
      </div>
    </div>
    </Router>
  );
}