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
