import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
 pos: {
    marginBottom: 12,
  },
});
const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);

export default function BeerPong() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined" style={{backgroundColor: "#383838"}}>
      <CardContent>
        <WhiteTextTypography>
        <Typography variant="h5" component="h2">
          Beer Pong
        </Typography>
        <Typography className={classes.pos}>
           
        <br />
        <br />
          2 or more players
        </Typography>
        <Typography variant="body2" component="p">
        
        </Typography>
        </WhiteTextTypography>
      </CardContent>
      <CardActions>
        <Button size="small">More info on Beer Pong </Button>
      </CardActions>
    </Card>
  );
}