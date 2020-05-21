import React from 'react';
import PropTypes from 'prop-types';
import GroupBlock from '../common/GroupBlock';

class WritingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parentScores: [],
    };
  }

  componentDidMount = () => {
    const {scores: {children}} = this.props;
    this.setState({
      parentScores: children,
    });
  };

  mapGroupBlcok = () => {
    const {parentScores} = this.state;
    return parentScores.map(group => {
      return <GroupBlock data={group} />;
    });
  };

  render() {
    return (
      <div className="slide">
        <div className="container-sm">
          <div className="graphs-section graphs-students" id="readingAnalysisBarImg">
            {this.mapGroupBlcok()}
          </div>
        </div>
      </div>
    );
  }
}

WritingPage.propTypes = {
  scores: PropTypes.object.isRequired,
};

export default WritingPage;
