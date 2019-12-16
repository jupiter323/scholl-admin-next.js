import React from "react";
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import Dropdown from '../../../../FormComponents/Dropdown';
import getValueFromState from '../../../../utils/getValueFromState';
import locationOptions from '../../../../utils/locationOptions';
import sortOptions from '../../../../utils/sortOptions';

class FilterSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      name: '',
      activeFilters: [],
      location: "",
      sort: {},
    };
  }

  onHandleFilterClick = filter => {
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
  };

  // This function does two things - first, it changes the filter state regardless of the field it's coming from
  // If either location or sort filters are changed, we dispatch the appropriate action in ListPage to ensure the rendered instructors are filtered/sorted appropriately
  // eslint-disable-next-line consistent-return
  handleFilterChange = (event, name) => {
    const { onSetFilteredLocationState, onUnsetFilteredLocationState,onSetSort } = this.props;
    const value = event.target ? event.target.value : event;
    const updatedState = update(this.state, {
      $merge: { [name]: value },
    });
    this.setState(updatedState);
    if (name === 'location') {
      if (event === '') {
        return onUnsetFilteredLocationState();
      }
      return onSetFilteredLocationState(event);
    }else if (name === 'sort') {
      return onSetSort(event);
    }
  }

  // Strips the entered name of any spaces and capitalizing and fires off the ListPage event that filters the instructors
  submitNameFilter = () => {
    const { onSetFilteredState, onUnsetFilteredState } = this.props;
    const { name } = this.state;
    if (name === '') {
      onUnsetFilteredState();
    }
    const transformedName = name.replace(/\s/g, "").toLowerCase();
    onSetFilteredState(transformedName);
  }

  onClearFilters = () => this.setState({ activeFilters: [] })

  // eslint-disable-next-line consistent-return
  onToggleShowFilters = () => this.setState(({ open }) => ({ open: !open }));

  render() {
    const { open, activeFilters,location,sort } = this.state;
    return (
      <div className="filter-form-holder">
        <ul className="collapsible expandable">
          <li>
            <div
              className="collapsible-body"
              style={open ? { display: "block" } : { display: "none" }}
            >
              <div className="filter-form_checkbox-list-holder justify-center">
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                        type="checkbox"
                        id="sessions_this_week"
                        checked={ activeFilters.indexOf("sessions_this_week") !== -1}
                        onChange={() => this.onHandleFilterClick("sessions_this_week")}
                    />
                    <label htmlFor="sessions_this_week">
                      Sessions This Week
                    </label>
                  </li>
                  <li>
                    <input
                        type="checkbox"
                        id="session_today"
                        checked={ activeFilters.indexOf("session_today") !== -1}
                        onChange={() => this.onHandleFilterClick("session_today")}
                    />
                    <label htmlFor="session_today">Session Today</label>
                  </li>
                  <li>
                    <input 
                        type="checkbox"
                        id="sessions_no"
                        checked={ activeFilters.indexOf("sessions_no") !== -1}
                        onChange={() => this.onHandleFilterClick("sessions_no")}
                    />
                    <label htmlFor="sessions_no">No Sessions Scheduled</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input
                        type="checkbox"
                        id="gain_no"
                        checked={ activeFilters.indexOf("gain_no") !== -1}
                        onChange={() => this.onHandleFilterClick("gain_no")}
                    />
                    <label htmlFor="gain_no">No Gain</label>
                  </li>
                  <li>
                    <input 
                        type="checkbox"
                        id="gain_0_49"
                        checked={ activeFilters.indexOf("gain_0_49") !== -1}
                        onChange={() => this.onHandleFilterClick("gain_0_49")}
                    />
                    <label htmlFor="gain_0_49">Gain of 0-49</label>
                  </li>
                  <li>
                    <input 
                        type="checkbox"
                        id="gain_50_100"
                        checked={ activeFilters.indexOf("gain_50_100") !== -1}
                        onChange={() => this.onHandleFilterClick("gain_50_100")}
                    />
                    <label htmlFor="gain_50_100">Gain of 50-100</label>
                  </li>
                  <li>
                    <input
                        type="checkbox"
                        id="gain_100_199"
                        checked={ activeFilters.indexOf("gain_100_199") !== -1}
                        onChange={() => this.onHandleFilterClick("gain_100_199")}
                    />
                    <label htmlFor="gain_100_199">Gain of 100-199</label>
                  </li>
                  <li>
                    <input 
                        type="checkbox" 
                        id="gain_200"
                        checked={ activeFilters.indexOf("gain_200") !== -1}
                        onChange={() => this.onHandleFilterClick("gain_200")} 
                    />
                    <label htmlFor="gain_200">Gain of 200+</label>
                  </li>
                </ul>
                <ul className="filter-form_checkbox-list">
                  <li>
                    <input 
                        type="checkbox" 
                        id="current"
                        checked={ activeFilters.indexOf("current") !== -1}
                        onChange={() => this.onHandleFilterClick("current")} 
                    />
                    <label htmlFor="current">Current</label>
                  </li>
                  <li>
                    <input 
                        type="checkbox" 
                        id="archived"
                        checked={ activeFilters.indexOf("archived") !== -1}
                        onChange={() => this.onHandleFilterClick("archived")}  
                    />
                    <label htmlFor="archived">Archived</label>
                  </li>
                </ul>
              </div>
              <div className="d-flex row mb-0 justify-center">
                <div className="col s12 m3">
                  <div className="input-field">
                    <Dropdown
                        value={getValueFromState(location, locationOptions)}
                        onChange={(event) => this.handleFilterChange(event, 'location')}
                        options={locationOptions}
                        label="Location"
                        stateKey="location"
                        dropdownKey="location"
                    />
                  </div>
                </div>
                <div className="col s12 m3">
                  <div className="search-field input-field" style  = {{marginTop:"50px"}}>
                    <input
                      type="search"
                      id="name_search"
                      className="input-control  validate"
                    />
                    <button type="submit" className="search-button" onClick={this.submitNameFilter}>
                      <i className="icon-search" />
                    </button>
                    <label className="label" htmlFor="name_search">
                      Search
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-0 d-flex align-items-center">
              <div className="col s12 l4">
                <div className="row mb-0">
                  <div className="col s12 xl7">
                    <div className="input-field">
                      <Dropdown
                        value={getValueFromState(sort, sortOptions)}
                        onChange={(event) => this.handleFilterChange(event, 'sort')}
                        options={sortOptions}
                        label="Sort"
                        stateKey="sort"
                        dropdownKey="sort"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12 l4 hide-on-med-and-down show-on-large">
                &nbsp;
              </div>
              <div className="col s12 l4">
                <div className="option-filters" style = {{marginTop:"50px"}}>
                  <div className="option-item clear">
                    <a href="#" onClick={this.onClearFilters}>Clear Filters</a>
                  </div>
                  <div className="option-item">
                    <span
                      className="collapsible-header"
                      onClick={this.onToggleShowFilters}
                    >
                      <span className="open-text">
                        {open ? "Hide Filters" : "Open Filters"}
                      </span>
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

FilterSection.propTyes = {
    onSetSort:PropTypes.func.isRequired,
    onSetFilteredState:PropTypes.func.isRequired,
    onUnsetFilteredState:PropTypes.func.isRequired,
    onSetFilteredLocationState: PropTypes.func.isRequired,
    onUnsetFilteredLocationState: PropTypes.func.isRequired,
}

export default FilterSection;
