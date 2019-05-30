import React from 'react';
// import PropTypes from 'prop-types';

// import Dropdown from '../../../../FormComponents/Dropdown';
// import getValueFromState from '../../../../utils/getValueFromState';

class FilterSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
  }

  render() {
    return (
      <div className="filter-form-holder">
        <ul className="collapsible expandable">
          <li>
            <div className="collapsible-body">
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
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input type="checkbox" id="future" />
                    <label htmlFor="future">Future</label>
                  </li>
                  <li>
                    <input type="checkbox" id="available" />
                    <label htmlFor="available">Available</label>
                  </li>
                  <li>
                    <input type="checkbox" id="complete" />
                    <label htmlFor="complete">Complete</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input type="checkbox" id="hasReviewFlags" />
                    <label htmlFor="hasReviewFlags">Has Review Flags</label>
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
              </div>
              <div className="d-flex row mb-0 justify-center">
                <div className="col s12 m4">
                  <div className="search-field input-field">
                    <input type="search" id="test_version_search" className="input-control  validate" />
                    <button type="submit" className="search-button"><i className="icon-search"></i></button>
                    <label className="label" htmlFor="test_version_search">Test Version</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-0 d-flex align-items-center">
              <div className="col s12 l4">
                <div className="row mb-0">
                  <div className="col s12 xl7">
                    <div className="input-field">
                      <select id="sort_test_section">
                        <option>Available On Date</option>
                        <option>Available On</option>
                        <option>Available On</option>
                      </select>
                      <label className="label" htmlFor="sort_test_section">Sort By</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12 l4 hide-on-med-and-down show-on-large">&nbsp;</div>
              <div className="col s12 l4">
                <div className="option-filters">
                  <div className="option-item clear"><a href="#">Clear Filters</a></div>
                  <div className="option-item">
                    <span className="collapsible-header"><span className="hide-text">Hide</span> <span className="open-text">Open</span> Filters</span>
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

export default FilterSection;
