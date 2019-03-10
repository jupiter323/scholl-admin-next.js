import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';

import LocationsToManage from './components/LocationsToManage';
import InstructorsToManage from './components/InstructorsToManage';
import FullAccess from './components/FullAccess';

import LocationModal from '../../Location/components/LocationModal';
import InstructorModal from '../../Instructor/components/InstructorModal';

class DetailsManagementPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationModalOpen: false,
      instructorModalOpen: false,
      originalUser: {
        locationsToManage: {
          locations: [],
        },
        instructorsToManage: {
          instructors: [],
        },
        fullAccess: false,
      },
      updatedUser: {
        locationsToManage: {
          locations: [],
        },
        instructorsToManage: {
          instructors: [],
        },
        fullAccess: false,
      },
    };
  }

  componentDidMount() {
    const { user: { id, locationsToManage, instructorsToManage, fullAccess } = {} } = this.props;
    const updatedUser = { id, locationsToManage, instructorsToManage, fullAccess };
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
      const { user: { id, locationsToManage, instructorsToManage, fullAccess } = {} } = nextProps;
      const updatedUser = { id, locationsToManage, instructorsToManage, fullAccess };
      const { originalUser: originalUserState } = this.state;
      const originalUser = update(originalUserState, {
        $merge: nextProps.user,
      });
      this.setState({ originalUser, updatedUser });
    }
  }

  onOpenLocationModal = () => this.setState({ locationModalOpen: true });
  onCloseLocationModal = () => this.setState({ locationModalOpen: false });

  onOpenInstructorModal = () => this.setState({ instructorModalOpen: true });
  onCloseInstructorModal = () => this.setState({ instructorModalOpen: false });

  onRemoveOption = (optionIndex, section, array) => {
    const updatedUser = update(this.state.updatedUser, {
      [section]: {
        [array]: {
          $splice: [[optionIndex, 1]],
        },
      },
    });
    this.setState({ updatedUser });
  }

  handleOptionsChange = (selectedOptions, section, array) => {
    const updatedUser = update(this.state.updatedUser, {
      [section]: {
        [array]: {
          $set: selectedOptions,
        },
      },
    });
    this.setState({ updatedUser });
  }

  initialUserMount = () => this.state.originalUser.id !== this.props.user.id;

  render() {
    const { locationModalOpen, instructorModalOpen, updatedUser: { locationsToManage: updatedLocations, instructorsToManage: updatedInstructors } } = this.state;
    const { user: { instructorsToManage, locationsToManage } } = this.props;
    return (
      <React.Fragment>
        <LocationModal
          open={locationModalOpen}
          onClose={this.onCloseLocationModal}
          handleLocationsChange={(selectedLocations) => this.handleOptionsChange(selectedLocations, 'locationsToManage', 'locations')}
        />
        <InstructorModal
          open={instructorModalOpen}
          onClose={this.onCloseInstructorModal}
          handleInstructorsChange={(selectedInstructors) => this.handleOptionsChange(selectedInstructors, 'instructorsToManage', 'instructors')}
        />
        <div className="content-section">
          <div className="content-section-holder">
            <div className="row mb-0 d-flex-content large">
              <LocationsToManage
                state={this.initialUserMount() ? locationsToManage : updatedLocations}
                onOpenLocationModal={this.onOpenLocationModal}
                onRemoveLocation={this.onRemoveOption}
              />
              <InstructorsToManage
                state={this.initialUserMount() ? instructorsToManage : updatedInstructors}
                onOpenInstructorModal={this.onOpenInstructorModal}
                onRemoveInstructor={this.onRemoveOption}
              />
              <FullAccess />
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

DetailsManagementPage.propTypes = {
  user: PropTypes.object,
};

export default DetailsManagementPage;
