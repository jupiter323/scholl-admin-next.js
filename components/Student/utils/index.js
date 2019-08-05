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
    label: 'Completion Date',
    value: 'completionDate',
  },
  {
    label: 'Flags',
    value: 'flags',
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

export const completionDateSort = ({ completionDate: completionDateA }, { completionDate: completionDateB }) => {
  if (completionDateA > completionDateB) { return -1; }
  return 0;
}

export const flagsSort = ({ flags: flagsA }, { flags: flagsB }) => {
  if (flagsA > flagsB) { return -1; }
  return 0;
}

export default sortByOptions;
