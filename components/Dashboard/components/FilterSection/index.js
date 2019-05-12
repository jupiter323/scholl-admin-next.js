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
    const { onClearFilters } = this.props;
    return (
      <div className="calendar-filter filter-form-holder">
        <ul className="collapsible expandable" style={{ minHeight: '0' }}>
          <li>
            <div className="collapsible-body" style={open ? { display: 'block' } : { display: 'none' }}>
              <div className="filter-form_checkbox-list-holder justify-center">
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input type="checkbox" id="className" />
                    <label htmlFor="className">Some Class Name</label>
                  </li>
                  <li>
                    <input type="checkbox" id="tutoring" />
                    <label htmlFor="tutoring">Tutoring</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input type="checkbox" id="sessions" />
                    <label htmlFor="sessions">Sessions</label>
                  </li>
                  <li>
                    <input type="checkbox" id="lessons" />
                    <label htmlFor="lessons">Lessons</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input type="checkbox" id="worksheets" />
                    <label htmlFor="worksheets">Worksheets</label>
                  </li>
                  <li>
                    <input type="checkbox" id="testSections" />
                    <label htmlFor="testSections">Test Sections</label>
                  </li>
                  <li>
                    <input type="checkbox" id="simulatedSATs" />
                    <label htmlFor="simulatedSATs">Simulated SATs</label>
                  </li>
                  <li>
                    <input type="checkbox" id="targetTests" />
                    <label htmlFor="targetTests">Target Tests</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input type="checkbox" id="dueToday" />
                    <label htmlFor="dueToday">Due Today</label>
                  </li>
                  <li>
                    <input type="checkbox" id="dueNextSession" />
                    <label htmlFor="dueNextSession">Due By Next Session</label>
                  </li>
                  <li>
                    <input type="checkbox" id="dueThisWeek" />
                    <label htmlFor="dueThisWeek">Due this Week</label>
                  </li>
                  <li>
                    <input type="checkbox" id="overdue" />
                    <label htmlFor="overdue">Overdue</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input type="checkbox" id="complete" />
                    <label htmlFor="complete">Complete</label>
                  </li>
                  <li>
                    <input type="checkbox" id="incomplete" />
                    <label htmlFor="incomplete">Incomplete</label>
                  </li>
                  <li>
                    <input type="checkbox" id="future" />
                    <label htmlFor="future">Future</label>
                  </li>
                </ul>
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
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input type="checkbox" id="beginning" />
                    <label htmlFor="beginning">Beginning</label>
                  </li>
                  <li>
                    <input type="checkbox" id="developing" />
                    <label htmlFor="developing">Developing</label>
                  </li>
                  <li>
                    <input type="checkbox" id="accomplished" />
                    <label htmlFor="accomplished">Accomplished</label>
                  </li>
                  <li>
                    <input type="checkbox" id="exemplary" />
                    <label htmlFor="exemplary">Exemplary</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input type="checkbox" id="hasReviewFlags" />
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
  onClearFilters: PropTypes.func.isRequired,
};

export default FilterSection;