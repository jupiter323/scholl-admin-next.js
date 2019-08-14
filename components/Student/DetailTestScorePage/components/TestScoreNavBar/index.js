import React from 'react';
import PropTypes from 'prop-types';
import { Sticky } from 'react-sticky';

// eslint-disable-next-line react/prefer-stateless-function
class TestScoreNavBar extends React.Component {
  render() {
    const { active, onSetActivePage } = this.props;
    return (
      <Sticky topOffset={-100}>
        {({ style, isSticky}) => (

          <div className="nav-header white" style={{ ...style, zIndex: 1999, top: isSticky ?  '95px' : "0px" }}>
            <div className="nav-additional" style={{ display: 'table', margin: "0 auto" }}>
              <ul className="menu-additional">
                <li className="col s3" style={{ display: 'inline' }}>
                  <a
                    className={active === 'scores' ? 'active' : ''}
                    onClick={() => onSetActivePage('scores')}
                    href="#">
                    Scores
                </a>
                </li>
                <li className="col s3" style={{ display: 'inline' }}>
                  <a
                    className={active === 'answerSheet' ? 'active' : ''}
                    onClick={() => onSetActivePage('answerSheet')}
                    href="#">
                    Answer Sheet
                </a>
                </li>
                <li className="col s3 " style={{ display: 'inline' }}>
                  <a
                    className={active === 'StrengthsAndWeaknesses' ? 'active' : ''}
                    onClick={() => onSetActivePage('StrengthsAndWeaknesses')}
                    href="#">
                    Strengths &amp; Weaknesses
                </a>
                </li>
                <li className="col s3" style={{ display: 'inline' }}>
                  <a
                    className={active === 'testVersion' ? 'active' : ''}
                    onClick={() => onSetActivePage('testVersion')}
                    href="#">
                    Test Version
                </a>
                </li>
                <li className="menu-special col s3">
                  <a href="#">Download Score Report <i className="icon-download-file"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </Sticky>
    )
  }
};

TestScoreNavBar.propTypes = {
  active: PropTypes.string.isRequired,
  onSetActivePage: PropTypes.func.isRequired,
};

export default TestScoreNavBar;
