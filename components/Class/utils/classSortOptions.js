export default [
  {
    value: 'classNameDescending',
    label: 'Class Name (Descending)',
  },
  {
    value: 'classNameAscending',
    label: 'Class Name (Ascending)',
  },
];

export const classNameDescending = ({ name: nameA }, { name: nameB }) => {
  if (nameA > nameB) { return -1; }
  return 0;
};

export const classNameAscending = ({ name: nameA }, { name: nameB }) => {
  if (nameA < nameB) { return -1; }
  return 0;
};
