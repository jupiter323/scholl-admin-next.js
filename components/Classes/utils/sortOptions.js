const sortByOptions = [
  {
    label: 'Available On Date',
    value: 'availableDate',
  },
  {
    label: 'Due Date',
    value: 'dueDate',
  },
  {
    label: 'Problems',
    value: 'problems',
  },
  {
    label: 'Time Estimate',
    value: 'timeEstimate',
  },
  {
    label: 'Status',
    value: 'status',
  },
  {
    label: 'Subject',
    value: 'subject',
  },
  {
    label: 'Flags',
    value: 'flags',
  },
  {
    label: 'Percentage Complete',
    value: 'percentageComplete',
  },
];

export const availableDateSort = ({ availableDate: availableDateA }, { availableDate: availableDateB }) => {
  if (availableDateA > availableDateB) { return -1; }
  return 0;
}

export const dueDateSort = ({ dueDate: dueDateA }, { dueDate: dueDateB }) => {
  if (dueDateA > dueDateB) { return -1; }
  return 0;
}

export const statusSort = ({ status: statusA }, { status: statusB }) => {
  if (statusA > statusB) { return -1; }
  return 0;
}

export const flagsSort = ({ flags: flagsA }, { flags: flagsB }) => {
  if (flagsA > flagsB) { return -1; }
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

export const percentageCompleteSort = ({ percentageComplete: percentageCompleteA }, { percentageComplete: percentageCompleteB }) => {
  if (percentageCompleteA > percentageCompleteB) { return -1; }
  return 0;
}

export default sortByOptions;
