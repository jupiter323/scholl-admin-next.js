import React from 'react';
import GroupRow from './GroupRow';

import { getScoreStatus } from '../common/GetScoreStatus';

class SubBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  mapSubRow = data => {
    if (data.children) {
      return data.children.map(children => <GroupRow data={children} key={children.id} />);
    }
  };

  renderSubBlock = data => (
    <React.Fragment>
      <div className="graph-row-block">
        <div className="graph-row graph-row-subtitle">
          <div className="graph-col text-column">
            <strong className="graph-subtitle">
              <span className={getScoreStatus(data.score.percent_correct)}>
                {(data.score.percent_correct).toFixed(0)}%
              </span>
              {data.name}
            </strong>
          </div>
          <div className="graph-col graph-container">
            <div className="graph-linear-students">
              <div
                className="graph-holder"
                style={{ width: `${(data.score.correct / data.score.total * 100).toFixed(0)}%` }}
              >
                <div className="graph-admin">
                  <div
                    className="part-red"
                    style={{
                      width: `${(data.score.incorrect / data.score.total * 100).toFixed(0)}%`,
                    }}
                  />
                </div>

              </div>
            </div>
          </div>
          <div className="graph-col graph-info">
            <span className="text-large">
              {data.score.correct}
            </span>
            <span className="text-small">out of</span>
            <span className="text-large">
              {data.score.total}
            </span>
          </div>
        </div>
        {this.mapSubRow(data)}
      </div>
    </React.Fragment>
  );

  render() {
    return this.renderSubBlock(this.props.data);
  }
}

SubBlock.propTypes = {};

export default SubBlock;
