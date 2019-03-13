import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const DatePickerWrapper = (props) => (
  <React.Fragment>
    <DatePicker
      {...props}
    />
  </React.Fragment>
);

export default DatePickerWrapper;
