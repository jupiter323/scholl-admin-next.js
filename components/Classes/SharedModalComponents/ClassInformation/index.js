import React from "react";
import PropTypes from 'prop-types';


class ClassInformation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {handleDetailsChange,state:{className}} = this.props;
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
                  value = {className}
                  onChange={(event) => handleDetailsChange(event, 'className', 'classInfo')}
                />
                <label className={className.length ? 'label active' : 'label'} htmlFor="class_name">
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

ClassInformation.propTypes = {
  handleDetailsChange:PropTypes.func.isRequired,
  state:PropTypes.object.isRequired,
}

export default ClassInformation;
