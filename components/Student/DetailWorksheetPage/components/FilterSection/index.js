/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-control-statements/jsx-jcs-no-undef */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';

import Dropdown from '../../../../FormComponents/Dropdown';
import getValueFromState from '../../../../utils/getValueFromState';
import sampleTopics from '../../../../utils/sampleTopics';
import worksheetSortOptions from '../../utils/worksheetSortOptions';

class FilterSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      searchTerm: '',
      topic: {},
      sortBy: {},
      activeFilters: [],
    };
  }

  onToggleShowFilters = () => this.setState(({ open }) => ({ open: !open }))

  onHandleFilterClick = (filter) => {
    const { activeFilters: currentActiveFilters } = this.state;
    let activeFilters;
    if (currentActiveFilters.indexOf(filter) === -1) {
      activeFilters = update(currentActiveFilters, {
        $push: [filter],
      });
    } else {
      const filterIndex = currentActiveFilters.indexOf(filter);
      activeFilters = update(currentActiveFilters, {
        $splice: [[ filterIndex, 1 ]],
      });
    }
    this.setState({ activeFilters });
  }

  onClearFilters = () => this.setState({ activeFilters: [] })

  handleSearchChange = (event) => this.setState({ searchTerm: event.target.value })

  handleDetailsChange = (event, name) => {
    const value = event.target ? event.target.value : event;
    const updatedState = update(this.state, {
      $merge: { [name]: value },
    });
    this.setState(updatedState);
  }

  render() {
    const { open, activeFilters, searchTerm, topic, sortBy } = this.state;
    const { currentView, onChangeView } = this.props;
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
                      checked={activeFilters.indexOf('reading') !== -1}
                      onChange={() => this.onHandleFilterClick('reading')}
                    />
                    <label htmlFor="reading">Reading</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="writing"
                      checked={activeFilters.indexOf('writing') !== -1}
                      onChange={() => this.onHandleFilterClick('writing')}
                    />
                    <label htmlFor="writing">Writing</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="math"
                      checked={activeFilters.indexOf('math') !== -1}
                      onChange={() => this.onHandleFilterClick('math')}
                    />
                    <label htmlFor="math">Math</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                      type="checkbox"
                      id="beginning"
                      checked={activeFilters.indexOf('beginning') !== -1}
                      onChange={() => this.onHandleFilterClick('beginning')}
                    />
                    <label htmlFor="beginning">Beginning</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="developing"
                      checked={activeFilters.indexOf('developing') !== -1}
                      onChange={() => this.onHandleFilterClick('developing')}
                    />
                    <label htmlFor="developing">Developing</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="accomplished"
                      checked={activeFilters.indexOf('accomplished') !== -1}
                      onChange={() => this.onHandleFilterClick('accomplished')}
                    />
                    <label htmlFor="accomplished">Accomplished</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="exemplary"
                      checked={activeFilters.indexOf('exemplary') !== -1}
                      onChange={() => this.onHandleFilterClick('exemplary')}
                    />
                    <label htmlFor="exemplary">Exemplary</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                      type="checkbox"
                      id="unassigned"
                      checked={activeFilters.indexOf('unassigned') !== -1}
                      onChange={() => this.onHandleFilterClick('unassigned')}
                    />
                    <label htmlFor="unassigned">Unassigned</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="complete"
                      checked={activeFilters.indexOf('complete') !== -1}
                      onChange={() => this.onHandleFilterClick('complete')}
                    />
                    <label htmlFor="complete">Complete</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="incomplete"
                      checked={activeFilters.indexOf('incomplete') !== -1}
                      onChange={() => this.onHandleFilterClick('incomplete')}
                    />
                    <label htmlFor="incomplete">Incomplete</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                      type="checkbox"
                      id="hasReviewFlags"
                      checked={activeFilters.indexOf('hasReviewFlags') !== -1}
                      onChange={() => this.onHandleFilterClick('hasReviewFlags')}
                    />
                    <label htmlFor="hasReviewFlags">Has Review Flags</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                      type="checkbox"
                      id="dueToday"
                      checked={activeFilters.indexOf('dueToday') !== -1}
                      onChange={() => this.onHandleFilterClick('dueToday')}
                    />
                    <label htmlFor="dueToday">Due Today</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="dueNextSession"
                      checked={activeFilters.indexOf('dueNextSession') !== -1}
                      onChange={() => this.onHandleFilterClick('dueNextSession')}
                    />
                    <label htmlFor="dueNextSession">Due By Next Session</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="dueThisWeek"
                      checked={activeFilters.indexOf('dueThisWeek') !== -1}
                      onChange={() => this.onHandleFilterClick('dueThisWeek')}
                    />
                    <label htmlFor="dueThisWeek">Due this Week</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="overdue"
                      checked={activeFilters.indexOf('overdue') !== -1}
                      onChange={() => this.onHandleFilterClick('overdue')}
                    />
                    <label htmlFor="overdue">Overdue</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                      type="checkbox"
                      id="some-class"
                      checked={activeFilters.indexOf('class') !== -1}
                      onChange={() => this.onHandleFilterClick('class')}
                    />
                    <label htmlFor="some-class">Some Class</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="tutoring"
                      checked={activeFilters.indexOf('tutoring') !== -1}
                      onChange={() => this.onHandleFilterClick('tutoring')}
                    />
                    <label htmlFor="tutoring">Tutoring</label>
                  </li>
                </ul>
              </div>
              <div className="d-flex row mb-0 justify-center">
                <div className="col s12 m3">
                  <div className="search-field input-field">
                    <input
                      type="search"
                      id="name_search"
                      value={searchTerm}
                      className="input-control validate"
                      onChange={this.handleSearchChange}
                    />
                    <button type="submit" className="search-button"><i className="icon-search"></i></button>
                    <label className={searchTerm.length ? 'label active' : 'label'} htmlFor="name_search">Search</label>
                  </div>
                </div>
                <div className="col s12 m3">
                  <div className="input-field">
                    <Dropdown
                      value={getValueFromState(topic, sampleTopics)}
                      onChange={(event) => this.handleDetailsChange(event, 'topic')}
                      options={sampleTopics}
                      label="Topic"
                      stateKey="topic"
                      dropdownKey="topic"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-0 d-flex align-items-center">
              <div className="col s12 l4">
                <div className="row mb-0">
                  <div className="col s12 xl7">
                    {/* <div className="input-field">
                      <select id="sort_worksheet">
                        <option>Due Date</option>
                        <option>Due Date</option>
                        <option>Due Date</option>
                      </select>
                      <label className="label" htmlFor="sort_worksheet">Sort By</label>
                    </div> */}
                    <div className="input-field">
                      <Dropdown
                        value={getValueFromState(sortBy, worksheetSortOptions)}
                        onChange={(event) => this.handleDetailsChange(event, 'sortBy')}
                        options={worksheetSortOptions}
                        label="Sort By"
                        stateKey="sortBy"
                        dropdownKey="sortBy"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="switcher-block col s12 l4">
                <div className="view-switcher">
                  <ul className="switcher center-align">
                    <li
                      data-view="view-full"
                      className={currentView === 'full' ? 'active' : ''}
                      onClick={() => onChangeView('full')}
                    >
                      <a href="#">Full View</a>
                    </li>
                    <li
                      data-view="view-list"
                      className={currentView === 'list' ? 'active' : ''}
                      onClick={() => onChangeView('list')}
                    >
                      <a href="#">List View</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col s12 l4">
                <div className="option-filters">
                  <div className="option-item clear"><a href="#" onClick={this.onClearFilters}>Clear Filters</a></div>
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
}

export default FilterSection;
