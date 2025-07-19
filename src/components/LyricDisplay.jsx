import React from 'react';
import '../../src/styles/themeStyles.css';

export default function LyricDisplay({ lyrics, currentTime, theme }) {
  const getClass = (time, i) => {
    const nextTime = lyrics[i + 1]?.time ?? Infinity;
    if (currentTime >= time && currentTime < nextTime) return 'current';
    if (currentTime >= nextTime) return 'past';
    return 'future';
  };

  return (
    <div className={`lyrics-container theme-${theme}`}>
      {lyrics.map(({ word, time }, i) => (
        <span key={i} className={`word ${getClass(time, i)}`}>
          {word}
        </span>
      ))}
    </div>
  );
}