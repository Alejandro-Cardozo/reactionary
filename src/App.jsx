import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { Container } from '@material-ui/core';
import Header from './components/Header/Header';

import classes from './App.module.css';

function App() {
  const [meanings, setMeanings] = useState([]);
  const [word, setWord] = useState('');
  const [category, setCategory] = useState('en');

  console.log(meanings);

  // TODO: modify the code to avoid sending requests on every key stroke
  useEffect(() => {
    const dictionaryApi = async () => {
      try {
        if (word.length > 0) {
          const data = await axios.get(
            `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
          );
          setMeanings(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    dictionaryApi();
  }, [category, word]);

  return (
    <div className={classes.app}>
      <Container className={classes.container} maxWidth='md'>
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
        />
      </Container>
    </div>
  );
}

export default App;
