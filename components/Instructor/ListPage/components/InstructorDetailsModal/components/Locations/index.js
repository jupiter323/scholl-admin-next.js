import React from 'react';
// import PropTypes from 'prop-types';

const Locations = () => (
  <div className="col s12 l6">
    {/* <!-- form-panel --> */}
    <div className="card-block">
      <h3>Location(s)</h3>
      {/* <!-- card --> */}
      <div className="card-main card-location card card-large">
        <div className="card-panel card-panel-location" style={{ backgroundColor: '#62b771', color: '#fff' }}>
          <div className="card-panel-row row">
            <div className="col s9">
              <h3 className="h4 truncate">Tutor Doctor</h3>
              <h4 className="sub-title">Tutor Doctor - Austin, TX</h4>
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
                  {/* <!-- Dropdown Trigger --> */}
                  <a className="dropdown-trigger btn" href="#" data-target="dropdown105"><i className="material-icons dots-icon">more_vert</i></a>
                  {/* <!-- Dropdown Structure --> */}
                  <ul id="dropdown105" className="dropdown-content dropdown-wide">
                    <li>
                      {/* <!-- Modal Trigger --> */}
                      <a href="#modal_location_edit" className="modal-trigger link-block">Edit</a>
                    </li>
                    <li><a href="#!">Clone</a></li>
                    <li><a href="#!">Delete</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- card --> */}
      <div className="card-main card-location card card-large">
        <div className="card-panel card-panel-location" style={{ backgroundColor: '#62b771', color: '#fff' }}>
          <div className="card-panel-row row">
            <div className="col s9">
              <h3 className="h4 truncate">Tutor Doctor</h3>
              <h4 className="sub-title">Tutor Doctor - Dallas, TX</h4>
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
                  {/* <!-- Dropdown Trigger --> */}
                  <a className="dropdown-trigger btn" href="#" data-target="dropdown106"><i className="material-icons dots-icon">more_vert</i></a>
                  {/* <!-- Dropdown Structure --> */}
                  <ul id="dropdown106" className="dropdown-content dropdown-wide">
                    <li>
                      {/* <!-- Modal Trigger --> */}
                      <a href="#modal_location_edit" className="modal-trigger link-block">Edit</a>
                    </li>
                    <li><a href="#!">Clone</a></li>
                    <li><a href="#!">Delete</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- card add block --> */}
      <div className="add-box">
        <div className="add-box-holder">
          <a className="btn-floating waves-effect waves-light green lighten-1"><i className="material-icons">add</i></a>
        </div>
      </div>
    </div>
  </div>
);

Locations.propTypes = {

};

export default Locations;
