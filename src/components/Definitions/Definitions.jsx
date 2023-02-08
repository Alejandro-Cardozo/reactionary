import React from 'react';
import Spinner from '../MUI/Spinner';

import { subtitles } from '../../data/subtitles';

import classes from './Definitions.module.css';

const Definitions = ({
  word,
  category,
  meanings,
  headword,
  lightMode,
  isLoading,
}) => {
  const textHelper = subtitles(category);

  return (
    <div className={classes.meanings}>
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
        meanings.map((def) => (
          <div
            key={Math.random() * 1000}
            className={classes.singleMean}
            style={{
              backgroundColor: lightMode ? '#282c34' : 'white',
              color: lightMode ? 'white' : 'black',
            }}
          >
            {def.text ? <b>{def.text}; {def.definition}</b> : <b>{def.definition}</b>}
            <hr style={{ background: 'black', width: '100%' }} />
            {headword.pos && (
              <span>
                <b>Part of Speech: </b>
                {headword.pos}
              </span>
            )}
            {headword.gender && (
              <span>
                <b>Gender: </b>
                {headword.pos}
              </span>
            )}
            {headword.pronunciation?.value && (
              <span>
                <b>Pronunciation: </b>
                {headword.pronunciation?.value}
              </span>
            )}
            {def.examples && (
              <span>
                <b>Examples: </b>
                {def.examples.map(
                  (s, i) =>
                    `${s.text}${i === def.examples.length - 1 ? '' : ' — '} `
                )}
              </span>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Definitions;
