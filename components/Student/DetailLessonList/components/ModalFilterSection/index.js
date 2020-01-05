/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import update from 'immutability-helper';
import PropTypes from 'prop-types';
import Dropdown from '../../../../FormComponents/Dropdown';
import getValueFromState from '../../../../utils/getValueFromState';
import lessonSortOptions from '../../utils/lessonSortOptions';
import unitOptions from '../../utils/unitOptions';
import modalSortOptions from '../../utils/modalSortOptions';

class ModalFilterSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      sort: {},
      nameFilter: "",
      unitFilter: "",
    }
  }

  onToggleShowFilters = () => this.setState(({ open }) => ({ open: !open }))
  handleSortChange = (event) => {
    const {onSetSort} = this.props;
    this.setState({sort: event});
    onSetSort(event);
  }

  submitNameFilter = () => {
    const { onSetFilteredState, onUnsetFilteredState } = this.props;
    const { nameFilter } = this.state;
    if (nameFilter === '') {
      onUnsetFilteredState(nameFilter);
    }
    const transformedName = nameFilter.replace(/\s/g, "").toLowerCase();
    onSetFilteredState(transformedName);
  }

  handleUnitChange = (event) => {
    const { onSetUnitFilter } = this.props;
    this.setState({unitFilter: event});
    onSetUnitFilter(event);
  }

  clearAllFilters = () => {
    const { onClearFilters } = this.props;
    this.setState({sort: {}, nameFilter: "", unitFilter: ""})
    onClearFilters()
  }
  handleFilterChange = (event, name) => {
    const { onUnsetFilteredState, onSetFilteredState, onSetUnitFilter} = this.props;
    const value = event.target ? event.target.value : event;
    const updatedState = update(this.state, {
      $merge: { [name]: value },
    });
    this.setState(updatedState);
    if (name === 'nameFilter') {
      if (event === '') {
        return onUnsetFilteredState();
      }
      return onSetFilteredState(event);
    }
    if (name === 'unitFilter') {
      if (event === "") {
        return onUnsetFilteredState();
      }
      return onSetUnitFilter(event);
    }
  }
  render() {
    const { open, sort, nameFilter, unitFilter } = this.state;
    const { subjectFilters, statusFilters, lessonTypeFilters, handleFilterClick } = this.props;
    return (
      <div className="filter-form-holder">
        <ul className="collapsible expandable">
          <li>
            <div className="collapsible-body" style={open ? { display: 'block' } : { display: 'none' }}>
              <div className="filter-form_checkbox-list-holder justify-center">
              <ul className="filter-form_checkbox-list">
              <li>
                    <input
                      type="checkbox"
                      id="assignedModal"
                      checked={statusFilters.indexOf('Assigned') !== -1}
                      onChange={() => handleFilterClick('status', 'Assigned')}
                    />
                    <label htmlFor="assignedModal">Assigned</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="unassigned"
                      checked={statusFilters.indexOf('Unassigned') !== -1}
                      onChange={() => handleFilterClick('status', 'Unassigned')}
                    />
                    <label htmlFor="unassigned">Unassigned</label>
                  </li>
                </ul>
                <ul className='filter-form_checkbox-list'>
                  <li>
                    <input
                      type="checkbox"
                      id="readingModal"
                      checked={subjectFilters.indexOf('Reading') !== -1}
                      onChange={() => handleFilterClick('subject', 'Reading')}
                    />
                    <label htmlFor="readingModal">Reading</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="writingModal"
                      checked={subjectFilters.indexOf('Writing') !== -1}
                      onChange={() => handleFilterClick('subject', 'Writing')}
                    />
                    <label htmlFor="writingModal">Writing</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="mathModal"
                      checked={subjectFilters.indexOf('Math') !== -1}
                      onChange={() => handleFilterClick('subject', 'Math')}
                    />
                    <label htmlFor="mathModal">Math</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                      type="checkbox"
                      id="challengePractice"
                      checked={lessonTypeFilters.indexOf('Challenge + Practice') !== -1}
                      onChange={() => handleFilterClick('lessonType', 'Challenge + Practice')}
                    />
                    <label htmlFor="challengePractice">Challenge + Practice</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="homeworkDrill"
                      checked={lessonTypeFilters.indexOf('Homework Drill') !== -1}
                      onChange={() => handleFilterClick('lessonType', 'Homework Drill')}
                    />
                    <label htmlFor="homeworkDrill">Homework Drill</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="readingFromWorkbook"
                      checked={lessonTypeFilters.indexOf('Read from the Book') !== -1}
                      onChange={() => handleFilterClick('lessonType', 'Read from the Book')}
                    />
                    <label htmlFor="readingFromWorkbook">Reading from Workbook</label>
                  </li>

                </ul>
              </div>
            <div className="d-flex row mb-0 justify-center">
              <div className="col s12 m3">
                    <div className="search-field input-field" style={{marginTop: '30px'}}>
                      <input
                      type="search"
                      id="name_search"
                      className="input-control  validate"
                      name="nameFilter"
                      value={nameFilter}
                      onChange={(event) =>  this.handleFilterChange(event, 'nameFilter')}
                      />
                      <button
                      type="submit"
                      className="search-button"
                      onClick={this.submitNameFilter}><i className="icon-search"></i></button>
                      <label className={nameFilter.length ? "label active" : "label"} htmlFor="name_search">Search</label>
                    </div>
              </div>
            <div className="col s12 m3">
              <div className="input-field" style={{marginTop: '-7px'}}>
                <Dropdown
                value={getValueFromState(unitFilter, unitOptions)}
                onChange={(event) => this.handleUnitChange(event)}
                options={unitOptions}
                label="Unit Number"
                stateKey="unit"
                dropdownKey="unit"
                />
              </div>
            </div>

            </div>
            </div>

            <div className="row mb-0 d-flex align-items-center">
              <div className="col s12 l4">
                <div className="row mb-0">

                  <div className="col s12 14">
                   <div className="input-field"  >
                      <Dropdown
                        value={getValueFromState(sort, modalSortOptions)}
                        onChange={(event) => this.handleSortChange(event)}
                        options={modalSortOptions}
                        label="Sort by"
                        stateKey="sort"
                        dropdownKey="sort"
                        />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12 l4 offset-s12">
                <div className="option-filters">
                  <div className="option-item clear"><a href="#" onClick={this.clearAllFilters}>Clear Filters</a></div>
                  <div className="option-item">
                    <span
                      className="collapsible-header"
                      onClick={this.onToggleShowFilters}
                    >
                      <span className="open-text">{open ? 'Hide Filters' : 'Open Filters'}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

ModalFilterSection.propTypes = {
  handleFilterClick: PropTypes.func.isRequired,
  onClearFilters: PropTypes.func.isRequired,
  onSetFilteredState: PropTypes.func.isRequired,
  onUnsetFilteredState: PropTypes.func.isRequired,
  onSetSort: PropTypes.func.isRequired,
  subjectFilters: PropTypes.array.isRequired,
  statusFilters: PropTypes.array.isRequired,
  lessonTypeFilters: PropTypes.array.isRequired,
  onSetUnitFilter: PropTypes.func.isRequired,
}
export default ModalFilterSection;
