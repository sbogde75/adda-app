import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import useStyles from '../css/useStyles';

function MyCard() {
  const classes = useStyles();
  const rand = Math.floor(Math.random() * 1011);
  // console.warn('rand', rand);
  const url = `https://source.unsplash.com/random?${rand}`;

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={url}
        title='Image title'
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant='h5' component='h2'>
          Heading {rand}
        </Typography>
        <Typography>
          This is a media card. You can use this section to describe the
          content.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' color='primary'>
          View
        </Button>
        <Button size='small' color='primary'>
          Edit
        </Button>
      </CardActions>
    </Card>
  );
}

export default MyCard;
