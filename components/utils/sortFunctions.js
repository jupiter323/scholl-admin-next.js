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

export const studentFirstNameAscending = ({ studentInformation: { firstName: firstNameA } }, { studentInformation: { firstName: firstNameB } }) => {
  if (firstNameA < firstNameB) { return -1; }
  return 0;
};

export const studentFirstNameDescending = ({ studentInformation: { firstName: firstNameA } }, { studentInformation: { firstName: firstNameB } }) => {
  if (firstNameA > firstNameB) { return -1; }
  return 0;
};

export const studentLastNameAscending = ({ studentInformation: { lastName: lastNameA } }, { studentInformation: { lastName: lastNameB } }) => {
  if (lastNameA < lastNameB) { return -1; }
  return 0;
};

export const studentLastNameDescending = ({ studentInformation: { lastName: lastNameA } }, { studentInformation: { lastName: lastNameB } }) => {
  if (lastNameA > lastNameB) { return -1; }
  return 0;
};

export const dueDate = ({ dueDate: dueDateA }, { dueDate: dueDateB }) => {
  if (dueDateA > dueDateB) { return -1; }
  return 0;
};

export const assignDate = ({ assignDate: assignDateA }, { assignDate: assignDateB }) => {
  if (assignDateA > assignDateB) { return -1; }
  return 0;
};

export const problems = ({ problems: problemsA }, { problems: problemsB }) => {
  if (problemsA > problemsB) { return -1; }
  return 0;
};

export const completed = ({ completed: completedA, problems: problemsA }, { completed: completedB, problems: problemsB }) => {
  if (completedA / problemsA > completedB / problemsB) { return -1; }
  return 0;
};

export const flags = ({ flags: flagsA }, { flags: flagsB }) => {
  if (flagsA > flagsB) { return -1; }
  return 0;
};

export const score = ({ score: scoreA }, { score: scoreB }) => {
  if (scoreA > scoreB) { return -1; }
  return 0;
};

export const timeEstimate = ({ timeEstimate: timeEstimateA }, { timeEstimate: timeEstimateB }) => {
  if (timeEstimateA > timeEstimateB) { return -1; }
  return 0;
};

export const timeEstimateAscending = ({ timeEstimate: timeEstimateA }, { timeEstimate: timeEstimateB }) => {
  if (timeEstimateA < timeEstimateB) { return -1; }
  return 0;
};

export const subjectAscending = ({ subject: subjectA }, { subject: subjectB }) => {
  if (subjectA < subjectB) { return -1; }
  return 0;
};

export const subjectDescending = ({ subject: subjectA }, { subject: subjectB }) => {
  if (subjectA > subjectB) { return -1; }
  return 0;
};

export const passageAscending = ({ passage: passageA }, { passage: passageB }) => {
  if (passageA < passageB) { return -1; }
  return 0;
};
export const passageDescending = ({ passage: passageA }, { passage: passageB }) => {
  if (passageA > passageB) { return -1; }
  return 0;
};

export const statusDescending = ({ status: statusA }, { status: statusB }) => {
  if (statusA > statusB) { return -1; }
  return 0;
};

export const statusAscending = ({ status: statusA }, { status: statusB }) => {
  if (statusA < statusB) { return -1; }
  return 0;
};
export const scoreDescending = ({ score: scoreA }, { score: scoreB }) => {
  if (scoreA > scoreB) { return -1; }
  return 0;
};

export const scoreAscending = ({ score: scoreA }, { score: scoreB }) => {
  if (scoreA < scoreB) { return -1; }
  return 0;
};

export const flagsDescending = ({ flags: flagsA }, { flags: flagsB }) => {
  if (flagsA.length > flagsB.length) { return -1; }
  return 0;
};

export const flagsAscending = ({ flags: flagsA }, { flags: flagsB }) => {
  if (flagsA.length < flagsB.length) { return -1; }
  return 0;
};

export const availableDateDescending = ({ availableDate: availableDateA }, { availableDate: availableDateB }) => {
  if (availableDateA > availableDateB) { return -1; }
  return 0;
};

export const availableDateAscending = ({ availableDate: availableDateA }, { availableDate: availableDateB }) => {
  if (availableDateA < availableDateB) { return -1; }
  return 0;
};

export const lessonNameAscending = ({ lessonName: lessonNameA }, { lessonName: lessonNameB }) => {
  if (lessonNameA < lessonNameB) { return -1; }
  return 0;
};

export const lessonNameDescending = ({ lessonName: lessonNameA }, { lessonName: lessonNameB }) => {
  if (lessonNameA > lessonNameB) { return -1; }
  return 0;
};

export const dueDateAscending = ({ dueDate: dueDateA }, { dueDate: dueDateB }) => {
  if (dueDateA < dueDateB) { return -1; }
  return 0;
};

export const completionDateAscending = ({ completionDate: completionDateA }, { completionDate: completionDateB }) => {
  if (completionDateA < completionDateB) { return -1; }
  return 0;
};

export const completionDateDescending = ({ completionDate: completionDateA }, { completionDate: completionDateB }) => {
  if (completionDateA > completionDateB) { return -1; }
  return 0;
};

export const lessonTypeAscending = ({ type: typeA }, { type: typeB }) => {
  if (typeA < typeB) { return -1; }
  return 0;
};

export const lessonTypeDescending = ({ type: typeA }, { type: typeB }) => {
  if (typeA > typeB) { return -1; }
  return 0;
};

export const totalProblemsAscending = ({ totalProblems: totalProblemsA }, { totalProblems: totalProblemsB }) => {
  if (totalProblemsA < totalProblemsB) { return -1; }
  return 0;
};

export const totalProblemsDescending = ({ totalProblems: totalProblemsA }, { totalProblems: totalProblemsB }) => {
  if (totalProblemsA > totalProblemsB) { return -1; }
  return 0;
};
