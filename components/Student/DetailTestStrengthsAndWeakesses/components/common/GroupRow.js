import React from 'react';
import PropTypes from 'prop-types';
import { getScoreStatus } from '../common/GetScoreStatus';

const GroupRow = ({ data: { name, score: { percent_correct, correct, incorrect, total } } }) =>
  (<div className="graph-row graph-row-inner">
    <div className="graph-col text-column">
      <strong className="graph-subtitle">
        <span className={getScoreStatus((percent_correct * 100).toFixed(0))}>
          {(percent_correct * 100).toFixed(0)}%
        </span>
        {name}
      </strong>
    </div>
    <div className="graph-col graph-container">
      <div className="graph-linear-students">
        <div className="graph-holder" style={{ width: `${(correct / total * 100).toFixed(0)}%` }}>
          <div className="graph-admin">
            <div className="part-red" style={{ width: `${(incorrect / total * 100).toFixed(0)}%` }} />
          </div>
        </div>
      </div>
    </div>
    <div className="graph-col graph-info">
      <span className="text-large">
        {correct}
      </span>
      <span className="text-small">out of</span>
      <span className="text-large">
        {total}
      </span>
    </div>
  </div>);

GroupRow.propTypes = {};

export default GroupRow;
