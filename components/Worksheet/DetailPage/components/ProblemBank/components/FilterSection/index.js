/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';

import Dropdown from '../../../../../../FormComponents/Dropdown';
import getValueFromState from '../../../../../../utils/getValueFromState';
import sampleTopics from '../../../../../../utils/sampleTopics';

class FilterSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      topic: '',
      activeFilters: [],
    };
  }

  onToggleShowFilters = () => this.setState(({ open }) => ({ open: !open }))
  onClearFilters = () => this.setState({ activeFilters: [], topic: '' }, this.props.onClearFilters)

  // Sets component-level state so the UI reflects the updated dropdown option, then calls onSetFilteredTopicState to actually implement the filtering
  // eslint-disable-next-line consistent-return
  handleTopicFilterChange = (event) => {
    const { onSetFilteredTopicState } = this.props;
    const value = event.target ? event.target.value : event;
    const updatedState = update(this.state, {
      $merge: { topic: value },
    });
    this.setState(updatedState);
    return onSetFilteredTopicState(event);
  }

  render() {
    const { open, topic } = this.state;
    const { sortBySubject, toggleSelectAllProblemsOrPassages, handleFilterClick, subjectFilters, difficultyFilters, typeFilters, workbookFilters } = this.props;
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
                      id="reading_problems"
                      checked={subjectFilters.indexOf('reading') !== -1}
                      onChange={() => handleFilterClick('subject', 'reading')}
                    />
                    <label htmlFor="reading_problems">Reading</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="writing"
                      checked={subjectFilters.indexOf('writing') !== -1}
                      onChange={() => handleFilterClick('subject', 'writing')}
                    />
                    <label htmlFor="writing">Writing</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="math"
                      checked={subjectFilters.indexOf('math') !== -1}
                      onChange={() => handleFilterClick('subject', 'math')}
                    />
                    <label htmlFor="math">Math</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                      type="checkbox"
                      id="easy"
                      checked={difficultyFilters.indexOf('easy') !== -1}
                      onChange={() => handleFilterClick('difficulty', 'easy')}
                    />
                    <label htmlFor="easy">Easy</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="medium"
                      checked={difficultyFilters.indexOf('medium') !== -1}
                      onChange={() => handleFilterClick('difficulty', 'medium')}
                    />
                    <label htmlFor="medium">Medium</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="hard"
                      checked={difficultyFilters.indexOf('hard') !== -1}
                      onChange={() => handleFilterClick('difficulty', 'hard')}
                    />
                    <label htmlFor="hard">Hard</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                      type="checkbox"
                      id="satPractice"
                      checked={typeFilters.indexOf('satPractice') !== -1}
                      onChange={() => handleFilterClick('type', 'satPractice')}
                    />
                    <label htmlFor="satPractice">SAT Practice</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="skillBuilder"
                      checked={typeFilters.indexOf('skillBuilder') !== -1}
                      onChange={() => handleFilterClick('type', 'skillBuilder')}
                    />
                    <label htmlFor="skillBuilder">Skill Builder</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                      type="checkbox"
                      id="inWorkbook"
                      checked={workbookFilters.indexOf('inWorkbook') !== -1}
                      onChange={() => handleFilterClick('workbook', 'inWorkbook')}
                    />
                    <label htmlFor="inWorkbook">In Workbook</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="notInWorkbook"
                      checked={workbookFilters.indexOf('notInWorkbook') !== -1}
                      onChange={() => handleFilterClick('workbook', 'notInWorkbook')}
                    />
                    <label htmlFor="notInWorkbook">Not in Workbook</label>
                  </li>
                </ul>
              </div>
              <div className="d-flex row mb-0 justify-center">
                <div className="col s12 m3">
                  <div className="input-field" style={{ marginBottom: '0', marginTop: '0' }}>
                    <Dropdown
                      value={getValueFromState(topic, sampleTopics)}
                      onChange={this.handleTopicFilterChange}
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
              <div className="col s12 l4 hide-on-med-and-down show-on-large">&nbsp;</div>
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
        <div className="table-header white hide-on-med-and-down">
          <div className="container-lg">
            <div className="list-table detail-table">
              <div className="list-table-header table-header-box">
                <div className="list-table-row">
                  <div className="list-table-cell checkbox-cell">
                    <label>
                      <input
                        type="checkbox"
                        className="filled-in" data-check-pattern="[name^='check_']"
                        onChange={toggleSelectAllProblemsOrPassages}
                      />
                      <span>&nbsp;</span>
                    </label>
                  </div>
                  <div className="list-table-cell subject-cell">
                    <a href="#" onClick={sortBySubject}><span className="sort-holder">Subject <i className="sort-icon custom-icon-traingle-down"></i></span></a>
                  </div>
                  <div className="list-table-cell info-cell"><b>Diﬃculty</b></div>
                  <div className="list-table-cell type-cell"><b>Type</b></div>
                  <div className="list-table-cell in-cell"><b>In Workbook</b></div>
                  <div className="list-table-cell topic-cell"><b>Topic(s)</b></div>
                  <div className="list-table-cell view-cell"><b>&nbsp;</b></div>
                  <div className="list-table-cell drop-cell">&nbsp;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

FilterSection.propTypes = {
  subjectFilters: PropTypes.array.isRequired,
  difficultyFilters: PropTypes.array.isRequired,
  typeFilters: PropTypes.array.isRequired,
  workbookFilters: PropTypes.array.isRequired,
  sortBySubject: PropTypes.func.isRequired,
  handleFilterClick: PropTypes.func.isRequired,
  onSetFilteredTopicState: PropTypes.func.isRequired,
  onClearFilters: PropTypes.func.isRequired,
  toggleSelectAllProblemsOrPassages: PropTypes.func.isRequired,
}

export default FilterSection;
