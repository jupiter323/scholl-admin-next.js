import React from 'react';
import PropTypes from 'prop-types';
import SubBlock from './SubBlock';

import { getScoreStatus } from '../common/GetScoreStatus';

class GroupBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  mapGroupRow = () => {
    const { data: { children } } = this.props;
    if (children.length !== 0) {
      return children.map(children => <SubBlock data={children} key={children.id} />);
    }
  };

  render() {
    const { data: { name, score: { percent_correct, correct, incorrect, total } } } = this.props;
    return (
      <div className="graphs-block">
        <div className="graph-row graph-row-title">
          <div className="graph-col text-column">
            <h3 className="graph-title">
              <span className={getScoreStatus((percent_correct).toFixed(0))}>
                {(percent_correct).toFixed(0)}%
              </span>
              {name}
            </h3>
          </div>
          <div className="graph-col graph-container">
            <div className="graph-linear-students">
              <div
                className="graph-holder"
                style={{ width: `${(correct / total * 100).toFixed(0)}%` }}
              >
                <div className="graph-admin">
                  <div
                    className="part-red"
                    style={{ width: `${(incorrect / total * 100).toFixed(0)}%` }}
                  />
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
        </div>
        {this.props.data.children && this.mapGroupRow()}
      </div>
    );
  }
}

GroupBlock.propTypes = {};

export default GroupBlock;
