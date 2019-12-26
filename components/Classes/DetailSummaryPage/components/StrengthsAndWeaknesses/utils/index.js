export const getIndicatorStatus = (activeSection) => {
  switch (activeSection) {
    case 'reading':
      return {
        left: '0',
        right: '66%',
      }
    case 'writing':
      return {
        left: '33%',
        right: '33%',
      }
    case 'math':
      return {
        left: '66%',
        right: '0',
      }
    default:
      return null;
  }
};
