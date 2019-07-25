import React from 'react';
import PropTypes from 'prop-types';

class FilterSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    const { open } = this.state;
    return (
      <div className="filter-form-holder">
        <ul className="collapsible expandable">
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
                    <input type="checkbox" id="mixed" />
                    <label htmlFor="mixed">Mixed</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input type="checkbox" id="basic" />
                    <label htmlFor="basic">Basic</label>
                  </li>
                  <li>
                    <input type="checkbox" id="medium" />
                    <label htmlFor="medium">Medium</label>
                  </li>
                  <li>
                    <input type="checkbox" id="advanced" />
                    <label htmlFor="advanced">Advanced</label>
                  </li>
                  <li>
                    <input type="checkbox" id="mixed_2" />
                    <label htmlFor="mixed_2">Mixed</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input type="checkbox" id="skill-builder" />
                    <label htmlFor="skill-builder">Skill Builder</label>
                  </li>
                  <li>
                    <input type="checkbox" id="sat-practice" />
                    <label htmlFor="sat-practice">SAT Practice</label>
                  </li>
                  <li>
                    <input type="checkbox" id="mixed_3" />
                    <label htmlFor="mixed_3">Mixed</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input type="checkbox" id="built-in" />
                    <label htmlFor="built-in">Built-In</label>
                  </li>
                  <li>
                    <input type="checkbox" id="user-created" />
                    <label htmlFor="user-created">User Created</label>
                  </li>
                </ul>
              </div>
              <div className="d-flex row mb-0 justify-center">
                <div className="col s12 m3">
                  <div className="search-field input-field">
                    <input type="search" id="name_search" className="input-control  validate" placeholder="Speci" />
                    <button type="submit" className="search-button"><i className="icon-search"></i></button>
                    <label className="label" htmlFor="name_search">Search</label>
                  </div>
                </div>
                <div className="col s12 m3">
                  <div className="input-field">
                    <select id="topic_search">
                      <option>Right Triangles</option>
                      <option>Option</option>
                      <option>Option</option>
                    </select>
                    <label className="label" htmlFor="topic_search">Topic</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-0 d-flex align-items-center">
              <div className="col s12 l4">
                <div className="row mb-0">
                  <div className="col s12 xl7">
                    <div className="input-field">
                      <select id="sort_worksheet">
                        <option>Due Date</option>
                        <option>Due Date</option>
                        <option>Due Date</option>
                      </select>
                      <label className="label" htmlFor="sort_worksheet">Sort By</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="switcher-block col s12 l4">
                <div className="view-switcher">
                  <ul className="switcher center-align">
                    <li className="active" data-view="view-full"><a href="#">Full View</a></li>
                    <li data-view="view-list"><a href="#">List View</a></li>
                  </ul>
                </div>
              </div>
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

FilterSection.propTypes = {
  currentView: PropTypes.string.isRequired,
  onChangeView: PropTypes.func.isRequired,
  onSetSort: PropTypes.func.isRequired,
  onSetFilteredTopicState: PropTypes.func.isRequired,
  onUnsetFilteredTopicState: PropTypes.func.isRequired,
  onSetFilteredState: PropTypes.func.isRequired,
  onUnsetFilteredState: PropTypes.func.isRequired,
}

export default FilterSection;
