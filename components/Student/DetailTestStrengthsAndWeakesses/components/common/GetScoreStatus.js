export const getScoreStatus = score => {
  let scoreStyle = '';
  if (score >= 90) {
    scoreStyle = 'badge-rounded-sm light-green lighten-1 badge white-text';
  } else if (score > 75 && score < 90) {
    scoreStyle = 'badge-rounded-sm light-green lighten-1 darken-1 badge white-text';
  } else if (score > 60 && score <= 75) {
    scoreStyle = 'badge-rounded-sm light-green lighten-1 darken-2 badge white-text';
  } else if (score > 40 && score <= 60) {
    scoreStyle = 'badge-rounded-sm orange darken-5 badge white-text';
  } else {
    scoreStyle = 'badge-rounded-sm red darken-5 badge white-text';
  }
  console.log('scoreStyle:', scoreStyle);
  return scoreStyle;
};
