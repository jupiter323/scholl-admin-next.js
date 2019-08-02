/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';

import Dropdown from '../../../../FormComponents/Dropdown';
import getValueFromState from '../../../../utils/getValueFromState';
import sampleTopics from '../../../../utils/sampleTopics';
import worksheetSortOptions from '../../../../../utils/worksheetSortOptions';

class FilterSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      worksheetName: '',
      topic: {},
      sort: {},
      activeFilters: [],
    };
  }

  onToggleShowFilters = () => this.setState(({ open }) => ({ open: !open }))
  onClearFilters = () => this.setState({ activeFilters: [] })

  handleFilterClick = (filter) => {
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

  // eslint-disable-next-line consistent-return
  handleFilterChange = (event, name) => {
    const { onSetFilteredTopicState, onUnsetFilteredTopicState, onSetSort } = this.props;
    const value = event.target ? event.target.value : event;
    const updatedState = update(this.state, {
      $merge: { [name]: value },
    });
    this.setState(updatedState);
    if (name === 'topic') {
      if (event === '') {
        return onUnsetFilteredTopicState();
      }
      return onSetFilteredTopicState(event);
    } else if (name === 'sort') {
      return onSetSort(event);
    }
  }

  // Strips the entered name of any spaces and capitalizing and fires off the ListPage event that filters the instructors
  submitNameFilter = () => {
    const { onSetFilteredState, onUnsetFilteredState } = this.props;
    const { worksheetName } = this.state;
    if (worksheetName === '') {
      onUnsetFilteredState();
    }
    const transformedName = worksheetName.replace(/\s/g, "").toLowerCase();
    onSetFilteredState(transformedName);
  }

  render() {
    const { open, activeFilters, worksheetName, topic, sort } = this.state;
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
                      onChange={() => this.handleFilterClick('reading')}
                    />
                    <label htmlFor="reading">Reading</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="writing"
                      checked={activeFilters.indexOf('writing') !== -1}
                      onChange={() => this.handleFilterClick('writing')}
                    />
                    <label htmlFor="writing">Writing</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="math"
                      checked={activeFilters.indexOf('math') !== -1}
                      onChange={() => this.handleFilterClick('math')}
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
                      onChange={() => this.handleFilterClick('beginning')}
                    />
                    <label htmlFor="beginning">Beginning</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="developing"
                      checked={activeFilters.indexOf('developing') !== -1}
                      onChange={() => this.handleFilterClick('developing')}
                    />
                    <label htmlFor="developing">Developing</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="accomplished"
                      checked={activeFilters.indexOf('accomplished') !== -1}
                      onChange={() => this.handleFilterClick('accomplished')}
                    />
                    <label htmlFor="accomplished">Accomplished</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="exemplary"
                      checked={activeFilters.indexOf('exemplary') !== -1}
                      onChange={() => this.handleFilterClick('exemplary')}
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
                      onChange={() => this.handleFilterClick('unassigned')}
                    />
                    <label htmlFor="unassigned">Unassigned</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="complete"
                      checked={activeFilters.indexOf('complete') !== -1}
                      onChange={() => this.handleFilterClick('complete')}
                    />
                    <label htmlFor="complete">Complete</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="incomplete"
                      checked={activeFilters.indexOf('incomplete') !== -1}
                      onChange={() => this.handleFilterClick('incomplete')}
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
                      onChange={() => this.handleFilterClick('hasReviewFlags')}
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
                      onChange={() => this.handleFilterClick('dueToday')}
                    />
                    <label htmlFor="dueToday">Due Today</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="dueNextSession"
                      checked={activeFilters.indexOf('dueNextSession') !== -1}
                      onChange={() => this.handleFilterClick('dueNextSession')}
                    />
                    <label htmlFor="dueNextSession">Due By Next Session</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="dueThisWeek"
                      checked={activeFilters.indexOf('dueThisWeek') !== -1}
                      onChange={() => this.handleFilterClick('dueThisWeek')}
                    />
                    <label htmlFor="dueThisWeek">Due this Week</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="overdue"
                      checked={activeFilters.indexOf('overdue') !== -1}
                      onChange={() => this.handleFilterClick('overdue')}
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
                      onChange={() => this.handleFilterClick('class')}
                    />
                    <label htmlFor="some-class">Some Class</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="tutoring"
                      checked={activeFilters.indexOf('tutoring') !== -1}
                      onChange={() => this.handleFilterClick('tutoring')}
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
                      value={worksheetName}
                      className="input-control validate"
                      onChange={(event) => this.handleFilterChange(event, 'worksheetName')}
                    />
                    <button
                      type="submit"
                      className="search-button"
                      onClick={this.submitNameFilter}
                    >
                      <i className="icon-search"></i>
                    </button>
                    <label className={worksheetName.length ? 'label active' : 'label'} htmlFor="name_search">Search</label>
                  </div>
                </div>
                <div className="col s12 m3">
                  <div className="input-field">
                    <Dropdown
                      value={getValueFromState(topic, sampleTopics)}
                      onChange={(event) => this.handleFilterChange(event, 'topic')}
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
                    <div className="input-field">
                      <Dropdown
                        value={getValueFromState(sort, worksheetSortOptions)}
                        onChange={(event) => this.handleFilterChange(event, 'sort')}
                        options={worksheetSortOptions}
                        label="Sort By"
                        stateKey="sort"
                        dropdownKey="sort"
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
  onSetSort: PropTypes.func.isRequired,
  onSetFilteredTopicState: PropTypes.func.isRequired,
  onUnsetFilteredTopicState: PropTypes.func.isRequired,
  onSetFilteredState: PropTypes.func.isRequired,
  onUnsetFilteredState: PropTypes.func.isRequired,
}

export default FilterSection;
