import React, { useRef, useState } from 'react';

export default function AudioPlayer({ onTimeUpdate }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    isPlaying ? audio.pause() : audio.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <audio
        ref={audioRef}
        src="/sample.mp3"
        onTimeUpdate={() => onTimeUpdate(audioRef.current?.currentTime || 0)}
      />
      <button
        onClick={togglePlay}
        className="px-4 py-2 text-black bg-white rounded-full shadow hover:opacity-80 transition"
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
}