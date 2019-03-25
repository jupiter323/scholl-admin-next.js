import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';

import Dropdown from '../../../../FormComponents/Dropdown';
import getValueFromState from '../../../../utils/getValueFromState';
import locationOptions from '../../../../utils/locationOptions';

class FilterSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      location: '',
      sort: '',
    };
  }

  handleFilterChange = (event, name) => {
    let value;
    if (event.target) {
      value = event.target.value;
    } else {
      value = event;
    }
    const updatedState = update(this.state, {
      $merge: { [name]: value },
    });
    this.setState(updatedState);
  }

  submitNameFilter = () => {
    const { onSetFilteredState, onUnsetFilteredState } = this.props;
    const { name } = this.state;
    if (name === '') {
      onUnsetFilteredState();
    }
    const transformedName = name.replace(/\s/g, "").toLowerCase();
    onSetFilteredState(transformedName);
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const { name, location, sort } = this.state;
    return (
      <div className="filter-inputs-holder">
        <div className="row mb-0">
          <div className="col s12 m4 l3">
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
                <i className="icon-search"></i>
              </button>
              <label className={name.length ? 'label active' : 'label'} htmlFor="name_search">Search</label>
            </div>
          </div>
          <div className="col s12 m4 l3">
            <div className="input-field">
              <Dropdown
                value={getValueFromState(location, locationOptions)}
                onChange={(event) => this.handleFilterChange(event, 'location')}
                options={locationOptions}
                label="Location"
                stateKey="location"
                dropdownKey="location"
              />
              {/* <select id="location_search">
                <option>Any</option>
                <option>Option</option>
                <option>Option</option>
              </select>
              <label className="label" htmlFor="location_search">Location</label> */}
            </div>
          </div>
          <div className="col s12 m4 l3">
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
    );
  }
}

FilterSection.propTypes = {
  onSetFilteredState: PropTypes.func.isRequired,
  onUnsetFilteredState: PropTypes.func.isRequired,
};

export default FilterSection;
