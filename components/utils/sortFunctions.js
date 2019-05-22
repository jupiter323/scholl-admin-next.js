export const firstNameAscending = ({ accountInfo: { firstName: firstNameA } }, { accountInfo: { firstName: firstNameB } }) => {
  if (firstNameA < firstNameB) { return -1; }
  return 0;
};

export const firstNameDescending = ({ accountInfo: { firstName: firstNameA } }, { accountInfo: { firstName: firstNameB } }) => {
  if (firstNameA > firstNameB) { return -1; }
  return 0;
};

export const lastNameAscending = ({ accountInfo: { lastName: lastNameA } }, { accountInfo: { lastName: lastNameB } }) => {
  if (lastNameA < lastNameB) { return -1; }
  return 0;
};

export const lastNameDescending = ({ accountInfo: { lastName: lastNameA } }, { accountInfo: { lastName: lastNameB } }) => {
  if (lastNameA > lastNameB) { return -1; }
  return 0;
};

export const dueDate = ({ dueDate: dueDateA }, { dueDate: dueDateB }) => {
  if (dueDateA > dueDateB) { return -1; }
  return 0;
}

export const assignDate = ({ assignDate: assignDateA }, { assignDate: assignDateB }) => {
  if (assignDateA > assignDateB) { return -1; }
  return 0;
}

export const problems = ({ problems: problemsA }, { problems: problemsB }) => {
  if (problemsA > problemsB) { return -1; }
  return 0;
}

export const completed = ({ completed: completedA, problems: problemsA }, { completed: completedB, problems: problemsB }) => {
  if (completedA / problemsA > completedB / problemsB) { return -1; }
  return 0;
}

export const flags = ({ flags: flagsA }, { flags: flagsB }) => {
  if (flagsA > flagsB) { return -1; }
  return 0;
}

export const score = ({ score: scoreA }, { score: scoreB }) => {
  if (scoreA > scoreB) { return -1; }
  return 0;
}

export const timeEstimate = ({ timeEstimate: timeEstimateA }, { timeEstimate: timeEstimateB }) => {
  if (timeEstimateA > timeEstimateB) { return -1; }
  return 0;
}

export const subjectAscending = ({ subject: subjectA }, { subject: subjectB }) => {
  if (subjectA < subjectB) { return -1; }
  return 0;
}

export const subjectDescending = ({ subject: subjectA }, { subject: subjectB }) => {
  if (subjectA > subjectB) { return -1; }
  return 0;
}
