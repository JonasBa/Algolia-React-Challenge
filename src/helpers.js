export function starsToWidth(stars) {
  const width = Math.round((stars * 81 / 5 * 100))/100 + 'px';
  return {width};
}

export function millisToSeconds(millis) {
  return millis / 1000;
}