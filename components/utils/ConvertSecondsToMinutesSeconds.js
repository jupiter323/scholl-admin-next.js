export const ConvertSecondsToMinutesSeconds = (time) => {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60 === 0 ? '00' : time % 60;
  if (Number(seconds) < 10 && Number(seconds) > 0) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
};
