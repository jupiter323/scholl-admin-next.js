import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import ControlComponent from './styles/ControlComponent';
import { DropdownStyles } from './styles/dropdownStyles';
import DropdownWrapper from './styles';

const Dropdown = ({ value, label, dropdownKey, stateKey = null, onChange, options, valid = true, padRight, className }) => (
  <DropdownWrapper className={className} valid={(valid) || (!valid && value === {})} padRight={padRight}>
    <Select
      options={options}
      onChange={(event) => onChange(event.value, dropdownKey, stateKey)}
      components={{ Control: ControlComponent }}
      name="categoryOptions"
      classNamePrefix={dropdownKey === 'difficulty' ? 'expanded-select' : 'select'}
      placeholder={label}
      styles={DropdownStyles}
      isClearable={false}
      isSearchable={false}
      value={value}
      instanceId="dropdown-select"
    />
  </DropdownWrapper>
);

Dropdown.propTypes = {
  value: PropTypes.any,
  valid: PropTypes.bool,
  padRight: PropTypes.bool,
  stateKey: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  dropdownKey: PropTypes.string.isRequired,
};

export default Dropdown;

