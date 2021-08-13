import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { Container, Switch, withStyles } from '@material-ui/core';
import Header from './components/Header/Header';
import Definitions from './components/Definitions/Definitions';

import { grey } from '@material-ui/core/colors';
import classes from './App.module.css';

function App() {
  const [meanings, setMeanings] = useState([]);
  const [word, setWord] = useState('');
  const [category, setCategory] = useState('en');
  const [lightMode, setLightMode] = useState(false);

  const DarkMode = withStyles({
    switchBase: {
      color: grey[300],
      '&$checked': {
        color: grey[500],
      },
      '&$checked + $track': {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

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
    <div
      className={classes.app}
      style={{
        backgroundColor: lightMode ? '#fff' : '#282c34',
        color: lightMode ? 'black' : ' white',
        transition: 'all 0.3s linear',
      }}
    >
      <Container
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          justifyContent: 'space-evenly',
        }}
        maxWidth='md'
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 15,
            paddingTop: 10,
          }}
        >
          <span>{lightMode ? 'Dark' : 'Light'}</span>
          <DarkMode
            checked={lightMode}
            onChange={() => setLightMode((prev) => !prev)}
          />
        </div>
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
          lightMode={lightMode}
        />
        {meanings && (
          <Definitions
            word={word}
            meanings={meanings}
            category={category}
            lightMode={lightMode}
          />
        )}
      </Container>
    </div>
  );
}

export default App;
