import React from 'react';

import {
  createTheme,
  MenuItem,
  TextField,
  ThemeProvider,
} from '@material-ui/core';

import categories from '../../data/category';
import classes from './Header.module.css';

const Header = ({ category, setCategory, word, setWord, lightMode }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: lightMode ? '#fff' : '#000',
      },
      type: lightMode ? 'light' : 'dark',
    },
  });

  const selectLanguageHandler = (language) => {
    setCategory(language);
    setWord('');
  };

  return (
    <div className={classes.header}>
      <span className={classes.title}>{word ? word : 'Dick-tionary'}</span>
      <div className={classes.inputs}>
        <ThemeProvider theme={darkTheme}>
          <TextField
            className={classes.search}
            label='Search a Word'
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <TextField
            select
            className={classes.select}
            value={category}
            onChange={(e) => selectLanguageHandler(e.target.value)}
            label='Language'
          >
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
