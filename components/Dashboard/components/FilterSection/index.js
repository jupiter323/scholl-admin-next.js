/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

class FilterSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  onToggleShowFilters = () => this.setState(({ open }) => ({ open: !open }))

  render() {
    const { open } = this.state;
    const { filters, eventFilters, onClearFilters, handleFilterClick } = this.props;
    return (
      <div className="calendar-filter filter-form-holder">
        <ul className="collapsible expandable" style={{ minHeight: '0' }}>
          <li>
            <div className="collapsible-body" style={open ? { display: 'block' } : { display: 'none' }}>
              <div className="filter-form_checkbox-list-holder justify-center">
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                      type="checkbox"
                      id="className"
                      name="className"
                      checked={filters.indexOf('className') !== -1}
                      onChange={({ target }) => handleFilterClick(target.name)}
                    />
                    <label htmlFor="className">Some Class Name</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="tutoring"
                      name="tutoring"
                      checked={filters.indexOf('tutoring') !== -1}
                      onChange={({ target }) => handleFilterClick(target.name)}
                    />
                    <label htmlFor="tutoring">Tutoring</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                      type="checkbox"
                      id="sessions"
                      name="sessions"
                      checked={eventFilters.indexOf('sessions') !== -1}
                      onChange={({ target }) => handleFilterClick(target.name, true)}
                    />
                    <label htmlFor="sessions">Sessions</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="lessons"
                      name="lessons"
                      checked={eventFilters.indexOf('lessons') !== -1}
                      onChange={({ target }) => handleFilterClick(target.name, true)}
                    />
                    <label htmlFor="lessons">Lessons</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                      type="checkbox"
                      id="worksheets"
                      name="worksheets"
                      checked={eventFilters.indexOf('worksheets') !== -1}
                      onChange={({ target }) => handleFilterClick(target.name, true)}
                    />
                    <label htmlFor="worksheets">Worksheets</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="testSections"
                      name="testSections"
                      checked={eventFilters.indexOf('testSections') !== -1}
                      onChange={({ target }) => handleFilterClick(target.name, true)}
                    />
                    <label htmlFor="testSections">Test Sections</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="simulatedSats"
                      name="simulatedSats"
                      checked={eventFilters.indexOf('simulatedSats') !== -1}
                      onChange={({ target }) => handleFilterClick(target.name, true)}
                    />
                    <label htmlFor="simulatedSats">Simulated SATs</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="targetTests"
                      name="targetTests"
                      checked={eventFilters.indexOf('targetTests') !== -1}
                      onChange={({ target }) => handleFilterClick(target.name, true)}
                    />
                    <label htmlFor="targetTests">Target Tests</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                      type="checkbox"
                      id="dueToday"
                      name="dueToday"
                      checked={filters.indexOf('dueToday') !== -1}
                      onChange={({ target }) => handleFilterClick(target.name)}
                    />
                    <label htmlFor="dueToday">Due Today</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="dueNextSession"
                      name="dueNextSession"
                      checked={filters.indexOf('dueNextSession') !== -1}
                      onChange={({ target }) => handleFilterClick(target.name)}
                    />
                    <label htmlFor="dueNextSession">Due By Next Session</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="dueThisWeek"
                      name="dueThisWeek"
                      checked={filters.indexOf('dueThisWeek') !== -1}
                      onChange={({ target }) => handleFilterClick(target.name)}
                    />
                    <label htmlFor="dueThisWeek">Due this Week</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="overdue"
                      name="overdue"
                      checked={filters.indexOf('overdue') !== -1}
                      onChange={({ target }) => handleFilterClick(target.name)}
                    />
                    <label htmlFor="overdue">Overdue</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                      type="checkbox"
                      id="complete"
                      name="complete"
                      checked={filters.indexOf('complete') !== -1}
                      onChange={({ target }) => handleFilterClick(target.name)}
                    />
                    <label htmlFor="complete">Complete</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="incomplete"
                      name="incomplete"
                      checked={filters.indexOf('incomplete') !== -1}
                      onChange={({ target }) => handleFilterClick(target.name)}
                    />
                    <label htmlFor="incomplete">Incomplete</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="future"
                      name="future"
                      checked={filters.indexOf('future') !== -1}
                      onChange={({ target }) => handleFilterClick(target.name)}
                    />
                    <label htmlFor="future">Future</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                      type="checkbox"
                      id="reading"
                      name="reading"
                      checked={filters.indexOf('reading') !== -1}
                      onChange={({ target }) => handleFilterClick(target.name)}
                    />
                    <label htmlFor="reading">Reading</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="writing"
                      name="writing"
                      checked={filters.indexOf('writing') !== -1}
                      onChange={({ target }) => handleFilterClick(target.name)}
                    />
                    <label htmlFor="writing">Writing</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="math"
                      name="math"
                      checked={filters.indexOf('math') !== -1}
                      onChange={({ target }) => handleFilterClick(target.name)}
                    />
                    <label htmlFor="math">Math</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                      type="checkbox"
                      id="beginning"
                      name="beginning"
                      checked={filters.indexOf('beginning') !== -1}
                      onChange={({ target }) => handleFilterClick(target.name)}
                    />
                    <label htmlFor="beginning">Beginning</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="developing"
                      name="developing"
                      checked={filters.indexOf('developing') !== -1}
                      onChange={({ target }) => handleFilterClick(target.name)}
                    />
                    <label htmlFor="developing">Developing</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="accomplished"
                      name="accomplished"
                      checked={filters.indexOf('accomplished') !== -1}
                      onChange={({ target }) => handleFilterClick(target.name)}
                    />
                    <label htmlFor="accomplished">Accomplished</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="exemplary"
                      name="exemplary"
                      checked={filters.indexOf('exemplary') !== -1}
                      onChange={({ target }) => handleFilterClick(target.name)}
                    />
                    <label htmlFor="exemplary">Exemplary</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                      type="checkbox"
                      id="hasReviewFlags"
                      name="hasReviewFlags"
                      checked={filters.indexOf('hasReviewFlags') !== -1}
                      onChange={({ target }) => handleFilterClick(target.name)}
                    />
                    <label htmlFor="hasReviewFlags">Has Review Flags</label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row mb-0 d-flex align-items-flex-end">
              <div className="col s12 l8"></div>
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
  filters: PropTypes.array.isRequired,
  eventFilters: PropTypes.array.isRequired,
  onClearFilters: PropTypes.func.isRequired,
  handleFilterClick: PropTypes.func.isRequired,
};

export default FilterSection;