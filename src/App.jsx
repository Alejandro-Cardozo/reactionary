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
  const [isLoading, setIsLoading] = useState(false);

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

  useEffect(() => {
    setIsLoading(true);
    const dictionaryApi = async () => {
      const options = {
        method: 'GET',
        url: 'https://lexicala1.p.rapidapi.com/search-entries',
        params: { text: word },
        headers: {
          'X-RapidAPI-Key':
            process.env.REACT_APP_RAPID_API_KEY,
          'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST
        },
      };
      try {
        if (word.length > 0) {
          const data = await axios.request(options);
          // console.log(data.data.results.filter((el) => el.language === category));
          setMeanings(
            data.data.results.filter((el) => el.language === category)
          );
        }
      } catch (error) {
        setMeanings([]);
      }
    };

    const timer = setTimeout(() => {
      dictionaryApi();

      setIsLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
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
            isLoading={isLoading}
          />
        )}
      </Container>
    </div>
  );
}

export default App;
