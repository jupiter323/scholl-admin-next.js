import React from 'react';
import PropTypes from 'prop-types';

// const iconGeneration = (studentName) => {
//   const splitName = studentName.split('');
//   const beginningLetter = [splitName].indexOf[0];
//   const convertedClassName = `icon-letter-${beginningLetter}`;
//   return (
//     <i className={convertedClassName} />
//   )
// }

// eslint-disable-next-line react/prop-types
const TestScoreHeading = ({studentInformation: {firstName, lastName} }) => (
  <div className="header-row card-panel light-blue lighten-1 white-text">
    <div className="card-panel-row row">
      <div className="icon-col col s1">
       <i className="icon-letter-a"></i>
      </div>
      <div className="col s9">
        <div className="card-panel-text center-align">
          <div className="text-xlarge">2nd Practice Test</div>
          <div className="text-small">Version: SAT Practice Test #7</div>
        </div>
      </div>
      <div className="col s1 right-align">
        <div className="row icons-row">&nbsp;</div>
      </div>
    </div>
    <div className="header-row-block card-panel-row row">
      <div className="col s3">&nbsp;</div>
      <div className="col s9 right-align">
        <div><span className="name">{firstName}{lastName}</span></div>
      </div>
    </div>
  </div>
)

TestScoreHeading.propTypes = {
 studentInformation: PropTypes.object.isRequired,
};


export default TestScoreHeading;