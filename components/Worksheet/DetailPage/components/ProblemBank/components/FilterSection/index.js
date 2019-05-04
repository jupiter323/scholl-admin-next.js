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
      filterTopic: '',
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
    const { onSetFilteredTopicState, onUnsetFilteredTopicState } = this.props;
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
    }
  }

  render() {
    const { activeFilters, open, topic } = this.state;
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
                      checked={activeFilters.indexOf('reading') !== -1}
                      onChange={() => this.handleFilterClick('reading')}
                    />
                    <label htmlFor="reading_problems">Reading</label>
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
                      id="easy"
                      checked={activeFilters.indexOf('easy') !== -1}
                      onChange={() => this.handleFilterClick('easy')}
                    />
                    <label htmlFor="easy">Easy</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="medium"
                      checked={activeFilters.indexOf('medium') !== -1}
                      onChange={() => this.handleFilterClick('medium')}
                    />
                    <label htmlFor="medium">Medium</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="hard"
                      checked={activeFilters.indexOf('hard') !== -1}
                      onChange={() => this.handleFilterClick('hard')}
                    />
                    <label htmlFor="hard">Hard</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                      type="checkbox"
                      id="sat_practice"
                      checked={activeFilters.indexOf('sat_practice') !== -1}
                      onChange={() => this.handleFilterClick('sat_practice')}
                    />
                    <label htmlFor="sat_practice">SAT Practice</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="skill_builder"
                      checked={activeFilters.indexOf('skill_builder') !== -1}
                      onChange={() => this.handleFilterClick('skill_builder')}
                    />
                    <label htmlFor="skill_builder">Skill Builder</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                      type="checkbox"
                      id="in_workbook"
                      checked={activeFilters.indexOf('in_workbook') !== -1}
                      onChange={() => this.handleFilterClick('in_workbook')}
                    />
                    <label htmlFor="in_workbook">In Workbook</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="not_workbook"
                      checked={activeFilters.indexOf('not_workbook') !== -1}
                      onChange={() => this.handleFilterClick('not_workbook')}
                    />
                    <label htmlFor="not_workbook">Not in Workbook</label>
                  </li>
                </ul>
              </div>
              <div className="d-flex row mb-0 justify-center">
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
                        checked={activeFilters.indexOf('filled') !== -1}
                        onChange={() => this.handleFilterClfilledick('')}
                      />
                      <span>&nbsp;</span>
                    </label>
                  </div>
                  <div className="list-table-cell subject-cell">
                    <a href="#"><span className="sort-holder">Subject <i className="sort-icon custom-icon-traingle-down"></i></span></a>
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
  onSetFilteredTopicState: PropTypes.func.isRequired,
  onUnsetFilteredTopicState: PropTypes.func.isRequired,
}

export default FilterSection;
