import React from 'react';
import PropTypes from 'prop-types';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onCloaseAnswerWrapper, onSetActivePage, testDescription, existingSections: { reading, writing, mathCalc, mathNoCalc } } = this.props;
    return (
      <React.Fragment>
        <div className="header-row card-panel light-blue lighten-1 white-text">
          <div className="card-panel-row row">
            <div className="col s10">
              <div className="card-panel-text">
                <h1 className="text-large">
                  {testDescription}
                </h1>
              </div>
            </div>
            <div className="col s2 right-align">
              <div className="close-block">
                <a href="#" className="modal-close close">
                  <i className="icon-close-thin" onClick={onCloaseAnswerWrapper} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-header white" style={{cursor: 'pointer'}}>
          {/* tabs switcher */}
          <ul className="tabs tabs-flex">
            {reading && <li className="tab col s3">
              <a
                className="active"
                onClick={() => onSetActivePage("activeReadingSection")}
              >
                <b>Reading</b>
              </a>
            </li>}
            {writing && <li className="tab col s3">
              <a onClick={() => onSetActivePage("activeWritingSection")}>
                <b>Writing</b>
              </a>
            </li>}
            {mathNoCalc && <li className="tab col s3">
              <a onClick={() => onSetActivePage("activeMathNoCalcSection")}>
                <b>Math (no calc)</b>
              </a>
            </li>}
            {mathCalc && <li className="tab col s3">
              <a onClick={() => onSetActivePage("activeMathWithCalcSection")}>
                <b>Math (calculator)</b>
              </a>
            </li>}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

NavBar.propTypes = {
  onCloaseAnswerWrapper: PropTypes.func.isRequired,
  onSetActivePage: PropTypes.func.isRequired,
  testDescription: PropTypes.string.isRequired,
};

export default NavBar;
