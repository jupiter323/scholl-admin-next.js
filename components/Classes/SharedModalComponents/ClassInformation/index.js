import React from "react";

class ClassInformation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card-block">
        <h3>Class Information</h3>
        <div className="card-main card">
          <div className="card-content">
            <div className="row mb-0">
              <div className="input-field col s12">
                <input
                  type="text"
                  id="class_name"
                  defaultValue="March 2018 Class"
                />
                <label className="label" htmlFor="class_name">
                  Class Name
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClassInformation;
