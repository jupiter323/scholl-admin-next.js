/* eslint-disable jsx-a11y/img-redundant-alt */
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
              <div id="modal_Instructor1" className="modal modal-custom modal-location">
                <form action="#" className="custom-form">
                  <fieldset>
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
                              <input type="search" id="name_search" className="input-control  validate" placeholder="Smith" />
                              <button type="submit" className="search-button"><i className="icon-search"></i></button>
                              <label className="label" htmlFor="name_search">Search</label>
                            </div>
                            <div className="input-field">
                              <select id="location_search">
                                <option>Any</option>
                                <option>option</option>
                                <option>option</option>
                              </select>
                              <label className="label" htmlFor="location_search">Location</label>
                            </div>
                          </div>
                          <div className="box-scrollable">
                            <div className="height-40 jcf-scrollable">
                              <div className="card-location-holder">
                                <ul className="checkbox-list">
                                  <li>
                                    <input type="checkbox" />
                                    <div className="card-location card">
                                      <div className="owner-box card-panel card-panel-location" style={{ backgroundColor: '#31837a', color: '#fff' }}>
                                        <span className="check-link icon-check"></span>
                                        <div className="åcard-panel-row row">
                                          <div className="col s10">
                                            <div className="user-block">
                                              <div className="user-circle" style={{ backgroundColor: '#0085ce', color: '#fff' }}>
                                                <img src="images/img-owner01.jpg" alt="image description" />
                                              </div>
                                              <div className="user-text" style={{ color: '#fff' }}>
                                                <h4 className="h3">Smith, John</h4>
                                                <a href="mailto:&#106;&#101;&#110;&#046;&#111;&#119;&#110;&#101;&#114;&#108;&#121;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">&#106;&#101;&#110;&#046;&#111;&#119;&#110;&#101;&#114;&#108;&#121;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;</a>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col s2 right-align">
                                            <span className="block-icon">
                                              <i className="icon-user"></i>
                                              <span className="text-icon">Instructor</span>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <input type="checkbox" />
                                    <div className="card-location card">
                                      <div className="owner-box card-panel card-panel-location" style={{ backgroundColor: '#31837a', color: '#fff' }}>
                                        <span className="check-link icon-check"></span>
                                        <div className="card-panel-row row">
                                          <div className="col s10">
                                            <div className="user-block">
                                              <div className="user-circle" style={{ backgroundColor: '#0085ce', color: '#fff' }}>
                                                <img src="images/img-owner01.jpg" alt="image description" />
                                              </div>
                                              <div className="user-text" style={{ color: '#fff' }}>
                                                <h4 className="h3">Smith, John</h4>
                                                <a href="mailto:&#106;&#101;&#110;&#046;&#111;&#119;&#110;&#101;&#114;&#108;&#121;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">&#106;&#101;&#110;&#046;&#111;&#119;&#110;&#101;&#114;&#108;&#121;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;</a>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col s2 right-align">
                                            <span className="block-icon">
                                              <i className="icon-user"></i>
                                              <span className="text-icon">Instructor</span>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                    <input type="checkbox" />
                                    <div className="card-location card">
                                      <div className="owner-box card-panel card-panel-location" style={{ backgroundColor: '#31837a', color: '#fff' }}>
                                        <span className="check-link icon-check"></span>
                                        <div className="card-panel-row row">
                                          <div className="col s10">
                                            <div className="user-block">
                                              <div className="user-circle" style={{ backgroundColor: '#0085ce', color: '#fff' }}>
                                                <img src="images/img-owner01.jpg" alt="image description" />
                                              </div>
                                              <div className="user-text" style={{ color: '#fff' }}>
                                                <h4 className="h3">Smith, John</h4>
                                                <a href="mailto:&#106;&#101;&#110;&#046;&#111;&#119;&#110;&#101;&#114;&#108;&#121;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">&#106;&#101;&#110;&#046;&#111;&#119;&#110;&#101;&#114;&#108;&#121;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;</a>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col s2 right-align">
                                            <span className="block-icon">
                                              <i className="icon-user"></i>
                                              <span className="text-icon">Instructor</span>
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
                  </fieldset>
                </form>
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
