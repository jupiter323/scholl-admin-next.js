import React from 'react';
import PropTypes from 'prop-types';
import Portal from '../../Portal';
import ClickOffComponentWrapper from '../../ClickOffComponentWrapper';

class LocationModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  render() {
    const { open, onClose } = this.props;
    return (
      <Portal selector="#modal">
        {open && (
          <div className="overlay">
            <ClickOffComponentWrapper onOuterClick={onClose}>
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
                          <div className="card-location-holder">
                            <ul className="checkbox-list">
                              <li>
                                <input type="checkbox" />
                                <div className="card-location card card-large">
                                  <div className="card-panel card-panel-location" style={{ backgroundColor: '#62b771', color: '#fff' }}>
                                    <span className="check-link icon-check"></span>
                                    <div className="card-panel-row row">
                                      <div className="col s10">
                                        <h3 className="h4 truncate">Tutor Doctor - Manhattan Beach, CA</h3>
                                        <h4 className="sub-title">Tutor Doctor</h4>
                                      </div>
                                      <div className="col s2 right-align">
                                        <span className="block-icon">
                                          <i className="icon-location"></i>
                                          <span className="text-icon">Location</span>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <input type="checkbox" />
                                <div className="card-location card card-large">
                                  <div className="card-panel card-panel-location" style={{ backgroundColor: '#62b771', color: '#fff' }}>
                                    <span className="check-link icon-check"></span>
                                    <div className="card-panel-row row">
                                      <div className="col s10">
                                        <h3 className="h4 truncate">Tutor Doctor - Manhattan Beach, CA</h3>
                                        <h4 className="sub-title">Tutor Doctor</h4>
                                      </div>
                                      <div className="col s2 right-align">
                                        <span className="block-icon">
                                          <i className="icon-location"></i>
                                          <span className="text-icon">Location</span>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <input type="checkbox" />
                                <div className="card-location card card-large">
                                  <div className="card-panel card-panel-location" style={{ backgroundColor: '#62b771', color: '#fff' }}>
                                    <span className="check-link icon-check"></span>
                                    <div className="card-panel-row row">
                                      <div className="col s10">
                                        <h3 className="h4 truncate">Tutor Doctor - Location Two</h3>
                                        <h4 className="sub-title">Tutor Doctor</h4>
                                      </div>
                                      <div className="col s2 right-align">
                                        <span className="block-icon">
                                          <i className="icon-location"></i>
                                          <span className="text-icon">Location</span>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <a href="#!" className="modal-close waves-effect waves-teal btn-flat pink-text text-darken-1">Cancel</a>
                      <a href="#" className="btn">Add</a>
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
};

export default LocationModal;
