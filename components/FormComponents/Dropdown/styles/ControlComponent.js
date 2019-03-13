import React from 'react';
import PropTypes from 'prop-types';
import { components } from 'react-select';

import { ControlWrapper } from './';
import { DropdownStyles } from '../styles/dropdownStyles';

const ControlComponent = (props) => {
  const { selectProps: { placeholder, label, className } } = props;
  const categoryCheck = label === 'Categories';
  return (
    <ControlWrapper invalid={className} categoryCheck={categoryCheck}>
      <div style={DropdownStyles}>
        {<p>{categoryCheck ? 'Categories' : placeholder}</p>}
        <components.Control {...props} />
      </div>
    </ControlWrapper>
  );
};

ControlComponent.propTypes = {
  selectProps: PropTypes.object.isRequired,
};

export default ControlComponent;
