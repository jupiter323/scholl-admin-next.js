/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';

import UserInfo from './components/UserInfo';
import ContactInfo from './components/ContactInfo';
import UserLocation from './components/UserLocation';

// eslint-disable-next-line react/prefer-stateless-function
class DetailAccountPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationModalOpen: false,
      originalUser: {
        userInfo: {
          firstName: '',
          lastName: '',
          email: '',
          gender: '',
        },
        contactInfo: {
          phone: '',
          streetAddress: '',
          city: '',
          state: '',
          zip: '',
        },
        userLocation: {
          locations: [],
        },
      },
      updatedUser: {
        userInfo: {
          firstName: '',
          lastName: '',
          email: '',
          gender: '',
        },
        contactInfo: {
          phone: '',
          streetAddress: '',
          city: '',
          state: '',
          zip: '',
        },
        userLocation: {
          locations: [],
        },
      },
    };
  }

  componentDidMount() {
    const { user: { id, userInfo, contactInfo, userLocation } = {} } = this.props;
    const updatedUser = { id, userInfo, contactInfo, userLocation };
    const { originalUser: originalUserState } = this.state;
    const originalUser = update(originalUserState, {
      $merge: updatedUser,
    });
    this.setState({ originalUser, updatedUser }); // eslint-disable-line
  }

  // TODO: This seems to be working well - confirm that only one isntance of this edit modal is opening on the user edit page
  // This resets the component state to reflect the details of the next user the user clicks on
  componentWillReceiveProps = (nextProps) => {
    if ((!this.state.originalUser || nextProps.user.id !== this.state.originalUser.id)) {
      const { user: { id, userInfo, contactInfo, userLocation } = {} } = nextProps;
      const updatedUser = { id, userInfo, contactInfo, userLocation };
      const { originalUser: originalUserState } = this.state;
      const originalUser = update(originalUserState, {
        $merge: nextProps.user,
      });
      this.setState({ originalUser, updatedUser });
    }
  }

  onOpenLocationModal = () => this.setState({ locationModalOpen: true });
  onCloseLocationModal = () => this.setState({ locationModalOpen: false });

  initialUserMount = () => this.state.originalUser.id !== this.props.user.id;

  // We pull the value based on the field type then merge that updated key/value pair with the last version of component state
  handleDetailsChange = (event, name, section) => {
    const { updatedUser: previousUserState } = this.state;
    const value = event.target ? event.target.value : event;
    const updatedUser = update(previousUserState, {
      [section]: { $merge: { [name]: value } },
    });
    this.setState({ updatedUser });
  }

  render() {
    const { locationModalOpen, updatedUser: { userInfo: updatedUserInfo, contactInfo: updatedContactInfo, userLocation: updatedUserLocation } } = this.state;
    const { user: { userInfo, contactInfo, userLocation } } = this.props;
    return (
      <React.Fragment>
        <div className="content-section">
          <div className="content-section-holder">
            <div className="row mb-0 d-flex-content large">
              <div className="col s12 l5">
                <UserInfo
                  state={this.initialUserMount() ? userInfo : updatedUserInfo}
                  handleDetailsChange={this.handleDetailsChange}
                />
                <ContactInfo
                  state={this.initialUserMount() ? contactInfo : updatedContactInfo}
                  handleDetailsChange={this.handleDetailsChange}
                />
              </div>
              <UserLocation />
            </div>
            <div className="btn-holder align-right-sm">
              <a href="#" className="btn">Save</a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

DetailAccountPage.propTypes = {
  user: PropTypes.object,
};

export default DetailAccountPage;
