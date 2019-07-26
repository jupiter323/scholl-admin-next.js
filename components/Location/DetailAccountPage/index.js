import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';

import Owner from './components/Owner';
import LocationContactInfo from './components/LocationContactInfo';
import LocationEmailSettings from './components/LocationEmailSettings';

import { nestedEditFieldValidation } from '../../utils/fieldValidation';

class DetailAccountPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      owner: {
        firstName: '',
        lastName: '',
        email: '',
      },
      originalLocation: {
        locationEmailSettings: {
          automatedEmailOrigin: '',
          automatedEmailSalutation: '',
        },
        locationContactInfo: {
          locationName: '',
          locationNickname: '',
          locationEmail: '',
          locationPhoneNumber: '',
          website: '',
          locationStreetAddress: '',
          locationCity: '',
          locationState: '',
          locationZip: '',
        },
      },
      updatedLocation: {
        locationEmailSettings: {
          automatedEmailOrigin: '',
          automatedEmailSalutation: '',
        },
        locationContactInfo: {
          locationName: '',
          locationNickname: '',
          locationEmail: '',
          locationPhoneNumber: '',
          website: '',
          locationStreetAddress: '',
          locationCity: '',
          locationState: '',
          locationZip: '',
        },
      },
      validation: {
        locationEmailSettings: {
          automatedEmailOriginAddress: true,
          automatedEmailSalutation: true,
        },
        locationContactInfo: {
          locationName: true,
          locationNickname: true,
          locationEmail: true,
        },
      },
    };
  }

  componentDidMount() {
    const { location: { id, owner, locationEmailSettings, locationContactInfo } = {} } = this.props;
    const updatedLocation = { id, locationEmailSettings, locationContactInfo };
    const { originalLocation: originalLocationState } = this.state;
    const originalLocation = update(originalLocationState, {
      $merge: updatedLocation,
    });
    this.setState({ originalLocation, updatedLocation, owner }); // eslint-disable-line
  }

  // TODO: This seems to be working well - confirm that only one isntance of this edit modal is opening on the location edit page
  // This resets the component state to reflect the details of the next location the location clicks on
  componentWillReceiveProps = (nextProps) => {
    if ((!this.state.originalLocation || nextProps.location.id !== this.state.originalLocation.id)) {
      const { location: { id, owner, locationEmailSettings, locationContactInfo } = {} } = nextProps;
      const updatedLocation = { id, locationEmailSettings, locationContactInfo };
      const { originalLocation: originalLocationState } = this.state;
      const originalLocation = update(originalLocationState, {
        $merge: nextProps.location,
      });
      this.setState({ originalLocation, updatedLocation, owner });
    }
  }

  // This function is passed into nestedCreateFieldValidation, it takes the result of the validation check and a callback function
  // The updated component validation state is set and then the callback is dispatched - in this case, the callback handles the toast warning at the container level
  onSetValidation = (validation, cb) => this.setState({ validation }, cb);

  // TODO: Clean this up once the react toast bugs are fixed. Just logging the validation response for now
  onSaveChanges = async (event) => {
    event.preventDefault();
    // const { onSavePassageChanges, onSaveChangesError, onSetPassageValidation } = this.props;
    const { updatedLocation } = this.state;
    const valid = await nestedEditFieldValidation(this.state, this.state.updatedLocation, this.onSetValidation, (validation) => console.warn('validation', validation));
    if (!valid) {
      // return onSaveChangesError();
      console.warn('not valid');
    }
    this.setState({ originalLocation: updatedLocation });
    // return onSavePassageChanges(updatedLocation);
  }

  initialLocationMount = () => this.state.originalLocation.id !== this.props.location.id;

  // We pull the value based on the field type then merge that updated key/value pair with the last version of component state
  handleDetailsChange = (event, name, section) => {
    const { updatedLocation: previousLocationState } = this.state;
    const value = event.target ? event.target.value : event;
    const updatedLocation = update(previousLocationState, {
      [section]: { $merge: { [name]: value } },
    });
    this.setState({ updatedLocation });
  }

  render() {
    // TODO: Update navbar info with actual sample location data
    const { updatedLocation: { locationEmailSettings: updatedLocationEmailSettings, locationContactInfo: updatedLocationContactInfo } } = this.state;
    const { location: { owner, locationEmailSettings, locationContactInfo } } = this.props;
    return (
      <div className="content-section">
        <div className="content-section-holder">
          <div className="row mb-0 d-flex-content large">
            <div className="col s12 l5">
              <Owner
                state={owner}
              />
              <LocationEmailSettings
                state={this.initialLocationMount() ? locationEmailSettings : updatedLocationEmailSettings}
                handleDetailsChange={this.handleDetailsChange}
              />
            </div>
            <LocationContactInfo
              state={this.initialLocationMount() ? locationContactInfo : updatedLocationContactInfo}
              handleDetailsChange={this.handleDetailsChange}
            />
          </div>
          <div className="btn-holder align-right-sm">
            <a
              href="#"
              className="btn"
              onClick={this.onSaveChanges}
            >
              Save
            </a>
          </div>
        </div>
      </div>
    );
  }
}

DetailAccountPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default DetailAccountPage;
