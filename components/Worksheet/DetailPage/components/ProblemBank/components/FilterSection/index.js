import React from 'react';
// import PropTypes from 'prop-types';

// import Dropdown from '../../../../../../FormComponents/Dropdown';
// import getValueFromState from '../../../../../../utils/getValueFromState';
// import sampleTopics from '../../../../../../utils/sampleTopics';

class FilterSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      topic: {},
      activeFilters: [],
    };
  }

  render() {
    return (
      <div className="filter-form-holder">
        <ul className="collapsible expandable" style={{ minHeight: '0' }}>
          <li>
            <div className="collapsible-body">
              <div className="filter-form_checkbox-list-holder justify-center">
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input type="checkbox" id="reading_problems" />
                    <label htmlFor="reading_problems">Reading</label>
                  </li>
                  <li>
                    <input type="checkbox" id="writing_problems" />
                    <label htmlFor="writing_problems">Writing</label>
                  </li>
                  <li>
                    <input type="checkbox" id="math_problems" />
                    <label htmlFor="math_problems">Math</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input type="checkbox" id="easy_problems" />
                    <label htmlFor="easy_problems">Easy</label>
                  </li>
                  <li>
                    <input type="checkbox" id="medium_problems" />
                    <label htmlFor="medium_problems">Medium</label>
                  </li>
                  <li>
                    <input type="checkbox" id="hard_problems" />
                    <label htmlFor="hard_problems">Hard</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input type="checkbox" id="sat_practice_problems" />
                    <label htmlFor="sat_practice_problems">SAT Practice</label>
                  </li>
                  <li>
                    <input type="checkbox" id="skill_builder_problems" />
                    <label htmlFor="skill_builder_problems">Skill Builder</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input type="checkbox" id="in_workbook_problems" />
                    <label htmlFor="in_workbook_problems">In Workbook</label>
                  </li>
                  <li>
                    <input type="checkbox" id="not_workbook_problems" />
                    <label htmlFor="not_workbook_problems">Not in Workbook</label>
                  </li>
                </ul>
              </div>
              <div className="d-flex row mb-0 justify-center">
                <div className="col s12 m3">
                  <div className="input-field">
                    <select id="topic_problems">
                      <option>Topic</option>
                      <option>Topic</option>
                      <option>Topic</option>
                    </select>
                    <label className="label" htmlFor="topic_problems">Topic</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-0 d-flex align-items-center">
              <div className="col s12 l4 hide-on-med-and-down show-on-large">&nbsp;</div>
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
        <div className="table-header white hide-on-med-and-down">
          <div className="container-lg">
            <div className="list-table detail-table">
              <div className="list-table-header table-header-box">
                <div className="list-table-row">
                  <div className="list-table-cell checkbox-cell">
                    <label>
                      <input type="checkbox" className="filled-in" data-check-pattern="[name^='check_']" />
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

export default FilterSection;
