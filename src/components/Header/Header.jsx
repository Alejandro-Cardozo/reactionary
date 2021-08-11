import React from 'react';

import {
  createTheme,
  MenuItem,
  TextField,
  ThemeProvider,
} from '@material-ui/core';

import classes from './Header.module.css';

const Header = () => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#fff',
      },
      type: 'dark',
    },
  });
  return (
    <div className={classes.header}>
      <span className={classes.title}>Word Hunt</span>
      <div className={classes.inputs}>
        <ThemeProvider theme={darkTheme}>
          <TextField id='standard-basic' label='Standard' />
          <TextField
            id='standard-select-currency'
            select
            label='Select'
            helperText='Please select your currency'
          >
            <MenuItem>English</MenuItem>
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
