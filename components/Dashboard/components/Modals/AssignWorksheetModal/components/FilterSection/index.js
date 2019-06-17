/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from '../../../../../../FormComponents/Dropdown';
import getValueFromState from '../../../../../../utils/getValueFromState';

const sortByOptions = [
  {
    label: 'Difficulty',
    value: 'difficulty',
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
      open: false,
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
    const { handleFilterClick, subjectFilters, typeFilters, sourceFilters, difficultyFilters, sort, onSetSort } = this.props;
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
                      id="readingSubject"
                      name="readingSubject"
                      checked={subjectFilters.indexOf('readingSubject') !== -1}
                      onChange={({ target }) => handleFilterClick('subject', target.name)}
                    />
                    <label htmlFor="readingSubject">Reading</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="writingSubject"
                      name="writingSubject"
                      checked={subjectFilters.indexOf('writingSubject') !== -1}
                      onChange={({ target }) => handleFilterClick('subject', target.name)}
                    />
                    <label htmlFor="writingSubject">Writing</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="mathSubject"
                      name="mathSubject"
                      checked={subjectFilters.indexOf('mathSubject') !== -1}
                      onChange={({ target }) => handleFilterClick('subject', target.name)}
                    />
                    <label htmlFor="mathSubject">Math</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="mixedDifficulty"
                      name="mixedDifficulty"
                      checked={subjectFilters.indexOf('mixedDifficulty') !== -1}
                      onChange={({ target }) => handleFilterClick('subject', target.name)}
                    />
                    <label htmlFor="mixedDifficulty">Mixed</label>
                  </li>
                </ul>

                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                      type="checkbox"
                      id="satPractice"
                      name="satPractice"
                      checked={typeFilters.indexOf('satPractice') !== -1}
                      onChange={({ target }) => handleFilterClick('type', target.name)}
                    />
                    <label htmlFor="satPractice">SAT Practice</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="skillBuilders"
                      name="skillBuilders"
                      checked={typeFilters.indexOf('skillBuilders') !== -1}
                      onChange={({ target }) => handleFilterClick('type', target.name)}
                    />
                    <label htmlFor="skillBuilders">Skill Builders</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="mixedType"
                      name="mixedType"
                      checked={typeFilters.indexOf('mixedType') !== -1}
                      onChange={({ target }) => handleFilterClick('type', target.name)}
                    />
                    <label htmlFor="mixedType">Mixed</label>
                  </li>
                </ul>

                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                      type="checkbox"
                      id="builtIn"
                      name="builtIn"
                      checked={sourceFilters.indexOf('builtIn') !== -1}
                      onChange={({ target }) => handleFilterClick('source', target.name)}
                    />
                    <label htmlFor="builtIn">Built-In</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="userCreated"
                      name="userCreated"
                      checked={sourceFilters.indexOf('userCreated') !== -1}
                      onChange={({ target }) => handleFilterClick('source', target.name)}
                    />
                    <label htmlFor="userCreated">User Created</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                      type="checkbox"
                      id="easy"
                      name="easy"
                      checked={difficultyFilters.indexOf('easy') !== -1}
                      onChange={({ target }) => handleFilterClick('difficulty', target.name)}
                    />
                    <label htmlFor="easy">Easy</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="medium"
                      name="medium"
                      checked={difficultyFilters.indexOf('medium') !== -1}
                      onChange={({ target }) => handleFilterClick('difficulty', target.name)}
                    />
                    <label htmlFor="medium">Medium</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="difficult"
                      name="difficult"
                      checked={difficultyFilters.indexOf('difficult') !== -1}
                      onChange={({ target }) => handleFilterClick('difficulty', target.name)}
                    />
                    <label htmlFor="difficult">Diﬃcult</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="mixedDifficulty"
                      name="mixedDifficulty"
                      checked={difficultyFilters.indexOf('mixedDifficulty') !== -1}
                      onChange={({ target }) => handleFilterClick('difficulty', target.name)}
                    />
                    <label htmlFor="mixedDifficulty">Mixed</label>
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
  sourceFilters: PropTypes.array.isRequired,
  subjectFilters: PropTypes.array.isRequired,
  difficultyFilters: PropTypes.array.isRequired,
  handleFilterClick: PropTypes.func.isRequired,
  onSetFilteredState: PropTypes.func.isRequired,
  onUnsetFilteredState: PropTypes.func.isRequired,
}

export default FilterSection;
