import React from 'react';

export default function BackgroundMedia() {
  return (
    <video
      className="absolute inset-0 object-cover w-full h-full opacity-30"
      autoPlay
      muted
      loop
      playsInline
      src="/sample.mp4"
    />
  );
}