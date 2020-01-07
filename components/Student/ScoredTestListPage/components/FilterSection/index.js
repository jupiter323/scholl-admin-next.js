/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from '../../../../FormComponents/Dropdown';
import getValueFromState from '../../../../utils/getValueFromState';
import sortByOptions from '../../../utils';

class FilterSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      testVersionFilter: '',
    };
  }

  onToggleShowFilters = () => this.setState(({ open }) => ({ open: !open }))

  onClearFilters = () => this.setState({ testVersionFilter: '' }, this.props.onClearFilters)

  handleSearchChange = ({ target }) => this.setState({ testVersionFilter: target.value })

  submitSearchFilter = () => {
    const { onSetFilteredState, onUnsetFilteredState } = this.props;
    const { testVersionFilter } = this.state;
    if (testVersionFilter === '') {
      onUnsetFilteredState();
    }
    const transformedTitle = testVersionFilter.replace(/\s/g, "").toLowerCase();
    onSetFilteredState(transformedTitle);
  }

  render() {
    const { open, testVersionFilter } = this.state;
    const { handleFilterClick, sort, onSetSort, flagFilter, availableDateFilters, dueDateFilters } = this.props;
    return (
      <div className="filter-form-holder">
        <ul className="collapsible expandable" style={{ minHeight: '0' }}>
          <li>
            <div className="collapsible-body" style={open ? { display: 'block' } : { display: 'none' }}>
              <div className="filter-form_checkbox-list-holder justify-center">
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                      type="checkbox"
                      id="future"
                      name="future"
                      checked={availableDateFilters.indexOf('future') !== -1}
                      onChange={({ target }) => handleFilterClick('availableDate', target.name)}
                    />
                    <label htmlFor="future">Future</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="available"
                      name="available"
                      checked={availableDateFilters.indexOf('available') !== -1}
                      onChange={({ target }) => handleFilterClick('availableDate', target.name)}
                    />
                    <label htmlFor="available">Available</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="complete"
                      name="complete"
                      checked={availableDateFilters.indexOf('complete') !== -1}
                      onChange={({ target }) => handleFilterClick('availableDate', target.name)}
                    />
                    <label htmlFor="complete">Complete</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                      type="checkbox"
                      id="hasReviewFlags"
                      name="hasReviewFlags"
                      checked={flagFilter}
                      onChange={({ target }) => handleFilterClick('hasFlags', target.name)}
                    />
                    <label htmlFor="hasReviewFlags">Has Review Flags</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                      type="checkbox"
                      id="dueToday"
                      name="dueToday"
                      checked={dueDateFilters.indexOf('dueToday') !== -1}
                      onChange={({ target }) => handleFilterClick('dueDate', target.name)}
                    />
                    <label htmlFor="dueToday">Due Today</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="dueNextSession"
                      name="dueNextSession"
                      checked={dueDateFilters.indexOf('dueNextSession') !== -1}
                      onChange={({ target }) => handleFilterClick('dueDate', target.name)}
                    />
                    <label htmlFor="dueNextSession">Due By Next Session</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="dueThisWeek"
                      name="dueThisWeek"
                      checked={dueDateFilters.indexOf('dueThisWeek') !== -1}
                      onChange={({ target }) => handleFilterClick('dueDate', target.name)}
                    />
                    <label htmlFor="dueThisWeek">Due this Week</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="overdue"
                      name="overdue"
                      checked={dueDateFilters.indexOf('overdue') !== -1}
                      onChange={({ target }) => handleFilterClick('dueDate', target.name)}
                    />
                    <label htmlFor="overdue">Overdue</label>
                  </li>
                </ul>
              </div>
              <div className="d-flex row mb-0 justify-center">
                <div className="col s12 m4">
                  <div className="search-field input-field">
                    <input
                      type="search"
                      id="test_version_search"
                      className="input-control validate"
                      value={testVersionFilter}
                      onChange={this.handleSearchChange}
                    />
                    <button type="submit" onClick={this.submitSearchFilter} className="search-button"><i className="icon-search"></i></button>
                    <label className="label" htmlFor="test_version_search">Test Version</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-0 d-flex align-items-center">
              <div className="col s12 l4">
                <div className="row mb-0">
                  <div className="col s12 xl7">
                    <div className="input-field" style={{ marginBottom: '10px', marginTop: '0' }}>
                      <Dropdown
                        value={getValueFromState(sort, sortByOptions)}
                        onChange={onSetSort}
                        options={sortByOptions}
                        label="Sort By"
                        stateKey="sort"
                        dropdownKey="sort"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12 l4 hide-on-med-and-down show-on-large">&nbsp;</div>
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
  sort: PropTypes.string.isRequired,
  onSetSort: PropTypes.func.isRequired,
  flagFilter: PropTypes.bool.isRequired,
  onClearFilters: PropTypes.func.isRequired,
  dueDateFilters: PropTypes.array.isRequired,
  handleFilterClick: PropTypes.func.isRequired,
  onSetFilteredState: PropTypes.func.isRequired,
  onUnsetFilteredState: PropTypes.func.isRequired,
  availableDateFilters: PropTypes.array.isRequired,
};

export default FilterSection;
