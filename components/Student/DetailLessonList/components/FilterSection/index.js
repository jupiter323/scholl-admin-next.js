/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import update from 'immutability-helper';
import PropTypes from 'prop-types';

class FilterSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    }
  }

  onToggleShowFilters = () => this.setState(({ open }) => ({ open: !open }))

  // onHandleFilterClick = (filter) => {
  //   const { activeFilters: currentActiveFilters } = this.state;
  //   let activeFilters;
  //   if (currentActiveFilters.indexOf(filter) === -1) {
  //     activeFilters = update(currentActiveFilters, {
  //       $push: [filter],
  //     });
  //   } else {
  //     const filterIndex = currentActiveFilters.indexOf(filter);
  //     activeFilters = update(currentActiveFilters, {
  //       $splice: [[ filterIndex, 1 ]],
  //     });
  //   }
  //   this.setState({ activeFilters });
  // }

  // onClearFilters = () => this.setState({ activeFilters: [] })

  render() {
    const { open } = this.state;
    const { currentView, onClearFilters, onChangeView, onHandleFilterClick, activeFilters } = this.props;
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
                      id="reading"
                      checked={activeFilters.indexOf('reading') !== -1}
                      onChange={() => onHandleFilterClick('reading')}
                    />
                    <label htmlFor="reading">Reading</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="writing"
                      checked={activeFilters.indexOf('writing') !== -1}
                      onChange={() => onHandleFilterClick('writing')}
                    />
                    <label htmlFor="writing">Writing</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="math"
                      checked={activeFilters.indexOf('math') !== -1}
                      onChange={() => onHandleFilterClick('math')}
                    />
                    <label htmlFor="math">Math</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                      type="checkbox"
                      id="beginning"
                      checked={activeFilters.indexOf('beginning') !== -1}
                      onChange={() => onHandleFilterClick('beginning')}
                    />
                    <label htmlFor="beginning">Beginning</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="developing"
                      checked={activeFilters.indexOf('developing') !== -1}
                      onChange={() => onHandleFilterClick('developing')}
                    />
                    <label htmlFor="developing">Developing</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="accomplished"
                      checked={activeFilters.indexOf('accomplished') !== -1}
                      onChange={() => onHandleFilterClick('accomplished')}
                    />
                    <label htmlFor="accomplished">Accomplished</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="exemplary"
                      checked={activeFilters.indexOf('exemplary') !== -1}
                      onChange={() => onHandleFilterClick('exemplary')}
                    />
                    <label htmlFor="exemplary">Exemplary</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                      type="checkbox"
                      id="unassigned"
                      checked={activeFilters.indexOf('unassigned') !== -1}
                      onChange={() => onHandleFilterClick('unassigned')}
                    />
                    <label htmlFor="unassigned">Unassigned</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="complete"
                      checked={activeFilters.indexOf('complete') !== -1}
                      onChange={() => onHandleFilterClick('complete')}
                    />
                    <label htmlFor="complete">Complete</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="incomplete"
                      checked={activeFilters.indexOf('incomplete') !== -1}
                      onChange={() => onHandleFilterClick('incomplete')}
                    />
                    <label htmlFor="incomplete">Incomplete</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                      type="checkbox"
                      id="hasReviewFlags"
                      checked={activeFilters.indexOf('hasReviewFlags') !== -1}
                      onChange={() => onHandleFilterClick('hasReviewFlags')}
                    />
                    <label htmlFor="hasReviewFlags">Has Review Flags</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                      type="checkbox"
                      id="dueToday"
                      checked={activeFilters.indexOf('dueToday') !== -1}
                      onChange={() => onHandleFilterClick('dueToday')}
                    />
                    <label htmlFor="dueToday">Due Today</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="dueNextSession"
                      checked={activeFilters.indexOf('dueNextSession') !== -1}
                      onChange={() => onHandleFilterClick('dueNextSession')}
                    />
                    <label htmlFor="dueNextSession">Due By Next Session</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="dueThisWeek"
                      checked={activeFilters.indexOf('dueThisWeek') !== -1}
                      onChange={() => onHandleFilterClick('dueThisWeek')}
                    />
                    <label htmlFor="dueThisWeek">Due this Week</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="overdue"
                      checked={activeFilters.indexOf('overdue') !== -1}
                      onChange={() => onHandleFilterClick('overdue')}
                    />
                    <label htmlFor="overdue">Overdue</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                      type="checkbox"
                      id="some-class"
                      checked={activeFilters.indexOf('class') !== -1}
                      onChange={() => onHandleFilterClick('class')}
                    />
                    <label htmlFor="some-class">Some Class</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="tutoring"
                      checked={activeFilters.indexOf('tutoring') !== -1}
                      onChange={() => onHandleFilterClick('tutoring')}
                    />
                    <label htmlFor="tutoring">Tutoring</label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex row mb-0 justify-center">
              <div className="col s12 m3">
                    <div className="search-field input-field">
                      <input type="search" id="name_search" className="input-control  validate"  />
                      <button type="submit" className="search-button"><i className="icon-search"></i></button>
                      <label className="label" htmlFor="name_search">Search</label>
                    </div>
              </div>
            <div className="col s12 m3">
              <div className="input-field">
                <select id="location_search">
                  <option>Any</option>
                  <option>Option</option>
                  <option>Option</option>
                </select>
                <label className="label" htmlFor="location_search">Location</label>
              </div>
            </div>
            </div>

            <div className="row mb-0 d-flex align-items-center">
              <div className="col s12 l4">
                <div className="row mb-0">
                  
                  <div className="col s12 x17">
                   <div className="input-field">
                      {/* sort dropdown  */}
                      <select id="sort">
                  <option>Any</option>
                  <option>Option</option>
                  <option>Option</option>
                </select>
                  <label htmlFor="sort" className="label">Sort options</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="switcher-block col s12 l4" style={{marginTop: '14px'}}>
              <div className="view-switcher">
                <ul className="switcher center-align">
                  <li
                  data-view="view-full"
                  className={currentView === 'full' ? 'active' : ""}
                  >
                    <a href="#" onClick={() => onChangeView('full')}>Full View</a>
                  </li>
                  <li
                      data-view="view-list"
                      className={currentView === 'list' ? 'active' : ''}
                    >
                      <a href="#" onClick={() => onChangeView('list')}>List View</a>
                    </li>
                  </ul>
              </div>
            </div>
              <div className="col s12 l4">
                <div className="option-filters">
                  <div className="option-item clear"><a href="#" onClick={onClearFilters}>Clear Filters</a></div>
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
    )
  }
}

FilterSection.propTypes = {
  currentView: PropTypes.string.isRequired,
  onChangeView: PropTypes.func.isRequired,
  onHandleFilterClick: PropTypes.func.isRequired,
  activeFilters: PropTypes.array.isRequired,
  onClearFilters: PropTypes.func.isRequired,
}
export default FilterSection;
