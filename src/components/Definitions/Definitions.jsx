import React from 'react';
import Spinner from '../MUI/Spinner';

import { subtitles } from '../../data/subtitles';

import classes from './Definitions.module.css';

const Definitions = ({ word, category, meanings, lightMode, isLoading }) => {
  const textHelper = subtitles(category);

  console.log(meanings);

  return (
    <div className={classes.meanings}>
      {/* {meanings[0] && word && category === 'en' && (
        <audio
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          style={{ background: '#fff', borderRadius: 10 }}
          controls
        >
          Your Browser doesn't support audio elements.
        </audio>
      )} */}
      {word === '' ? (
        <span className={category === 'ar' ? classes.arab : classes.subtitle}>
          {textHelper.subtitle}
        </span>
      ) : isLoading ? (
        <Spinner lightMode={lightMode} />
      ) : meanings.length === 0 ? (
        <span className={category === 'ar' ? classes.arab : classes.subtitle}>
          {textHelper.notFound}
        </span>
      ) : (
        meanings.map((item) =>
          item.senses.map((def) => (
            <div
              key={Math.random() * 1000}
              className={classes.singleMean}
              style={{
                backgroundColor: lightMode ? '#282c34' : 'white',
                color: lightMode ? 'white' : 'black',
              }}
            >
              <b>{def.definition || def.compositional_phrases[0]?.definition}</b>
              <hr style={{ background: 'black', width: '100%' }} />
              {item.headword.pos && (
                <span>
                  <b>Part of Speech: </b>
                  {item.headword.pos}
                </span>
              )}
              {item.headword.gender && (
                <span>
                  <b>Gender: </b>
                  {item.headword.pos}
                </span>
              )}
              {item.headword.pronunciation?.value && (
                <span>
                  <b>Pronunciation: </b>
                  {/* {def.synonyms.map((s) => `${s}, `)} */}
                  {item.headword.pronunciation?.value}
                </span>
              )}
              {def.examples && (
                <span>
                  <b>Examples: </b>
                  {def.examples.map((s) => `${s.text}, `)}
                </span>
              )}
              {/* {def.compositional_phrases[0]?.examples && (
                <span>
                  <b>Examples: </b>
                  {def.compositional_phrases[0]?.examples.map((s) => `${s.text}, `)}
                </span>
              )} */}
            </div>
          ))
        )
      )}
    </div>
  );
};

export default Definitions;
