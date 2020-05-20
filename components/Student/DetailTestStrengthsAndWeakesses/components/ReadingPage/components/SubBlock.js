import React from 'react';
import PropTypes from 'prop-types';
import GroupRow from './GroupRow';

class SubBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  mapSubRow = data => {
    if (data.children.length !== 0) {
      return data.children.map(children => {
        return this.renderSubBlock(children);
      });
    }
  };

  renderSubBlock = data => {
    console.log('data:', data);
    return (
      <React.Fragment>
        {data.children
          ? <div className="graphs-block">
              <div className="graph-row graph-row-subtitle">
                <div className="graph-col text-column">
                  <strong className="graph-subtitle">
                    <span className="badge-rounded-sm light-green lighten-1 darken-2 badge white-text">
                      {data.score.percent_correct * 100}%
                    </span>
                    {data.name}
                  </strong>
                </div>
                <div className="graph-col graph-container">
                  <div className="graph-linear-students">
                    <div
                      className="graph-holder"
                      style={{width: `${data.score.correct / data.score.total * 100}%`}}
                    >
                      <div className="graph-admin">
                        <div
                          className="part-red"
                          style={{width: `${data.score.incorrect / data.score.total * 100}%`}}
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
              {data.children && this.mapSubRow(data)}
            </div>
          : <GroupRow key={data.id} />}
      </React.Fragment>
    );
  };

  render() {
    return this.renderSubBlock(this.props.data);
  }
}

SubBlock.propTypes = {};

export default SubBlock;
