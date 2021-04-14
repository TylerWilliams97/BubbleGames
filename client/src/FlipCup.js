import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";

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
const TealTextTypography = withStyles({
  root: {
    color: "#00897b"
  }
})(Typography);

export default function FlipCup() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined" style={{backgroundColor: "#383838"}}>
      <CardContent>
        <TealTextTypography>
        <Typography className={classes.title}gutterBottom>
          BUBBLE GAMES
        </Typography>
        <Typography variant="h5" component="h2">
          Flip Clup
        </Typography>
        <Typography className={classes.pos}>
          You'll need: Plastic cups and a table/ countertop. 
          <br></br>
          1-2 or more players
        </Typography>
        <Typography variant="body2" component="p">
          Skillful game involving the flipping of plastic cups.
          <br />
        </Typography>
        </TealTextTypography>
      </CardContent>
      <CardActions>
        <Button size="small">Full Game Details </Button>
      </CardActions>
    </Card>
  );
}