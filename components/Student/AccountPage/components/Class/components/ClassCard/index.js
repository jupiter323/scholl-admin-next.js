import React from 'react';
import PropTypes from 'prop-types';

const ClassCard = ({ course: { className, classLocation }, index, onRemoveClass }) => (
  <div className="card-panel card-panel-panel card-panel-large" style={{ backgroundColor: '#62b771', color: '#fff' }}>
    <a
      href="#"
      className="close-link icon-close-thin"
      onClick={() => onRemoveClass(index, 'location', 'locations')}
    ></a>
    <div className="card-panel-row row">
      <div className="col s10">
        <h3 className="h4 truncate">{className}</h3>
        <h4 className="sub-title">{classLocation}</h4>
      </div>
      <div className="col s2 right-align">
        <span className="block-icon">
          <i className="icon-location"></i>
          <span className="text-icon">Class</span>
        </span>
      </div>
    </div>
  </div>
);

ClassCard.propTypes = {
  course: PropTypes.object,
  index: PropTypes.number.isRequired,
  onRemoveClass: PropTypes.func.isRequired,
};

export default ClassCard;
