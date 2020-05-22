import React from 'react';
import PropTypes from 'prop-types';
import GroupBlock from '../common/GroupBlock';

class MathPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parentScores: [],
    };
  }

  componentDidMount = () => {
    if (this.props.scores) {
      const { scores: { children } } = this.props;
      this.setState({
        parentScores: children,
      });
    }
  };

  mapGroupBlcok = () => {
    const { parentScores } = this.state;
    return (
      parentScores instanceof Array &&
      parentScores.map(group => <GroupBlock data={group} />)
    );
  };

  render() {
    return (
      <div className="slide">
        <div className="container-sm">
          <div className="graphs-section graphs-students" id="mathAnalysisBarImg">
            {this.mapGroupBlcok()}
          </div>
        </div>
      </div>
    );
  }
}

MathPage.propTypes = {
  scores: PropTypes.object.isRequired,
};

export default MathPage;
