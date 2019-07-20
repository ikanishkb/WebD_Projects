import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
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

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
            console.log(props)
  return (
    <Card className={classes.card} >
      <CardContent>
          <img src={props.data.imgURL} height="250" width="100%"></img>
          Name : {props.data.name}
          <br/>
          Price : {props.data.price}
          <br/>
          Location : {props.data.location}
          <br/>
          GuestGender : {props.data.guestGender}
          <br/>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=> props.cardClick(props.data.id)}>Learn More</Button>
      </CardActions>
    </Card>
  );
}