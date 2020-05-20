import React from 'react';
import PropTypes from 'prop-types';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps = nextProps => {
    const { existingSections } = nextProps;
    const matches = (prev, next) =>
      Object.keys(next).every(key => prev.hasOwnProperty(key) && prev[key] === next[key]);
    if (!matches(existingSections, this.props.existingSections)) {
      this.setActiveTab(existingSections);
    }
  };

  setActiveTab = (existingSections) => {
    const { onSetActivePage } = this.props;
    Object.keys(existingSections).find((key) => {
      if (existingSections[key] === true) {
        switch (key) {
          case 'reading':
            return onSetActivePage("activeReadingSection");
          case 'writing':
            return onSetActivePage("activeWritingSection");
          case 'mathCalc':
            return onSetActivePage("activeMathWithCalcSection");
          case 'mathNoCalc':
            return onSetActivePage("activeMathNoCalcSection");
          default:
            return '';
        }
      }
    });
  }

  render() {
    const {
      onCloaseAnswerWrapper,
      onSetActivePage,
      testDescription,
      active,
      existingSections: { reading, writing, mathCalc, mathNoCalc },
    } = this.props;

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
        <div className="nav-header" style={{ cursor: "pointer", background: "white" }}>
          {/* tabs switcher */}
          <ul className="tabs tabs-flex">
            {reading && (
              <li className="tab col s3">
                <a
                  className={active === 'activeReadingSection' ? 'active' : ''}
                  onClick={() => onSetActivePage("activeReadingSection")}
                >
                  <b>Reading</b>
                </a>
              </li>
            )}
            {writing && (
              <li className="tab col s3">
                <a
                  className={active === 'activeWritingSection' ? 'active' : ''}
                  onClick={() => onSetActivePage("activeWritingSection")}
                >
                  <b>Writing</b>
                </a>
              </li>
            )}
            {mathNoCalc && (
              <li className="tab col s3">
                <a
                  className={active === 'activeMathNoCalcSection' ? 'active' : ''}
                  onClick={() => onSetActivePage("activeMathNoCalcSection")}
                >
                  <b>Math (no calc)</b>
                </a>
              </li>
            )}
            {mathCalc && (
              <li className="tab col s3">
                <a
                  className={active === 'activeMathWithCalcSection' ? 'active' : ''}
                  onClick={() => onSetActivePage("activeMathWithCalcSection")}
                >
                  <b>Math (calculator)</b>
                </a>
              </li>
            )}
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
