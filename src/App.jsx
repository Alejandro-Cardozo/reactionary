import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { Container } from '@material-ui/core';
import Header from './components/Header/Header';

import classes from './App.module.css';

function App() {
  const [meanings, setMeanings] = useState([]);
  const [word, setWord] = useState('');

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        ' https://api.dictionaryapi.dev/api/v2/entries/en/bull'
      );
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(meanings);

  useEffect(() => {
    dictionaryApi();
  }, []);

  return (
    <div className={classes.app}>
      <Container className={classes.container} maxWidth='md'>
        <Header />
      </Container>
    </div>
  );
}

export default App;
