/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from '../../../FormComponents/Dropdown';
import getValueFromState from '../../../utils/getValueFromState';

import sortOptions from '../../utils/sortOptions';

class FilterSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      title: '',
      sort: '',
    };
  }

  onToggleShowFilters = () => this.setState(({ open }) => ({ open: !open }))
  onClearFilters = () => this.setState({ title: '', sort: '' }, this.props.onClearFilters)

  // Strips the entered name of any spaces and capitalizing and fires off the TemplateList event that filters the instructors
  submitNameFilter = () => {
    const { onSetFilteredState, onUnsetFilteredState } = this.props;
    const { title } = this.state;
    if (title === '') {
      onUnsetFilteredState();
    }
    const transformedTitle = title.replace(/\s/g, "").toLowerCase();
    onSetFilteredState(transformedTitle);
  }

  render() {
    const { sort, open } = this.state;
    const { onClearFilters } = this.props;
    return (
      <div className="filter-form-holder">
        <ul className="collapsible expandable" style={{ minHeight: '0' }}>
          <li>
            <div className="collapsible-body" style={open ? { display: 'block' } : { display: 'none' }}>
              <div className="filter-form_checkbox-list-holder justify-center">
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input type="checkbox" id="reading" />
                    <label htmlFor="reading">Reading</label>
                  </li>
                  <li>
                    <input type="checkbox" id="writing" />
                    <label htmlFor="writing">Writing</label>
                  </li>
                  <li>
                    <input type="checkbox" id="math" />
                    <label htmlFor="math">Math</label>
                  </li>
                  <li>
                    <input type="checkbox" id="all" />
                    <label htmlFor="all">All</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input type="checkbox" id="built_in" />
                    <label htmlFor="built_in">Built-In</label>
                  </li>
                  <li>
                    <input type="checkbox" id="user_created" />
                    <label htmlFor="user_created">User Created</label>
                  </li>
                </ul>
              </div>
              <div className="d-flex row mb-0 justify-center">
                <div className="col s12 m3">
                  <div className="search-field input-field">
                    <input type="search" id="course_search" className="input-control  validate" />
                    <button type="submit" className="search-button"><i className="icon-search"></i></button>
                    <label className="label" htmlFor="course_search">Search</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-0 d-flex align-items-center">
              <div className="col s12 l4">
                <div className="row mb-0">
                  <div className="col s12 xl7">
                    <div className="input-field" style={{ marginBottom: '0', marginTop: '0' }}>
                      <Dropdown
                        value={getValueFromState(sort, sortOptions)}
                        onChange={(event) => this.handleFilterChange(event, 'sort')}
                        options={sortOptions}
                        label="Sort By"
                        stateKey="topic"
                        dropdownKey="topic"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12 l4 hide-on-med-and-down show-on-large">&nbsp;</div>
              <div className="col s12 l4">
                <div className="option-filters">
                  <div className="option-item clear"><a href="#" onClick={onClearFilters}>Clear Filters</a></div>
                  <div className="option-item">
                    <span className="collapsible-header" onClick={this.onToggleShowFilters}>
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
  onClearFilters: PropTypes.func.isRequired,
  onSetFilteredState: PropTypes.func.isRequired,
  onUnsetFilteredState: PropTypes.func.isRequired,
}

export default FilterSection;
