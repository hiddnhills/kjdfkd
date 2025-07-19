import React, { useState, useEffect } from 'react';
import AudioPlayer from './components/AudioPlayer';
import LyricDisplay from './components/LyricDisplay';
import ThemeSelector from './components/ThemeSelector';
import BackgroundMedia from './components/BackgroundMedia';
import { parseLRC } from './utils/parseLRC';

export default function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [lyrics, setLyrics] = useState([]);
  const [theme, setTheme] = useState('neon');

  useEffect(() => {
    fetch('/sample.lrc')
      .then(res => res.text())
      .then(text => setLyrics(parseLRC(text)));
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <BackgroundMedia />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 p-4 text-center">
        <h1 className="text-3xl font-bold">🎵 HIDDNHILLS Lyric Sync</h1>
        <AudioPlayer onTimeUpdate={setCurrentTime} />
        <ThemeSelector currentTheme={theme} setTheme={setTheme} />
        <LyricDisplay lyrics={lyrics} currentTime={currentTime} theme={theme} />
      </div>
    </div>
  );
}