import React from "react";
import PropTypes from 'prop-types';

class InstructorToggleCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
      const { instructor,onToggleInstructorSelect } = this.props;
    return (
      <li onClick={() => onToggleInstructorSelect(instructor)}>
        <input type="checkbox" />
        <div className="owner-box card-panel card-panel-panel card-panel-large" style={{ backgroundColor: "#31837a",color: "#fff" }}>
          <span className="check-link icon-check" />
          <div className="card-panel-row row">
            <div className="col s10">
              <div className="user-block">
                <div className="user-circle" style={{ backgroundColor: "#0085ce",color: "#fff"}}>
                  <img src="./static/images/img-owner01.jpg" alt="image description"/>
                </div>
                <div className="user-text" style={{ color: "#fff" }}>
                  <h4 className="h3">{instructor.firstName}, {instructor.lastName}</h4>
                  <a href="mailto:jen.ownerly@gmail.com">
                    {instructor.email}
                  </a>
                </div>
              </div>
            </div>
            <div className="col s2 right-align">
              <span className="block-icon">
                <i className="icon-user" />
                <span className="text-icon">Instructor</span>
              </span>
            </div>
          </div>
        </div>
      </li>
    );
  }
}


InstructorToggleCard.propTypes = {
    instructor:PropTypes.object.isRequired,
    onToggleInstructorSelect: PropTypes.func.isRequired,
}

export default InstructorToggleCard;
