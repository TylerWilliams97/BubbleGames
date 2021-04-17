import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import SignInCard from './Components/Login'
import BGLogo from "./Components/Logo";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className="App-header">
      <BGLogo />
      <div className={classes.root}>
        <SignInCard />

      </div>
    </div>
  );
}