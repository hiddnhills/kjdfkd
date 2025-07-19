export function parseLRC(lrcText) {
  const lines = lrcText.split('\n');
  const lyrics = [];
  for (const line of lines) {
    const match = line.match(/\[(\d+):(\d+\.\d+)\](.*)/);
    if (match) {
      const minutes = parseInt(match[1]);
      const seconds = parseFloat(match[2]);
      const time = minutes * 60 + seconds;
      const words = match[3].trim().split(' ');
      words.forEach((word, i) => {
        lyrics.push({ time: time + i * 0.3, word });
      });
    }
  }
  return lyrics;
}