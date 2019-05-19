export const pageNumberSort = ({ pageNumber: pageNumberA }, { pageNumber: pageNumberB }) => {
  if (pageNumberA > pageNumberB) { return -1; }
  return 0;
}

export const problemSort = ({ problems: problemCountA }, { problems: problemCountB }) => {
  if (problemCountA > problemCountB) { return -1; }
  return 0;
}

export const timeEstimateSort = ({ timeEstimate: timeEstimateA }, { timeEstimate: timeEstimateB }) => {
  if (timeEstimateA > timeEstimateB) { return -1; }
  return 0;
}

export const subjectSort = ({ subject: subjectA }, { subject: subjectB }) => {
  if (subjectA > subjectB) { return -1; }
  return 0;
}
