import React from 'react';
import PropTypes from 'prop-types';

const LocationRow = ({ location: { locationContactInfo: { locationName, locationNickname } }, index, dropdownIndex, dropdownIsOpen, handleDropdownClick, onOpenEditLocationModal, onOpenDeleteModal }) => (
  <div className="card-main card-location card card-large">
    <div className="card-panel card-panel-location" style={{ backgroundColor: '#62b771', color: '#fff' }}>
      <div className="card-panel-row row">
        <div className="col s9">
          <h3 className="h4 truncate">{locationName}</h3>
          <h4 className="sub-title">{locationNickname}</h4>
        </div>
        <div className="col s3">
          <div className="row icons-row">
            <div className="col">
              <span className="block-icon">
                <i className="icon-location"></i>
                <span className="text-icon">Location</span>
              </span>
            </div>
            <div className="dropdown-block col">
              <a
                href="#"
                onClick={(event) => handleDropdownClick(event, index)}
                className="dropdown-trigger btn"
                data-target="dropdown105"
              >
                <i className="material-icons dots-icon">more_vert</i>
              </a>
              <If condition={dropdownIsOpen && dropdownIndex === index}>
                <ul id="dropdown105" className="dropdown-content dropdown-wide" style={{ display: 'block', width: '103.991px', left: '116.974px', top: '7.99716px', height: '80.3409px', transformOrigin: '0px 0px 0px', opacity: '1', transform: 'scaleX(1) scaleY(1)' }}>
                  <li>
                    <a
                      href="#"
                      onClick={onOpenEditLocationModal}
                      className="modal-trigger link-block"
                    >
                      Edit
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                    >
                      Clone
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={onOpenDeleteModal}
                    >
                      Delete
                    </a>
                  </li>
                </ul>
              </If>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

LocationRow.propTypes = {
  location: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  dropdownIndex: PropTypes.number,
  dropdownIsOpen: PropTypes.bool.isRequired,
  handleDropdownClick: PropTypes.func.isRequired,
  onOpenDeleteModal: PropTypes.func.isRequired,
  onOpenEditLocationModal: PropTypes.func.isRequired,
};

export default LocationRow;
