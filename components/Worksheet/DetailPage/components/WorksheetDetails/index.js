import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import update from 'immutability-helper';

import categoryStyles from '../../../../FormComponents/Dropdown/styles/dropdownStyles';
import ControlComponent from '../../../../FormComponents/Dropdown/styles/ControlComponent';
import MultiValueLabel from '../../../../FormComponents/Dropdown/styles/MultiValueLabel';
import { subjectOptions, difficultyOptions, typeOptions } from '../../../utils/worksheetDetailsOptions';

import Dropdown from '../../../../FormComponents/Dropdown';
import getValueFromState from '../../../../utils/getValueFromState';

class WorksheetDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      originalWorksheet: {
        worksheetName: '',
        subject: {},
        type: '',
        difficulty: '',
        estimatedTime: '',
        categories: [],
        description: '',
      },
      updatedWorksheet: {
        worksheetName: '',
        subject: {},
        type: '',
        difficulty: '',
        estimatedTime: '',
        categories: [],
        description: '',
      },
      validation: {
        worksheetName: true,
        subject: true,
        type: true,
        difficulty: true,
        estimatedTime: true,
        categories: true,
      },
      categoryOptions: [
        {
          label: 'Math',
          options: [
            { value: 'special-right-triangles', label: 'Special Right Triangles' },
            { value: 'volumes', label: 'Volumes' },
            { value: 'trig-functions', label: 'Trig Functions' },
          ],
        },
        {
          label: 'Science',
          options: [
            { value: 'astrology', label: 'Astrology' },
            { value: 'algebra', label: 'Algebra' },
          ],
        },
        {
          label: 'English',
          options: [
            { value: 'geometry', label: 'Geometry' },
            { value: 'pythagorean-theorem', label: 'Pythagorean Theorem' },
          ],
        },
      ],
    };
  }

  getSectionDropdownOptions = () => {
    const { categoryOptions } = this.state;
    const { worksheet: { subject } = {} } = this.props;
    if (!subject) {
      return categoryOptions;
    }
    const categoryLabels = categoryOptions.map(categoryOption => categoryOption.label);
    const subjectIndex = categoryLabels.indexOf(subject.charAt(0).toUpperCase() + subject.slice(1));
    return [categoryOptions[subjectIndex]];
  }

  updateCategoryState = (categories) => {
    const updatedWorksheet = update(this.state.updatedWorksheet, {
      $merge: { categories },
    });
    this.setState({ updatedWorksheet });
  }

  handleCategoryChange = (categories) => {
    const updatedCategories = categories.reduce((finalArr, category) => {
      finalArr.push(category.value);
      return finalArr;
    }, []);
    this.updateCategoryState(updatedCategories);
  };

  handleDetailsChange = (event, name) => {
    const { updatedWorksheet: previousWorksheetState } = this.state;
    const value = event.target ? event.target.value : event;
    const updatedWorksheet = update(previousWorksheetState, {
      $merge: { [name]: value },
    });
    this.setState({ updatedWorksheet });
  }

  render() {
    const { validation: { categories: categoriesValid }, updatedWorksheet: { worksheetName, estimatedTime, subject, type, difficulty, description, categories } } = this.state;
    return (
      <div className="col s12 l6">
        <div className="card-block">
          <h2>Details</h2>
          <div className="card">
            <div className="card-content">
              <div className="card-body">
                <div className="row mb-0">
                  <div className="col s12">
                    <div className="input-field">
                      <input
                        type="text"
                        id="details_name"
                        value={worksheetName}
                        onChange={(event) => this.handleDetailsChange(event, 'worksheetName')}
                      />
                      <label className={worksheetName.length ? 'label active' : 'label'} htmlFor="details_name">Name</label>
                    </div>
                  </div>
                </div>
                <div className="row mb-0">
                  <div className="col s6">
                    <div className="input-field">
                      <Dropdown
                        value={getValueFromState(subject, subjectOptions)}
                        onChange={(event) => this.handleDetailsChange(event, 'subject')}
                        options={subjectOptions}
                        label="Subject"
                        stateKey="subject"
                        dropdownKey="subject"
                      />
                    </div>
                  </div>
                  <div className="col s6">
                    <div className="input-field">
                      <Dropdown
                        value={getValueFromState(type, typeOptions)}
                        onChange={(event) => this.handleDetailsChange(event, 'type')}
                        options={typeOptions}
                        label="Type"
                        stateKey="type"
                        dropdownKey="type"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-0">
                  <div className="col s6">
                    <div className="input-field">
                      <Dropdown
                        value={getValueFromState(difficulty, difficultyOptions)}
                        onChange={(event) => this.handleDetailsChange(event, 'difficulty')}
                        options={difficultyOptions}
                        label="Difficulty"
                        stateKey="difficulty"
                        dropdownKey="difficulty"
                      />
                    </div>
                  </div>
                  <div className="col s6">
                    <div className="datepicker-field input-field">
                      <i className="icon-clock2"></i>
                      <input
                        type="text"
                        className="timepicker"
                        id="detail_estimated_time"
                        value={estimatedTime}
                        onChange={(event) => this.handleDetailsChange(event, 'estimatedTime')}
                      />
                      <label className="label" htmlFor="detail_estimated_time">Estimated Time</label>
                    </div>
                  </div>
                </div>
                <div className="row mb-0">
                  <div className="col s12">
                    <Select
                      options={this.getSectionDropdownOptions()}
                      isMulti
                      instanceId="categories-select"
                      onChange={this.handleCategoryChange}
                      components={{ Control: ControlComponent, MultiValueLabel }}
                      name="categoryOptions"
                      className={(categoriesValid) || (!categoriesValid && categories.length) ? '' : 'invalid'}
                      classNamePrefix="multi-select"
                      placeholder={'Select one or more categories'}
                      styles={categoryStyles}
                      isClearable={false}
                      label="Categories"
                    />
                  </div>
                </div>
                <div className="row mb-0">
                  <div className="col s12">
                    <div className="input-field">
                      <textarea
                        id="detail_description"
                        className="materialize-textarea"
                        style={{ height: '70px' }}
                        value={description}
                        onChange={(event) => this.handleDetailsChange(event, 'description')}
                      />
                      <label className="label" htmlFor="detail_description">Description (optional)</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

WorksheetDetails.propTypes = {
  worksheet: PropTypes.object,
};

export default WorksheetDetails;
