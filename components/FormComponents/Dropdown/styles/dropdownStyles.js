// Keeping unused styling for now so I know what element they target
export default {
  multiValueLabel: (styles) => ({
    ...styles,
    color: 'white',
    borderRadius: 'inherit',
    fontSize: 'inherit',
    overflow: 'inherit',
    padding: 'inherit',
    paddingLeft: 'inherit',
    textOverflow: 'inherit',
    whiteSpace: 'inherit',
    boxSizing: 'inherit',
    // backgroundColor: 'red!important',
  }),
  menuList: (styles) => ({
    ...styles,
    // backgroundColor: 'red',
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    display: 'none',
  }),
  multiValue: (styles) => ({
    ...styles,
    background: 'none',
  }),
  valueContainer: (styles) => ({
    ...styles,
    // padding: '20px',
    // background: 'red',
    // height: '200px',
  }),
  input: (styles) => ({
    ...styles,
    paddingTop: '9px',
  }),
  groupHeading: (styles) => ({
    ...styles,
    // backgroundColor: '#19493F',
    // color: 'white',
    // padding: '10px',
  }),
  control: (styles, { isFocused }) => ({
    ...styles,
    boxShadow: 'none',
    borderColor: isFocused ? '#26a69a!important' : '#b6b6b6!important',
  }),
};

export const DropdownStyles = {
  option: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: isFocused ? '#dad8d8' : 'white',
    color: isFocused ? '#a80303' : '#333',
    clear: 'both',
    lineHeight: '22px',
    width: '100%',
    textAlign: 'left',
    fontWeight: '500',
    padding: '3px 10px 3px 19px',
    fontSize: '15px',
  }),
  control: (styles, { isFocused }) => ({
    ...styles,
    border: 'none',
    borderBottom: '1px solid',
    borderColor: isFocused ? '#26a69a!important' : '#b6b6b6!important',
    backgroundColor: 'transparent',
    borderRadius: '0',
    outline: 'none',
    boxShadow: 'none',
  }),
};
