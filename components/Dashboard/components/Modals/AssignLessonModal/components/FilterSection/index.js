/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from '../../../../../../FormComponents/Dropdown';
import getValueFromState from '../../../../../../utils/getValueFromState';

const sortByOptions = [
  {
    label: 'Page Number',
    value: 'pageNumber',
  },
  {
    label: 'Problems',
    value: 'problems',
  },
  {
    label: 'Time Estimate',
    value: 'timeEstimate',
  },
  {
    label: 'Subject',
    value: 'subject',
  },
];

class FilterSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      titleFilter: '',
      unitFilter: '',
    }
  };

  onToggleShowFilters = () => this.setState(({ open }) => ({ open: !open }))

  onClearFilters = () => this.setState({ titleFilter: '', unitFilter: '' }, this.props.onClearFilters)

  handleSearchChange = ({ target }) => this.setState({ [target.name]: target.value })

  submitSearchFilter = (searchType) => {
    const { onSetFilteredState, onUnsetFilteredState } = this.props;
    if (this.state[searchType] === '') {
      onUnsetFilteredState(searchType);
    }
    const transformedTitle = this.state[searchType].replace(/\s/g, "").toLowerCase();
    onSetFilteredState(searchType, transformedTitle);
  }

  render() {
    const { handleFilterClick, subjectFilters, typeFilters, sort, onSetSort } = this.props;
    const { open, titleFilter, unitFilter } = this.state;
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
                      id="Reading"
                      name="Reading"
                      checked={subjectFilters.indexOf('Reading') !== -1}
                      onChange={({ target }) => handleFilterClick('subject', target.name)}
                    />
                    <label htmlFor="Reading">Reading</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="Writing"
                      name="Writing"
                      checked={subjectFilters.indexOf('Writing') !== -1}
                      onChange={({ target }) => handleFilterClick('subject', target.name)}
                    />
                    <label htmlFor="Writing">Writing</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="Math"
                      name="Math"
                      checked={subjectFilters.indexOf('Math') !== -1}
                      onChange={({ target }) => handleFilterClick('subject', target.name)}
                    />
                    <label htmlFor="Math">Math</label>
                  </li>
                </ul>

                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                      type="checkbox"
                      id="challenge"
                      name="challenge"
                      checked={typeFilters.indexOf('challenge') !== -1}
                      onChange={({ target }) => handleFilterClick('type', target.name)}
                    />
                    <label htmlFor="challenge">Challenge + Practice</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="homework"
                      name="homework"
                      checked={typeFilters.indexOf('homework') !== -1}
                      onChange={({ target }) => handleFilterClick('type', target.name)}
                    />
                    <label htmlFor="homework">Homework Drill</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="readingFromWorkbook"
                      name="readingFromWorkbook"
                      checked={typeFilters.indexOf('readingFromWorkbook') !== -1}
                      onChange={({ target }) => handleFilterClick('type', target.name)}
                    />
                    <label htmlFor="readingFromWorkbook">Reading from Workbook</label>
                  </li>
                </ul>
              </div>
              <div className="d-flex row mb-0 justify-center">
                <div className="col s12 m3">
                  <div className="search-field input-field">
                    <input
                      type="search"
                      id="titleFilter"
                      name="titleFilter"
                      className="input-control validate"
                      value={titleFilter}
                      onChange={this.handleSearchChange}
                    />
                    <button type="submit" onClick={() => this.submitSearchFilter('titleFilter')} className="search-button"><i className="icon-search"></i></button>
                    <label className={titleFilter.length ? 'label active' : 'label'} htmlFor="titleFilter">Search By Title</label>
                  </div>
                </div>
                <div className="col s12 m3">
                  <div className="search-field input-field">
                    <input
                      type="search"
                      id="unitFilter"
                      name="unitFilter"
                      className="input-control validate"
                      value={unitFilter}
                      onChange={this.handleSearchChange}
                    />
                    <button type="submit" onClick={() => this.submitSearchFilter('unitFilter')} className="search-button"><i className="icon-search"></i></button>
                    <label className={unitFilter.length ? 'label active' : 'label'} htmlFor="unitFilter">Search By Unit</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-0 d-flex align-items-center">
              <div className="col s12 l4">
                <div className="row mb-0">
                  <div className="col s12 m6">
                    <div className="input-field" style={{ marginBottom: '0', marginTop: '0' }}>
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
              <div className="switcher-block col s12 l4">
                <div className="view-switcher">
                  <ul className="switcher center-align">
                    <li className="active" data-view="view-full"><a href="#">Month View</a></li>
                    <li data-view="view-list"><a href="#">Day View</a></li>
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
  sort: PropTypes.string.isRequired,
  onSetSort: PropTypes.func.isRequired,
  typeFilters: PropTypes.array.isRequired,
  onClearFilters: PropTypes.func.isRequired,
  subjectFilters: PropTypes.array.isRequired,
  handleFilterClick: PropTypes.func.isRequired,
  onSetFilteredState: PropTypes.func.isRequired,
  onUnsetFilteredState: PropTypes.func.isRequired,
}

export default FilterSection;
