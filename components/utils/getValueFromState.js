// This function pulls the matching value objects from state for each Dropdown component if an existing value exists - otherwise, returns empty object
const getValueFromState = (valueKey, state) => {
  let obj = {};
  // eslint-disable-next-line array-callback-return
  state.map(option => {
    if (option.value === valueKey) {
      obj = option;
    }
  });
  return obj;
};

export default getValueFromState;
