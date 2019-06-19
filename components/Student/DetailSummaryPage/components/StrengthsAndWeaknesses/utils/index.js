export const getIndicatorStatus = (activeSection) => {
  switch (activeSection) {
    case 'reading':
      return {
        left: '1.5%',
        right: '92%',
        height: '2px',
      }
    case 'writing':
      return {
        left: '11%',
        right: '83%',
        height: '2px',
      }
    case 'math':
      return {
        left: '20%',
        right: '75%',
        height: '2px',
      }
    default:
      return null;
  }
}

export const data = (totalScore, totalPossible) => ({
  datasets: [{
    data: [totalPossible, totalPossible-totalScore],
    backgroundColor: [
      '#ce237a',
      'rgb(234, 234, 234)',
    ],
  }],
});
