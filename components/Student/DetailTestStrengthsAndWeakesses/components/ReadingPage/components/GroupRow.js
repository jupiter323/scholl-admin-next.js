import React from 'react';
import PropTypes from 'prop-types';

const GroupRow = children =>
  <div className="graph-row graph-row-inner">
    <div className="graph-col text-column">
      <strong className="graph-subtitle">
        <span className="badge-rounded-sm light-green lighten-1 badge white-text">96%</span>
        Detail Question
      </strong>
    </div>
    <div className="graph-col graph-container">
      <div className="graph-linear-students">
        <div className="graph-holder" style={{width: '55%'}}>
          <div className="graph-admin">
            <div className="part-red" style={{width: '55%'}} />
          </div>
          <div className="graph-summary">
            <div className="graph-summary-holder" style={{width: '100%'}}>
              <div className="block-red" style={{width: '4%', left: '35%'}} />
              <div className="block-red" style={{width: '5%', left: '48%'}} />
              <div className="block-red" style={{width: '2%', left: '55%'}} />
              <div className="block-red" style={{width: '7%', left: '60%'}} />
              <div
                className="block-red"
                style={{
                  width: '10%',
                  left: '70%',
                }}
              />
              <div
                className="block-red"
                style={{
                  width: '1%',
                  left: '100%',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="graph-col graph-info">
      <span className="text-large">12</span>
      <span className="text-small">out of</span>
      <span className="text-large">18</span>
    </div>
  </div>;

GroupRow.propTypes = {};

export default GroupRow;
