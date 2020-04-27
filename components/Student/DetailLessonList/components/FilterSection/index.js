/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import update from 'immutability-helper';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Dropdown from '../../../../FormComponents/Dropdown';
import getValueFromState from '../../../../utils/getValueFromState';
import lessonSortOptions from '../../utils/lessonSortOptions';
import { makeSelectUnitFilterOptions } from '../../../index/selectors';
import { setUnitFilterOptions, fetchUnits, fetchSubjects } from '../../../index/actions';

class FilterSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      sort: {},
      nameFilter: "",
      unitFilter: "",
      unitOptions: [{
        label: "Any",
        value: "",
      }],
    };
  }

  componentDidMount = () => {
    const { onFetchUnits, onFetchSubjects } = this.props;
    onFetchUnits();
    onFetchSubjects();
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.unitOptions.length !== 0) {
      const { unitOptions: newOptions } = nextProps;
      this.setState({
        unitOptions: this.state.unitOptions.concat(newOptions),
      });
    }
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
    const { currentView, dueDateFilters, flagFilters, subjectFilters, scoreStatusFilters, onChangeView, handleFilterClick } = this.props;
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
                      checked={subjectFilters.indexOf('Writing and Language') !== -1}
                      onChange={() => handleFilterClick("subject", 'Writing and Language')}
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
                      id="great"
                      checked={scoreStatusFilters.indexOf('great') !== -1}
                      onChange={() => handleFilterClick("score", 'great')}
                    />
                    <label htmlFor="great">Great</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="aboveAverage"
                      checked={scoreStatusFilters.indexOf('aboveAverage') !== -1}
                      onChange={() => handleFilterClick("score", 'aboveAverage')}
                    />
                    <label htmlFor="aboveAverage">Above Average</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="belowAverage"
                      checked={scoreStatusFilters.indexOf('belowAverage') !== -1}
                      onChange={() => handleFilterClick("score", 'belowAverage')}
                    />
                    <label htmlFor="belowAverage">Below Average</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="poor"
                      checked={scoreStatusFilters.indexOf('poor') !== -1}
                      onChange={() => handleFilterClick("score", 'poor')}
                    />
                    <label htmlFor="poor">Poor</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                      type="checkbox"
                      id="hasReviewFlags"
                      checked={flagFilters.indexOf("true") !== -1}
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
                      id="overdue"
                      checked={dueDateFilters.indexOf('overdue') !== -1}
                      onChange={() => handleFilterClick('dueDate', 'overdue')}
                    />
                    <label htmlFor="overdue">Overdue</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="noDueDate"
                      checked={dueDateFilters.indexOf('noDueDate') !== -1}
                      onChange={() => handleFilterClick('dueDate', 'noDueDate')}
                    />
                    <label htmlFor="noDueDate">noDueDate</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="unAssigned"
                      checked={dueDateFilters.indexOf('unAssigned') !== -1}
                      onChange={() => handleFilterClick('dueDate', 'unAssigned')}
                    />
                    <label htmlFor="unAssigned">UnAssigned</label>
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
                      value={getValueFromState(unitFilter, this.state.unitOptions)}
                      onChange={(event) => this.handleUnitChange(event)}
                      options={this.state.unitOptions}
                      label="Unit"
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

                  <div className="col s12 m12">
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
                      {/* @TODO student lesson listview commented out for now */}
                      {/* <a href="#" onClick={() => onChangeView('list')}>List View</a> */}
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
  scoreStatusFilters: PropTypes.array.isRequired,
  flagFilters: PropTypes.array.isRequired,
  dueDateFilters: PropTypes.array.isRequired,
  onSetUnitFilter: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  unitOptions: makeSelectUnitFilterOptions(),
});

const mapDispatchToProps = dispatch => ({
  onSetUnitFilterOptions: options => dispatch(setUnitFilterOptions(options)),
  onFetchUnits: () => dispatch(fetchUnits()),
  onFetchSubjects: () => dispatch(fetchSubjects()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(FilterSection);
