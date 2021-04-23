import React from 'react';
import { withStyles } from "@material-ui/core/styles";
<<<<<<< HEAD
// import BGLogo from './Logo'
=======
//import BGLogo from '../Components/Logo'
>>>>>>> tyler
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
<<<<<<< HEAD
    },                              
=======
    },
>>>>>>> tyler
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

<<<<<<< HEAD
export default function QuartersAcc() {
=======
export default function KingsQuarters() {
>>>>>>> tyler
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
<<<<<<< HEAD
      {/* <BGLogo /> */}
=======
>>>>>>> tyler
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>What you'll need</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
<<<<<<< HEAD
            "Players: 2+ (More the merrier!)"
            <br />
            Quarters.
            <br />
            Tall, large mouthed glass.
=======
            "Players: 4+ (More the merrier!)"
            <br />
            "Standard deck of cards"
            <br />
            "Large mug, chalice, pitcher to be used as the KING'S CUP"
>>>>>>> tyler
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Instructions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
<<<<<<< HEAD
          Each round starts off with a glass filled with a drink in the middle of the table and two people on opposite ends of the table having a quarter and a glass.
          <br />
          Each player shoots his or her quarter at his/her glass until he makes it in, then the player passes the glass to the player to their left
          <br />
          If the player to their left still has a glass as well, the player taps that glass with theirs, and the player who has been tapped must drink from the glass in the middle of the table, refill it, then make the quarter into his or her glass before they get tapped again, with play still going around the table.
          <br />
          If a player makes his or her first shot, s/he can choose to pass the glass to any player who does not currently have a glass.
          <br />
          If there are enough people at the table, the group can add more shot glasses and position them equally spaced around the outside of the circle.
          <br />
=======
            One person pulls a card at a time and everyone responds appropriately depending on what action the card requires.
            <br />
            Some cards are time sensitive reaction games while others game may require a small setup time.
            <br />
            See card assignments below.
>>>>>>> tyler
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>King's Cup Card Assignments</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
<<<<<<< HEAD
          {/* Each round starts off with a glass filled with a drink in the middle of the table and two people on opposite ends of the table having a quarter and a glass.
          <br />
          Each player shoots his or her quarter at his/her glass until he makes it in, then the player passes the glass to the player to their left
          <br />
          If the player to their left still has a glass as well, the player taps that glass with theirs, and the player who has been tapped must drink from the glass in the middle of the table, refill it, then make the quarter into his or her glass before they get tapped again, with play still going around the table.
          <br />
          If a player makes his or her first shot, s/he can choose to pass the glass to any player who does not currently have a glass.
          <br />
          If there are enough people at the table, the group can add more shot glasses and position them equally spaced around the outside of the circle.
          <br /> */}

=======
            Ace - Waterfall. (Each player starts drinking at the same time as the person to their left. NO player can stop drinking until the person before them stops.)
          <br />
            Two - You. (Whoever draws this can choose anyone to take a drink.)
          <br />
            Three - Me. (The person who draws this takes a drink.)
          <br />
            Four - Floor. (The last person to touch the floor takes a drink.)
          <br />
            Five - Guys. (All the guys at the table drink.)
          <br />
            Six - Chicks. (All the girls at the table drink.)
          <br />
            Seven - Heaven. (If you draw this card, raise your hand above you head. Every other player must do so as well. The last person takes a drink.)
          <br />
            Eight - Mate. (Choose someone to be your mate. For the rest of the game, they drink when you drink.)
          <br />
            Nine - Rhyme. (You say a word, then the person to your right has to say a word that rhymes. This continues until someone can't think of a word. That person takes a drink. You can't reuse words.)
          <br />
            Ten - Categories. (Come up with a category of things. The person to your right must name something that falls within the category. This continues until someone can't think of something. That person takes a drink.)
          <br />
            Jack - Never Have I Ever. (Everyone plays Never Have I Ever.)
          <br />
            Queen - Questions. (Ask someone a question. That person then asks someone else a question. This continues until someone messes up or fails to ask a question. That person drinks. No question can be repeated.)
          <br />
            King - King's Cup. (Set a rule to be followed, e.g. stand on one foot when you drink, only speak in an accent, etc.)
          <br />
            When each of the first 3 Kings is drawn, the person who drew it puts some of their drink into the King's Cup in the center of the table. When the 4th King is drawn, the person who drew it must drink the entire King's Cup.)
>>>>>>> tyler
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
};
