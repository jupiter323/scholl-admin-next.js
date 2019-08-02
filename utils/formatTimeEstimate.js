const formatTimeEstimate = (totalMinutes) => {
  const hours = Math.floor(totalMinutes / 60) === 0 ? 0 : Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60 === 0 ? 0 : totalMinutes % 60;
  const hourString = hours !== 0 ? `${hours} hrs` : '';
  const minuteString = minutes !== 0 ? `${minutes} mins` : '';
  return `${hourString} ${minuteString}`
}

export default formatTimeEstimate;
