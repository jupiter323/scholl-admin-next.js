/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import update from 'immutability-helper';
import PropTypes from 'prop-types';
import Dropdown from '../../../../FormComponents/Dropdown';
import getValueFromState from '../../../../utils/getValueFromState';
import lessonSortOptions from '../../utils/lessonSortOptions';
import unitOptions from '../../utils/unitOptions';

class FilterSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      sort: {},
      nameFilter: "",
      unitFilter: "",
    };
  }

  onToggleShowFilters = () => this.setState(({ open }) => ({ open: !open }))
  handleSortChange = (event) => {
    const { onSetSort } = this.props;
    this.setState({ sort: event });
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
    this.setState({ unitFilter: event });
    onSetUnitFilter(event);
  }

  clearAllFilters = () => {
    const { onClearFilters } = this.props;
    this.setState({ sort: {}, nameFilter: "", unitFilter: "" });
    onClearFilters();
  }
  // eslint-disable-next-line consistent-return
  handleFilterChange = (event, name) => {
    const { onUnsetFilteredState, onSetFilteredState, onSetUnitFilter } = this.props;
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
    const { currentView, dueDateFilters, flagFilters, subjectFilters, statusFilters, scoreStatusFilters, classTypeFilters, onChangeView, handleFilterClick } = this.props;
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
                      id="reading"
                      checked={subjectFilters.indexOf('Reading') !== -1}
                      onChange={() => handleFilterClick("subject", 'Reading')}
                    />
                    <label htmlFor="reading">Reading</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="writing"
                      checked={subjectFilters.indexOf('Writing') !== -1}
                      onChange={() => handleFilterClick("subject", 'Writing')}
                    />
                    <label htmlFor="writing">Writing</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="math"
                      checked={subjectFilters.indexOf('Math') !== -1}
                      onChange={() => handleFilterClick("subject", 'Math')}
                    />
                    <label htmlFor="math">Math</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                      type="checkbox"
                      id="beginning"
                      checked={scoreStatusFilters.indexOf('Beginning') !== -1}
                      onChange={() => handleFilterClick("score", 'Beginning')}
                    />
                    <label htmlFor="beginning">Beginning</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="developing"
                      checked={scoreStatusFilters.indexOf('Developing') !== -1}
                      onChange={() => handleFilterClick("score", 'Developing')}
                    />
                    <label htmlFor="developing">Developing</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="accomplished"
                      checked={scoreStatusFilters.indexOf('Accomplished') !== -1}
                      onChange={() => handleFilterClick("score", 'Accomplished')}
                    />
                    <label htmlFor="accomplished">Accomplished</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="exemplary"
                      checked={scoreStatusFilters.indexOf('Exemplary') !== -1}
                      onChange={() => handleFilterClick("score", 'Exemplary')}
                    />
                    <label htmlFor="exemplary">Exemplary</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                      type="checkbox"
                      id="scheduled"
                      checked={statusFilters.indexOf('Scheduled') !== -1}
                      onChange={() => handleFilterClick('status', 'Scheduled')}
                    />
                    <label htmlFor="scheduled">Scheduled</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="assigned"
                      checked={statusFilters.indexOf('Assigned') !== -1}
                      onChange={() => handleFilterClick('status', 'Assigned')}
                    />
                    <label htmlFor="assigned">Assigned</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="started"
                      checked={statusFilters.indexOf('Started') !== -1}
                      onChange={() => handleFilterClick('status', 'Started')}
                    />
                    <label htmlFor="started">Started</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="complete"
                      checked={statusFilters.indexOf('Complete') !== -1}
                      onChange={() => handleFilterClick('status', 'Complete')}
                    />
                    <label htmlFor="complete">Complete</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                      type="checkbox"
                      id="hasReviewFlags"
                      checked={flagFilters.indexOf("flags") !== -1}
                      onChange={() => handleFilterClick('flags', 'true')}
                    />
                    <label htmlFor="hasReviewFlags">Has Review Flags</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                      type="checkbox"
                      id="dueToday"
                      checked={dueDateFilters.indexOf('dueToday') !== -1}
                      onChange={() => handleFilterClick('dueDate', 'dueToday')}
                    />
                    <label htmlFor="dueToday">Due Today</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="dueNextSession"
                      checked={dueDateFilters.indexOf('dueNextSession') !== -1}
                      onChange={() => handleFilterClick('dueDate', 'dueNextSession')}
                    />
                    <label htmlFor="dueNextSession">Due By Next Session</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="dueThisWeek"
                      checked={dueDateFilters.indexOf('dueThisWeek') !== -1}
                      onChange={() => handleFilterClick('dueDate', 'dueThisWeek')}
                    />
                    <label htmlFor="dueThisWeek">Due this Week</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="overdue"
                      checked={dueDateFilters.indexOf('overdue') !== -1}
                      onChange={() => handleFilterClick('dueDate', 'overdue')}
                    />
                    <label htmlFor="overdue">Overdue</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                      type="checkbox"
                      id="some-class"
                      checked={classTypeFilters.indexOf('class') !== -1}
                      onChange={() => handleFilterClick('classType', 'class')}
                    />
                    <label htmlFor="some-class">Some Class</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="tutoring"
                      checked={classTypeFilters.indexOf('tutoring') !== -1}
                      onChange={() => handleFilterClick('classType', 'tutoring')}
                    />
                    <label htmlFor="tutoring">Tutoring</label>
                  </li>
                </ul>
              </div>
              <div className="d-flex row mb-0 justify-center">
                <div className="col s12 m3">
                  <div className="search-field input-field" style={{ marginTop: '30px' }}>
                    <input
                      type="search"
                      id="name_search"
                      className="input-control  validate"
                      name="nameFilter"
                      value={nameFilter}
                      onChange={(event) => this.handleFilterChange(event, 'nameFilter')}
                    />
                    <button
                      type="submit"
                      className="search-button"
                      onClick={this.submitNameFilter}
                    ><i className="icon-search"></i></button>
                    <label className={nameFilter.length ? "label active" : "label"} htmlFor="name_search">Search</label>
                  </div>
                </div>
                <div className="col s12 m3">
                  <div className="input-field" style={{ marginTop: '-7px' }}>
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

                  <div className="col s12 x17">
                    <div className="input-field">
                      <Dropdown
                        value={getValueFromState(sort, lessonSortOptions)}
                        onChange={(event) => this.handleSortChange(event)}
                        options={lessonSortOptions}
                        label="Sort by"
                        stateKey="sort"
                        dropdownKey="sort"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="switcher-block col s12 l4" style={{ marginTop: '14px' }}>
                <div className="view-switcher">
                  <ul className="switcher center-align">
                    <li
                      data-view="view-full"
                      className={currentView === 'full' ? 'active' : ""}
                    >
                      <a href="#" onClick={() => onChangeView('full')}>Full View</a>
                    </li>
                    <li
                      data-view="view-list"
                      className={currentView === 'list' ? 'active' : ''}
                    >
                      <a href="#" onClick={() => onChangeView('list')}>List View</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col s12 l4">
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
    );
  }
}

FilterSection.propTypes = {
  currentView: PropTypes.string.isRequired,
  onChangeView: PropTypes.func.isRequired,
  handleFilterClick: PropTypes.func.isRequired,
  onClearFilters: PropTypes.func.isRequired,
  onSetFilteredState: PropTypes.func.isRequired,
  onUnsetFilteredState: PropTypes.func.isRequired,
  onSetSort: PropTypes.func.isRequired,
  subjectFilters: PropTypes.array.isRequired,
  statusFilters: PropTypes.array.isRequired,
  scoreStatusFilters: PropTypes.array.isRequired,
  flagFilters: PropTypes.array.isRequired,
  dueDateFilters: PropTypes.array.isRequired,
  classTypeFilters: PropTypes.array.isRequired,
  onSetUnitFilter: PropTypes.func.isRequired,
};
export default FilterSection;
