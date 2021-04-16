import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import BGLogo from './logo'


const UseStyles = makeStyles({
  pos: {
    marginBottom: 12,
  },

});
const WhiteTextTypography = withStyles({
    root: {
      color: "#8ecbea"
    }
  })(Typography);

export default function GCKingsCup() {
  const classes = UseStyles();

  return (
    <Card className={classes.root} variant="outlined" style={{backgroundColor: "#383838"}}>
      <CardContent>
          <BGLogo />
      </CardContent>
      <CardActions>
        <Button size="small">I want to play this game </Button>
      </CardActions>
    </Card>
  );
}