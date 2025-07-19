import React from 'react';

const themes = ['neon', 'pop', 'ghost', 'captioned'];

export default function ThemeSelector({ currentTheme, setTheme }) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {themes.map((theme) => (
        <button
          key={theme}
          onClick={() => setTheme(theme)}
          className={`px-3 py-1 rounded-full border ${
            currentTheme === theme
              ? 'bg-white text-black'
              : 'border-white text-white hover:bg-white hover:text-black'
          }`}
        >
          {theme}
        </button>
      ))}
    </div>
  );
}