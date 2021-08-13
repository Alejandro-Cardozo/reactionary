import React from 'react';
import Spinner from '../MUI/Spinner';

import classes from './Definitions.module.css';

const Definitions = ({ word, category, meanings, lightMode, isLoading }) => {
  return (
    <div className={classes.meanings}>
      {meanings[0] && word && category === 'en' && (
        <audio
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          style={{ background: '#fff', borderRadius: 10 }}
          controls
        >
          Your Browser doesn't support audio elements.
        </audio>
      )}
      {word === '' ? (
        <span className={classes.subtitle}>
          Start by typing a word in the search bar
        </span>
      ) : isLoading ? (
        <Spinner lightMode={lightMode} />
      ) : meanings.length === 0 ? (
        <span className={classes.subtitle}>No results</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                key={Math.random() * 1000}
                className={classes.singleMean}
                style={{
                  backgroundColor: lightMode ? '#282c34' : 'white',
                  color: lightMode ? 'white' : 'black',
                }}
              >
                <b>{def.definition}</b>
                <hr style={{ background: 'black', width: '100%' }} />
                {def.example && (
                  <span>
                    <b>Example: </b>
                    {def.example}
                  </span>
                )}
                {def.synonyms.length > 0 && (
                  <span>
                    <b>Synonyms: </b>
                    {def.synonyms.map((s) => `${s}, `)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definitions;
