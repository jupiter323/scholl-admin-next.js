import React from 'react';
// import PropTypes from 'prop-types';

class FilterSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: true,
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
                    <div className="input-field">
                      <select id="sort_courses">
                        <option>Number of Sessions</option>
                        <option>Number of Sessions</option>
                      </select>
                      <label className="label" htmlFor="sort_courses">Sort By</label>
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
