import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';

import Portal from '../../Portal';
import ClickOffComponentWrapper from '../../ClickOffComponentWrapper';
import LocationToggleCard from './components/LocationToggleCard';

import sampleLocations from '../../utils/sampleLocations';

class LocationModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      locations: sampleLocations,
      selectedLocations: [],
    };
  }

  onCloseModal = () => this.setState({ selectedLocations: [] }, this.props.onClose)

  onToggleLocationSelect = (location) => {
    const { selectedLocations } = this.state;
    if (selectedLocations.indexOf(location) === -1) {
      this.setState({ selectedLocations: [...selectedLocations, location] });
    } else {
      const updatedLocations = update(selectedLocations, {
        $splice: [[selectedLocations.indexOf(location), 1]],
      });
      this.setState({ selectedLocations: updatedLocations });
    }
  }

  onSaveLocationChanges = () => {
    const { selectedLocations } = this.state;
    const { handleLocationsChange } = this.props;
    handleLocationsChange(selectedLocations, 'location', 'locations');
    this.onCloseModal();
  }

  render() {
    const { open } = this.props;
    const { locations } = this.state;
    return (
      <Portal selector="#modal">
        {open && (
          <div className="overlay">
            <ClickOffComponentWrapper onOuterClick={this.onCloseModal}>
              <div id="modal_Location1" className="modal modal-custom modal-location">
                <div className="card-modal card">
                  <div className="owner-box card-panel card-panel-title" style={{ backgroundColor: '#00456b', color: '#fff' }}>
                    <div className="card-panel-row row">
                      <div className="col">
                        <h3>Select Locations(s)</h3>
                      </div>
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="card-body">
                      <span className="hint">Click to select or deselect.</span>
                      <div className="box-scrollable">
                        <div className="height-40 jcf-scrollable">
                          <div className="card-location-holder" style={{ height: '100%', overflowY: 'scroll' }}>
                            <ul className="checkbox-list">
                              {locations.map(location => (
                                <LocationToggleCard
                                  key={location.locationName}
                                  location={location}
                                  onToggleLocationSelect={this.onToggleLocationSelect}
                                />
                              ))}
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
                        onClick={this.onSaveLocationChanges}
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
              h4 {
                font-size: 2.28rem;
                line-height: 110%;
                margin: 1.52rem 0 .912rem 0;
                margin-top: 0;
              }
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

LocationModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  handleLocationsChange: PropTypes.func.isRequired,
};

export default LocationModal;
