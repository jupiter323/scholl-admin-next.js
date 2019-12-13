import React from "react";

class LocationCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="card-panel card-panel-panel card-panel-large"
        style={{ backgroundColor: "#62b771", color: "#fff" }}
      >
        <a href="#" className="close-link icon-close-thin" />
        <div className="card-panel-row row">
          <div className="col s10">
            <h3 className="h4 truncate">Location Nickname</h3>
            <h4 className="sub-title">Location Name</h4>
          </div>
          <div className="col s2 right-align">
            <span className="block-icon">
              <i className="icon-location" />
              <span className="text-icon">Location</span>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default LocationCard;
