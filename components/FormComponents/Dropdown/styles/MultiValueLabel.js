import React from 'react';
import { components } from 'react-select';

export default (props) => (
  <div className="chip">
    <components.MultiValueLabel {...props} />
  </div>
);
