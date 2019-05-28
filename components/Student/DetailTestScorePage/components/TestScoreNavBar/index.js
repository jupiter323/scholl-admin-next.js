import React from 'react';
import PropTypes from 'prop-types';

const TestScoreNavBar = ({ active, onSetActivePage }) => (
  <div className="nav-header white">
          <div className="nav-additional" style={{display: 'table', margin: "0 auto"}}>
            <ul className="menu-additional">
              <li className="col s3" style={{display: 'inline'}}>
                <a
                  className={active === 'scores' ? 'active' : ''}
                  onClick={() => onSetActivePage('scores')}
                  href="#">
                  Scores
                </a>
              </li>
              <li className="col s3"  style={{display: 'inline'}}>
                <a
                  className={active === 'answerSheet' ? 'active' : ''}
                  onClick={() => onSetActivePage('answerSheet')}
                  href="#">
                  Answer Sheet
                </a>
              </li>
              <li className="col s3 "  style={{display: 'inline'}}>
                <a
                  className={active === 'StrengthsAndWeaknesses' ? 'active' : ''}
                  onClick={() => onSetActivePage('StrengthsAndWeaknesses')}
                  href="#">
                  Strengths &amp; Weaknesses
                </a>
              </li>
              <li className="col s3"  style={{display: 'inline'}}>
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
);

TestScoreNavBar.propTypes = {
  active: PropTypes.bool.isRequired,
  onSetActivePage: PropTypes.func.isRequired,
};

export default TestScoreNavBar;
