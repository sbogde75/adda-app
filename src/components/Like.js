import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import RestoreIcon from '@material-ui/icons/Restore';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LocationOnIcon from '@material-ui/icons/LocationOn';
// import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
// import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function Like() {
  const classes = useStyles();
  const [value, setValue] = React.useState(false);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label='Favorites'
        style={{ display: 'none' }}
        icon={<FavoriteBorderIcon />}
      />
      <BottomNavigationAction label='Favorites' icon={<FavoriteBorderIcon />} />
      <BottomNavigationAction label='Details' icon={<ArrowForwardIosIcon />} />
      <BottomNavigationAction label={value} icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}
