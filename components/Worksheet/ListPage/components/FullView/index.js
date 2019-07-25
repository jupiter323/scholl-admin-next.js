import React from 'react';
import PropTypes from 'prop-types';

class FullView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownIsOpen: false,
      dropdownIndex: null,
    }
  }

  onSetDropdown = (dropdownIndex) => this.setState({ dropdownIndex, dropdownIsOpen: true });
  onCloseDropdown = () => this.setState({ dropdownIsOpen: false });

  handleDropdownClick = (event, index) => {
    const { dropdownIsOpen } = this.state;
    event.preventDefault();
    if (dropdownIsOpen) {
      return this.onCloseDropdown();
    }
    return this.onSetDropdown(index);
  }

  mapWorksheetCards = () => {
    const { worksheets } = this.props;
    const { dropdownIndex, dropdownIsOpen } = this.state;
    return worksheets.map((worksheet, index) => (
        <div className="card-main-col col s12 m8 l7 xl5" key={worksheet.id}>
          <div className="card-main work-card card">
            <div className="card-panel panel-border">
              <div className="card-panel-row row">
                <div className="icon-col col s2">
                  <span className="block-icon">
                    <i className="icon-sheets-w"></i>
                  </span>
                </div>
                <div className="col s8">
                  <div className="card-panel-text">
                    <div className="text-small truncate">Worksheet (Math)</div>
                    <div className="text-large truncate">Triangle Practice</div>
                  </div>
                </div>
                <div className="position-top right-align">
                  <div className="icons-row">
                    <div className="dropdown-block col">
                      <a
                        href='#'
                        data-target='dropdown01'
                        className='dropdown-trigger btn'
                        onClick={(event) => this.handleDropdownClick(event, index)}
                      >
                        <i className="material-icons dots-icon">more_vert</i>
                      </a>
                      <If condition={dropdownIsOpen && dropdownIndex === index}>
                        <ul id='dropdown01' className='dropdown-content dropdown-wide' style={{ display: 'block', opacity: '1', transform: 'scaleX(1) scaleY(1)' }}>
                          <li>
                            {/* <!-- Modal Trigger --> */}
                            <a href="#modal_user_edit" className="modal-trigger link-block">Edit</a>
                          </li>
                          <li><a href="#!">Clone</a></li>
                          <li><a href="#!" className="link-delete">Delete</a></li>
                        </ul>
                      </If>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-top-block">
                <div className="d-flex row mb-0">
                  <div className="left-col col s7">
                    <dl className="dl-horizontal">
                      <dt>Problem Type:</dt>
                      <dd>Mixed</dd>
                    </dl>
                  </div>
                  <div className="right-col col s5 right-align">
                    <dl className="dl-horizontal">
                      <dt>Diﬃculty:</dt>
                      <dd>Beginner</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="d-flex sameheight-all row mb-0">
                <div className="col s12">
                  <div className="chart-container">
                    <div className="chart-holder">
                      <span className="svg-curved-bar" data-values='{"from": 0, "to": 100, "current": 0}' data-duration="1">
                        {/* <!-- do not change path attribute "d" !!! --> */}
                        <svg  width="110px" height="110px" viewBox=" 0 0 110 110">
                          <path fill="none" style={{ strokeWidth: '22', stroke: '#eaeaea' }} d="M 14.151810947292809 71.35314804905443 A 44 44 0 1 1 95.8481890527072 71.35314804905443"></path>
                          <path data-dinamic fill="none" style={{ strokeWidth: '22', stroke: '#d6d6d6' }} d="M 14.151810947292809 71.35314804905443 A 44 44 0 0 1 14.151810947292809 71.35314804905443"></path>
                        </svg>
                      </span>
                      <span className="chart-value" style={{ backgroundColor: '#333' }}><span data-count-up data-start-val="0" data-end-val="0" data-duration="1"></span><span className="percentage">%</span></span>
                    </div>
                    <div className="chart-row">
                      <div className="chart-col chart-start">&nbsp;</div>
                      <div className="chart-col chart-end">
                        <span className="amount" style={{ color: 'inherit' }}>&nbsp;</span>
                      </div>
                    </div>
                    <div className="chart-description">
                      <dl className="dl-horizontal">
                        <dt>Time Est:</dt>
                        <dd>14 min</dd>
                      </dl>
                      <dl className="dl-horizontal">
                        <dt>Problems:</dt>
                        <dd>16</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-text">
                <dl className="dl-horizontal">
                  <dt>Worksheet Source:</dt>
                  <dd>User Created</dd>
                </dl>
              </div>
              <div className="card-inner-row">
                <div className="row-holder">
                  <ul className="classification-list">
                    <li className="class-box">Right Trianges</li>
                    <li className="class-box">Trigonometry</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ));
  }

  render() {
    const { worksheets } = this.props;
    return (
      <div className="content-section">
        <div className="result-row center-align">
          <b className="result"> - {worksheets.length} results -</b>
        </div>
        <div className="row d-flex-content card-width-272">
          {this.mapWorksheetCards()}
        </div>
      </div>
    );
  }
}

FullView.propTypes = {
  worksheets: PropTypes.array.isRequired,
};

export default FullView;
