/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
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
      topic: '',
      sort: {},
    };
  }

  onToggleShowFilters = () => this.setState(({ open }) => ({ open: !open }))
  onClearFilters = () => this.setState({ topic: '' }, this.props.onClearFilters)

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
    const { open, worksheetName, topic, sort } = this.state;
    const { currentView, onChangeView, handleFilterClick, subjectFilters, difficultyFilters, typeFilters, sourceFilters } = this.props;
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
                      name="reading"
                      id="reading"
                      checked={subjectFilters.indexOf('reading') !== -1}
                      onChange={({ target }) => handleFilterClick('subject', target.name)}
                    />
                    <label htmlFor="reading">Reading</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="writing"
                      id="writing"
                      checked={subjectFilters.indexOf('writing') !== -1}
                      onChange={({ target }) => handleFilterClick('subject', target.name)}
                    />
                    <label htmlFor="writing">Writing</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="math"
                      id="math"
                      checked={subjectFilters.indexOf('math') !== -1}
                      onChange={({ target }) => handleFilterClick('subject', target.name)}
                    />
                    <label htmlFor="math">Math</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="mixedSubject"
                      id="mixedSubject"
                      checked={subjectFilters.indexOf('mixedSubject') !== -1}
                      onChange={() => handleFilterClick('subject', 'mixedSubject')}
                    />
                    <label htmlFor="mixedSubject">Mixed</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                      type="checkbox"
                      name="basic"
                      id="basic"
                      checked={difficultyFilters.indexOf('basic') !== -1}
                      onChange={({ target }) => handleFilterClick('difficulty', target.name)}
                    />
                    <label htmlFor="basic">Basic</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="medium"
                      id="medium"
                      checked={difficultyFilters.indexOf('medium') !== -1}
                      onChange={({ target }) => handleFilterClick('difficulty', target.name)}
                    />
                    <label htmlFor="medium">Medium</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="advanced"
                      id="advanced"
                      checked={difficultyFilters.indexOf('advanced') !== -1}
                      onChange={({ target }) => handleFilterClick('difficulty', target.name)}
                    />
                    <label htmlFor="advanced">Advanced</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="mixedDifficulty"
                      id="mixedDifficulty"
                      checked={difficultyFilters.indexOf('mixedDifficulty') !== -1}
                      onChange={({ target }) => handleFilterClick('difficulty', target.name)}
                    />
                    <label htmlFor="mixedDifficulty">Mixed</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
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
  typeFilters: PropTypes.array.isRequired,
  sourceFilters: PropTypes.array.isRequired,
  subjectFilters: PropTypes.array.isRequired,
  difficultyFilters: PropTypes.array.isRequired,
  currentView: PropTypes.string.isRequired,
  onChangeView: PropTypes.func.isRequired,
  onClearFilters: PropTypes.func.isRequired,
  onSetSort: PropTypes.func.isRequired,
  handleFilterClick: PropTypes.func.isRequired,
  onSetFilteredTopicState: PropTypes.func.isRequired,
  onUnsetFilteredTopicState: PropTypes.func.isRequired,
  onSetFilteredState: PropTypes.func.isRequired,
  onUnsetFilteredState: PropTypes.func.isRequired,
}

export default FilterSection;
