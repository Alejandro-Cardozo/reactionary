import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
  darkTheme: {
    color: 'white',
    alignSelf: 'center',
    marginTop: 15
  },
  lightTheme: {
    color: 'black',
    alignSelf: 'center',
    marginTop: 15
  },
});

export default function Spinner({ lightMode }) {
  const classes = useStyles();
  const theme = lightMode ? classes.lightTheme : classes.darkTheme;
  return <CircularProgress className={theme}/>;
}
