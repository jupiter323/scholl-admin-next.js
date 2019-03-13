/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';

import Portal from '../../../Portal';
import ClickOffComponentWrapper from '../../../ClickOffComponentWrapper';
import Dropdown from '../../../FormComponents/Dropdown';
import getValueFromState from '../../../utils/getValueFromState';

import InstructorToggleCard from './components/InstructorToggleCard';
import sampleInstructors from '../../../utils/sampleInstructors';

const locationOptions = [
  {
    label: 'Any',
    value: 'all',
  },
  {
    label: 'Location 2',
    value: 'location2',
  },
  {
    label: 'Location 3',
    value: 'location3',
  },
];

class InstructorModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      instructors: sampleInstructors,
      location: 'all',
      searchTerm: '',
      selectedInstructors: [],
    };
  }

  onCloseModal = () => this.setState({ selectedInstructors: [] }, this.props.onClose)

  onToggleInstructorSelect = (instructor) => {
    const { selectedInstructors } = this.state;
    if (selectedInstructors.indexOf(instructor) === -1) {
      this.setState({ selectedInstructors: [...selectedInstructors, instructor] });
    } else {
      const updatedInstructors = update(selectedInstructors, {
        $splice: [[selectedInstructors.indexOf(instructor), 1]],
      });
      this.setState({ selectedInstructors: updatedInstructors });
    }
  }

  onSetLocation = (location) => this.setState({ location })

  onSaveInstructorChanges = () => {
    const { selectedInstructors } = this.state;
    const { handleInstructorsChange } = this.props;
    handleInstructorsChange(selectedInstructors);
    this.onCloseModal();
  }

  handleSearchChange = ({ target: { value: searchTerm } }) => this.setState({ searchTerm })

  renderInstructors = () => {
    const { location, instructors: allInstructors, searchTerm } = this.state;
    let instructors;
    if (searchTerm) {
      instructors = allInstructors.reduce((finalArr, currentInstructor) => {
        const instructorName = `${currentInstructor.firstName}${currentInstructor.lastName}`.toLowerCase();
        if (instructorName.indexOf(searchTerm) !== -1) {
          finalArr.push(currentInstructor);
        }
        return finalArr;
      }, []);
    } else if (location === 'all') {
      instructors = allInstructors;
    } else {
      instructors = allInstructors.filter(instructor => instructor.location === location);
    }
    return instructors.map(instructor => (
      <InstructorToggleCard
        key={instructor.email}
        instructor={instructor}
        onToggleInstructorSelect={this.onToggleInstructorSelect}
      />
    ));
  }

  render() {
    const { open } = this.props;
    const { location, searchTerm } = this.state;
    return (
      <Portal selector="#modal">
        {open && (
          <div className="overlay">
            <ClickOffComponentWrapper onOuterClick={this.onCloseModal}>
              <div id="modal_Instructor1" className="modal modal-custom modal-location">
                <div className="card-modal card">
                  <div className="owner-box card-panel card-panel-title" style={{ backgroundColor: '#00456b', color: '#fff' }}>
                    <div className="card-panel-row row">
                      <div className="col">
                        <h3>Select Instructor(s)</h3>
                      </div>
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="card-body">
                      <span className="hint">Click to select or deselect.</span>
                      <div className="row-holder">
                        <div className="search-field input-field">
                          <input
                            type="search"
                            id="name_search"
                            className="input-control validate"
                            name="nameSearch"
                            value={searchTerm}
                            onChange={this.handleSearchChange}
                          />
                          <button type="submit" className="search-button"><i className="icon-search"></i></button>
                          <label className={searchTerm.length ? 'label active' : 'label'} htmlFor="name_search">Search</label>
                        </div>
                        <div className="input-field">
                          <Dropdown
                            value={getValueFromState(location, locationOptions)}
                            onChange={this.onSetLocation}
                            options={locationOptions}
                            label="State"
                            stateKey="state"
                            dropdownKey="state"
                          />
                        </div>
                      </div>
                      <div className="box-scrollable">
                        <div className="height-40 jcf-scrollable">
                          <div className="card-location-holder" style={{ height: '100%', overflowY: 'scroll' }}>
                            <ul className="checkbox-list">
                              {this.renderInstructors()}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <a
                        href="#"
                        onClick={this.onCloseModal}
                        className="modal-close waves-effect waves-teal btn-flat pink-text text-darken-1"
                      >
                        Cancel
                      </a>
                      <a
                        href="#"
                        className="btn"
                        onClick={this.onSaveInstructorChanges}
                      >
                        Add
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ClickOffComponentWrapper>
          </div>
        )}
        <style jsx>
          {`
            .overlay {
              position: fixed;
              background-color: rgba(0, 0, 0, 0.7);
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              z-index: 999;
            }
            .card-modal {
              margin: 0;
              border-radius: 6px;
            }
            #modal_Location1 {
              border-radius: 6px;
            }
            .modal {
              display: block;
              background-color: white;
              position: absolute;
              top: 10%;
              right: 10%;
              left: 10%;
              box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);
            }
            .modal-custom {
              opacity: 1;
              visibility: visible;
            }
            .modal-footer {
              background-color: white;
            }
          `}
        </style>
      </Portal>
    );
  }
}

InstructorModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  handleInstructorsChange: PropTypes.func.isRequired,
};

export default InstructorModal;
