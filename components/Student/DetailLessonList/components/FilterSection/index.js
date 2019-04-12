/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import update from 'immutability-helper';

class FilterSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      activeFilters: [],
    }
  }

  onToggleShowFilters = () => this.setState(({ open }) => ({ open: !open }))

  onHandleFilterClick = (filter) => {
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

  onClearFilters = () => this.setState({ activeFilters: [] })

  render() {
    const { open, activeFilters } = this.state;
    return (
      <div className="filter-form-holder">
        <ul className="collapsible expandable">
          <li>
            <div className="collapsible-body" style={open ? { display: 'block' } : { display: 'none' }}>
              <div className="filter-form_checkbox-list-holder">
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                      type="checkbox"
                      id="activated"
                      checked={activeFilters.indexOf("activated") !== -1}
                      onChange={() => this.onHandleFilterClick('activated')}
                    />
                    <label htmlFor="activated">Activated</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="unactivated"
                      checked={activeFilters.indexOf("unactivated") !== -1}
                      onChange={() => this.onHandleFilterClick('unactivated')}
                    />
                    <label htmlFor="unactivated">Unactivated</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="expired"
                      checked={activeFilters.indexOf("expired") !== -1}
                      onChange={() => this.onHandleFilterClick('expired')}
                    />
                    <label htmlFor="expired">Expired</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                      type="checkbox"
                      id="current"
                      checked={activeFilters.indexOf("current") !== -1}
                      onChange={() => this.onHandleFilterClick('current')}
                    />
                    <label htmlFor="current">Current</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="archived"
                      checked={activeFilters.indexOf("archived") !== -1}
                      onChange={() => this.onHandleFilterClick('archived')}
                    />
                    <label htmlFor="archived">Archived</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                      type="checkbox"
                      id="no-gain"
                      checked={activeFilters.indexOf("no-gain") !== -1}
                      onChange={() => this.onHandleFilterClick('no-gain')}
                    />
                    <label htmlFor="no-gain">No Gain</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="some-gain"
                      checked={activeFilters.indexOf("some-gain") !== -1}
                      onChange={() => this.onHandleFilterClick('some-gain')}
                    />
                    <label htmlFor="some-gain">Some Gain</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="gain-100+"
                      checked={activeFilters.indexOf("gain-100+") !== -1}
                      onChange={() => this.onHandleFilterClick('gain-100+')}
                    />
                    <label htmlFor="gain-100+">Gain of 100+</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="gain-200+"
                      checked={activeFilters.indexOf("gain-200+") !== -1}
                      onChange={() => this.onHandleFilterClick('gain-200+')}
                    />
                    <label htmlFor="gain-200+">Gain of 200+</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                      type="checkbox"
                      id="hit-target-score"
                      checked={activeFilters.indexOf("hit-target-score") !== -1}
                      onChange={() => this.onHandleFilterClick('hit-target-score')}
                    />
                    <label htmlFor="hit-target-score">Hit Target Score</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="hasnt-hit-target-score"
                      checked={activeFilters.indexOf("hasnt-hit-target-score") !== -1}
                      onChange={() => this.onHandleFilterClick('hasnt-hit-target-score')}
                    />
                    <label htmlFor="hasnt-hit-target-score">Hasn’t Hit Target Score</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                      type="checkbox"
                      id="no-tests"
                      checked={activeFilters.indexOf("no-tests") !== -1}
                      onChange={() => this.onHandleFilterClick('tests')}
                    />
                    <label htmlFor="no-tests">No Tests</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="1-test"
                      checked={activeFilters.indexOf("1-test") !== -1}
                      onChange={() => this.onHandleFilterClick('1-test')}
                    />
                    <label htmlFor="1-test">1 Test</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="2-test"
                      checked={activeFilters.indexOf("2-test") !== -1}
                      onChange={() => this.onHandleFilterClick('2-test')}
                    />
                    <label htmlFor="2-test">2 Tests</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="3-test"
                      checked={activeFilters.indexOf("3-test") !== -1}
                      onChange={() => this.onHandleFilterClick('3-test')}
                    />
                    <label htmlFor="3-test">3+ Tests</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                      type="checkbox"
                      id="has-overdue-work"
                      checked={activeFilters.indexOf("has-overdue-work") !== -1}
                      onChange={() => this.onHandleFilterClick('has-overdue-work')}
                    />
                    <label htmlFor="has-overdue-work">Has Overdue Work</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="unreviewed-flags"
                      checked={activeFilters.indexOf("unreviewed-flags") !== -1}
                      onChange={() => this.onHandleFilterClick('unreviewed-flags')}
                    />
                    <label htmlFor="unreviewed-flags">Unreviewed Flags</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                      type="checkbox"
                      id="sessions-this-week"
                      checked={activeFilters.indexOf("sessions-this-week") !== -1}
                      onChange={() => this.onHandleFilterClick('sessions-this-week')}
                    />
                    <label htmlFor="sessions-this-week">Sessions This Week</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="session-today"
                      checked={activeFilters.indexOf("session-today") !== -1}
                      onChange={() => this.onHandleFilterClick('session-today')}
                    />
                    <label htmlFor="session-today">Session Today</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="no-sessions"
                      checked={activeFilters.indexOf("no-sessions") !== -1}
                      onChange={() => this.onHandleFilterClick('no-sessions')}
                    />
                    <label htmlFor="no-sessions">No Sessions Scheduled</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                      type="checkbox"
                      id="entered-actual-score"
                      checked={activeFilters.indexOf("entered-actual-score") !== -1}
                      onChange={() => this.onHandleFilterClick('entered-actual-score')}
                    />
                    <label htmlFor="entered-actual-score">Entered Actual Score</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="no-actual-score"
                      checked={activeFilters.indexOf("no-actual-score") !== -1}
                      onChange={() => this.onHandleFilterClick('no-actual-score')}
                    />
                    <label htmlFor="no-actual-score">No Actual Score</label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row mb-0 d-flex align-items-flex-end">
              <div className="col s12 l8">
                <div className="row mb-0">
                  <div className="col s12 m3">
                    <div className="search-field input-field">
                      <input type="search" id="name_search" className="input-control  validate" placeholder="Edwar" />
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
                  <div className="col s12 m3">
                    <div className="input-field">
                      <select id="sort_search">
                        <option>Last Name (ascending)</option>
                        <option>Option</option>
                        <option>Option</option>
                      </select>
                      <label className="label" htmlFor="sort_search">Sort</label>
                    </div>
                  </div>
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
    )
  }
}

export default FilterSection;
