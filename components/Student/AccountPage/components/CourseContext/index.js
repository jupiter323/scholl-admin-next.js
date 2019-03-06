import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';

import Dropdown from '../../../../FormComponents/Dropdown';
import getValueFromState from '../../../../utils/getValueFromState';

const DatePicker = dynamic(() => import('../../../../FormComponents/DatePicker'), {
  ssr: false,
});

const startDateOptions = [
  {
    label: 'First Assignment Date (Default)',
    value: 'firstAssignmentDate',
  },
  {
    label: 'Second Option',
    value: 'secondOption',
  },
  {
    label: 'Third Option',
    value: 'thirdOption',
  },
];

const endDateOptions = [
  {
    label: 'First Assignment Date (Default)',
    value: 'firstAssignmentDate',
  },
  {
    label: 'Second Option',
    value: 'secondOption',
  },
  {
    label: 'Third Option',
    value: 'thirdOption',
  },
];

const targetTestDateOptions = [
  {
    label: 'October 6, 2018',
    value: 'firstAssignmentDate',
  },
  {
    label: 'Second Option',
    value: 'secondOption',
  },
  {
    label: 'Third Option',
    value: 'thirdOption',
  },
];

const CourseContext = ({ state: { courseStartDateOption, courseStartDate, courseEndDateOption, courseEndDate, targetTestDate, targetScore, highSchool, graduationYear }, handleDetailsChange }) => (
  <div className="row mb-0 one-large-col d-flex-content">
    <div className="col s12">
      <div className="card-block">
        <h2>Course Context</h2>
        <div className="card">
          <div className="card-content">
            <div className="course-context_two-col">
              <div className="column">
                <div className="row mb-0">
                  <div className="col s12">
                    <div className="input-field focus-blue">
                      <Dropdown
                        value={getValueFromState(courseStartDateOption, startDateOptions)}
                        onChange={(event) => handleDetailsChange(event, 'courseStartDateOption', 'courseContext')}
                        options={startDateOptions}
                        label="Course Start Date"
                        stateKey="courseStartDateOption"
                        dropdownKey="courseStartDateOption"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col s4">
                    <div className="datepicker-field input-field">
                      <i className="icon-calendar-dark"></i>
                      <DatePicker
                        selected={courseStartDate}
                        id="course_start_date"
                        onChange={(event) => handleDetailsChange(event, 'courseStartDate', 'courseContext')}
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-0">
                  <div className="col s12">
                    <div className="input-field focus-blue">
                      <Dropdown
                        value={getValueFromState(courseEndDateOption, endDateOptions)}
                        onChange={(event) => handleDetailsChange(event, 'courseEndDateOption', 'courseContext')}
                        options={endDateOptions}
                        label="Course End Date"
                        stateKey="courseEndDateOption"
                        dropdownKey="courseEndDateOption"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col s4">
                    <div className="datepicker-field input-field">
                      <i className="icon-calendar-dark"></i>
                      <DatePicker
                        selected={courseEndDate}
                        id="course_end_date"
                        onChange={(event) => handleDetailsChange(event, 'courseEndDate', 'courseContext')}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="row">
                  <div className="col s12 m6 l8">
                    <div className="input-field focus-blue">
                      <Dropdown
                        value={getValueFromState(targetTestDate, targetTestDateOptions)}
                        onChange={(event) => handleDetailsChange(event, 'targetTestDate', 'courseContext')}
                        options={targetTestDateOptions}
                        label="Target Test Date*"
                        stateKey="targetTestDate"
                        dropdownKey="targetTestDate"
                      />
                      <span className="note">*Optional</span>
                    </div>
                  </div>
                  <div className="col s12 m6 l4">
                    <div className="input-field focus-blue">
                      <input
                        type="text"
                        id="target_score"
                        name="targetScore"
                        value={targetScore}
                        onChange={(event) => handleDetailsChange(event, 'targetScore', 'courseContext')}
                      />
                      <label className={targetScore.length ? 'label active' : 'label'} htmlFor="target_score">Target Score*</label>
                      <span className="note">*Optional</span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col s12">
                    <div className="input-field focus-blue">
                      <input
                        type="text"
                        id="high_school"
                        name="highSchool"
                        value={highSchool}
                        onChange={(event) => handleDetailsChange(event, 'highSchool', 'courseContext')}
                      />
                      <label className={highSchool.length ? 'label active' : 'label'} htmlFor="high_school">High School*</label>
                      <span className="note">*Optional</span>
                    </div>
                  </div>
                </div>
                <div className="row mb-0">
                  <div className="col s12">
                    <div className="input-field focus-blue">
                      <input
                        type="text"
                        id="graduation_year"
                        name="graduationYear"
                        value={graduationYear}
                        onChange={(event) => handleDetailsChange(event, 'graduationYear', 'courseContext')}
                      />
                      <label className={graduationYear.length ? 'label active' : 'label'} htmlFor="graduation_year">Graduation Year*</label>
                      <span className="note">*Optional</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

CourseContext.propTypes = {
  state: PropTypes.object.isRequired,
  handleDetailsChange: PropTypes.func.isRequired,
};

export default CourseContext;
