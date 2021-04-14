import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import { withStyles } from "@material-ui/core/styles";
import BGLogo from './logo'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 193,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function BGHeader() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined" style={{backgroundColor: "#121212"}}>
      <CardContent>
        <BGLogo></BGLogo>
      </CardContent> 
    </Card>
  );
}