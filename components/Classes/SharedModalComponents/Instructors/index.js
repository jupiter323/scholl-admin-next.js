import React from "react";
import PropTypes from 'prop-types';
import InstructorCard from './components/InstructorCard';


class Instructors extends React.Component {
  constructor(props) {
    super(props);
  }

  mapInstructors = () => {
    const { instructors,onRemoveInstructor } = this.props;
    return instructors.map((instructor,index)=>(
      <InstructorCard
        key = {index}
        index = {index}
        instructor = {instructor}
        onRemoveInstructor = {() => onRemoveInstructor(index)}
      />
    ))
  }

  render() {
    const { onOpenInstructorModal } = this.props;
    return (
      <div className="card-block">
        <h3>Instructor(s)</h3>
        {/* card */}
        <div className="card-main card card-instructor">
          <div className="card-content">
            <div className="text-block">
              <p>
                Add one or more instructors to the list below. Each instructor
                can manage the coursework.
              </p>
            </div>
            <div className="box-scrollable">
              <div className="height-360 jcf-scrollable">
                <div className="card-location-holder" style = {{height:"320px",overflowY:"scroll"}}>
                  {this.mapInstructors()}
                </div>
              </div>
            </div>
            <div className="card-footer right-align">
              <a href="#modal_Instructor1" className="modal-trigger link-block" onClick = {onOpenInstructorModal}>
                Add Instructor
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Instructors.propTypes = {
  onOpenInstructorModal:PropTypes.func.isRequired,
  instructors:PropTypes.array.isRequired,
  onRemoveInstructor:PropTypes.func.isRequired,
}

export default Instructors;
