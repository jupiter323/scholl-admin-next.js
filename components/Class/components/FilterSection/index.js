import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import getValueFromState from '../../../utils/getValueFromState';
import classSortOptions from '../../utils/classSortOptions';
import Dropdown from '../../../FormComponents/Dropdown';
import locationOptions from '../../../utils/locationOptions';

class FilterSection extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      open: true,
      name: "",
      sort: {},
      location: {},
    };
  }

  onToggleShowFilters = () => this.setState(({ open }) => ({ open: !open }))

  // onHandleFilterLocations = () => {
  //   const { onSetFilteredState, onUnsetFilteredState } = this.props;
  //   if (this.state.location === {}) {
  //     onUnsetFilteredState(this.state.location);
  //   }
  //   onSetFilteredState(this.state.location)
  // }

  handleLocationChange = (location) => {
    const {onSetLocationFilter} = this.props;
    this.setState({location});
    return onSetLocationFilter(location)
;  }
  handleSortChange = (sort) => {
    const {onSetSort} = this.props;
    this.setState({sort});
    return onSetSort(sort);
  }

  submitNameFilter = () => {
    const { onSetFilteredState, onUnsetFilteredState } = this.props;
    const { name } = this.state;
    if (name === "") {
      onUnsetFilteredState(name);
    }
    const transformedName = name.replace(/\s/g, "").toLowerCase();
    onSetFilteredState(transformedName);
  }

  render() {
    const { open, name, sort, locations } = this.state;
    const { handleFilterClick, onClearFilters, sessionFilters, gainFilters, statusFilters } = this.props;

    return (
      <div className="filter-form-holder">
      <ul className="collapsible expandable">
        <li>
          <div className="collapsible-body" style={{display: open ? 'block' : 'none'}}>
            <div className="filter-form_checkbox-list-holder justify-center">
              <ul className="filter-form_checkbox-list">
                <li>
                  <input
                    type="checkbox"
                    id="sessions_this_week"
                    checked={sessionFilters.indexOf('sessionsThisWeek') !== -1}
                    onChange={() => handleFilterClick('sessions', 'sessionsThisWeek')}
                  />
                  <label htmlFor="sessions_this_week">Sessions This Week</label>
                </li>
                <li>
                <input
                    type="checkbox"
                    id="session_today"
                    checked={sessionFilters.indexOf('sessionToday') !== -1}
                    onChange={() => handleFilterClick('sessions', 'sessionToday')}
                  />
                  <label htmlFor="session_today">Session Today</label>
                </li>
                <li>
                <input
                    type="checkbox"
                    id="sessions_no"
                    checked={sessionFilters.indexOf('noSessions') !== -1}
                    onChange={() => handleFilterClick('sessions', 'noSessions')}
                  />
                  <label htmlFor="sessions_no">No Sessions Scheduled</label>
                </li>
              </ul>
              <ul className="filter-form_checkbox-list">
                <li>
                <input
                    type="checkbox"
                    id="gains_no"
                    checked={gainFilters.indexOf('gains_no') !== -1}
                    onChange={() => handleFilterClick('gain', 'gains_no')}
                  />
                  <label htmlFor="gains_no">No Gain</label>
                </li>
                <li>
                <input
                    type="checkbox"
                    id="gains_0_49"
                    checked={gainFilters.indexOf('gains_0_49') !== -1}
                    onChange={() => handleFilterClick('gain', 'gains_0_49')}
                  />
                  <label htmlFor="gains_0_49">Gain of 0-49</label>
                </li>
                <li>
                  <input
                  type="checkbox"
                  id="gains_50_99"
                  checked={gainFilters.indexOf('gains_50_99') !== -1}
                  onChange={() => handleFilterClick('gain', 'gains_50_99')}
                  />
                  <label htmlFor="gains_50_99">Gain of 50-99</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="gains_100_199"
                    checked={gainFilters.indexOf('gains_100_199') !== -1}
                    onChange={() => handleFilterClick('gain', 'gains_100_199')}
                  />
                  <label htmlFor="gains_100_199">Gain of 100-199</label>
                </li>
                <li>
                  <input
                  type="checkbox"
                  id="gain_200"
                  checked={gainFilters.indexOf('gains200') !== -1}
                  onChange={() => handleFilterClick('gain', 'gains200')}
                  />
                  <label htmlFor="gain_200">Gain of 200+</label>
                </li>
              </ul>
              <ul className="filter-form_checkbox-list">
                <li>
                  <input
                  type="checkbox"
                  id="current"
                  checked={statusFilters.indexOf('current') !== -1}
                  onChange={() => handleFilterClick('status', 'current')}
                  />
                  <label htmlFor="current">Current</label>
                </li>
                <li>
                  <input
                  type="checkbox"
                  id="archived"
                  checked={statusFilters.indexOf('archived') !== -1}
                  onChange={() => handleFilterClick('status', 'archived')}
                  />
                  <label htmlFor="archived">Archived</label>
                </li>
              </ul>
            </div>
          </div>
          <div className="row mb-0 d-flex align-items-center">
            <div className="col s12 m3" style={{marginRight: '-70px'}}>
              <div className="row mb-0">
                <div className="col s12 m9">
                  <div className="input-field">
                    <Dropdown
                      value={getValueFromState(sort, classSortOptions)}
                      onChange={this.handleSortChange}
                      options={classSortOptions}
                      label="Sort"
                      stateKey="sort"
                      dropdownKey="sort"
                      />
                  </div>
                </div>
              </div>
            </div>
              <div className="col s12 m3">
                <div className="input-field">
                <Dropdown
                value={getValueFromState(locations, locationOptions)}
                onChange={this.handleLocationChange}
                // onChange={(event) => this.handleFilterChange(event, 'locationFilter')}
                options={locationOptions}
                label="Location"
                stateKey="location"
                dropdownKey="location"
              />                </div>
              </div>
              <div className="col s12 m3" style={{height: '12px'}}>
                <div className="search-field input-field">
                <input
                type="search"
                id="name_search"
                className="input-control validate"
                name="name"
                value={name}
                onChange={(event) => this.handleFilterChange(event, 'name')}
                />

                  <button
                  type="submit"
                  className="search-button"
                  onClick={this.submitNameFilter}
                  >
                    <i className="icon-search"></i></button>
                  <label className={name.length ? "label active" : "label"} htmlFor="name_search">Search</label>
                </div>
              </div>
            <div className="col s12 m3">
              <div className="option-filters" style={{marginRight: '15px', marginTop: '25px'}}>
                <div className="option-item clear"><a href="#" onClick={onClearFilters}>Clear Filters</a></div>
                <a role="button" tabIndex="0" onClick={this.onToggleShowFilters}>
                  <div className="option-item">
                    <span
                      className="collapsible-header"
                    >
                      <span className="open-text">{open ? 'Hide Filters' : 'Show Filters'}</span>
                    </span>
                  </div>
                    </a>
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
  onSetFilteredState: PropTypes.func.isRequired,
  onUnsetFilteredState: PropTypes.func.isRequired,
  onSetSort: PropTypes.func.isRequired,
  sessionFilters: PropTypes.array.isRequired,
  gainFilters: PropTypes.array.isRequired,
  statusFilters: PropTypes.array.isRequired,
  handleFilterClick: PropTypes.func.isRequired,
  onClearFilters: PropTypes.func.isRequired,
  onSetLocationFilter: PropTypes.func.isRequired,
}
export default FilterSection;