/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';

const data = (total) => ({
  datasets: [{
    data: [total, 0],
    backgroundColor: [
      '#3d8946',
      'rgb(234, 234, 234)',
    ],
  }],
})

const formatEstimatedTotalCourseWork = (minutes) => Math.floor(minutes / 60);

const sourceMap = {
  builtIn: 'Built-In',
  userCreated: 'User Created',
};

class TemplateCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleDropdownClick = (event) => {
    const { onSetDropdown, onCloseDropdown, dropdownIsOpen, index } = this.props;
    event.preventDefault();
    if (dropdownIsOpen) {
      return onCloseDropdown();
    }
    return onSetDropdown(index);
  }

  toggleEditModal = (event) => {
    const { onToggleEditModal } = this.props;
    event.preventDefault();
    onToggleEditModal();
  }

  toggleExpandedState = () => this.setState(({ expanded }) => ({ expanded: !expanded }))

  render() {
    const { template, dropdownIndex, dropdownIsOpen, index } = this.props;
    const { title, source, sessions, estimatedTotalCourseWork, lessons, description, instructions } = template;
    const { expanded } = this.state;
    return (
      <div className="card-main-col col s12 l6">
        <div className="card-template card">
          <i className="icon-module icon-position-left"></i>
          <ul className="collapsible expandable">
            <li>
              <div className="collapsible-card card-panel">
                <div className="card-panel-row align-items-start row">
                  <div className="col s10">
                    <div className="card-header-block">
                      <h3 className="h4 collapsible-title">{title}</h3>
                      <div className="meta-info">
                        <dl className="dl-horizontal">
                          <dt>Source:</dt>
                          <dd>{sourceMap[source]}</dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <div className="col s2 right-align">
                    <div className="row icons-row">
                      <div className="dropdown-block col">
                        <a
                          className='dropdown-trigger btn'
                          href='#' data-target='dropdown02'
                          onClick={this.handleDropdownClick}
                        >
                          <i className="material-icons dots-icon">more_vert</i>
                        </a>
                        <If condition={dropdownIsOpen && dropdownIndex === index}>
                          <ul
                            id='dropdown02'
                            className='dropdown-content dropdown-wide'
                            style={{ display: 'block', transformOrigin: '0px 0px 0px', opacity: '1', transform: 'scaleX(1) scaleY(1)' }}
                          >
                            <li>
                              <a
                                href="#"
                                className="modal-trigger link-block"
                                onClick={this.toggleEditModal}
                              >
                                Edit
                              </a>
                            </li>
                            <li><a href="#!" className="link-delete">Delete</a></li>
                          </ul>
                        </If>
                      </div>
                      <div className="col right-align">
                        <span
                          onClick={this.toggleExpandedState}
                          className="collapsible-header collapsible-opener"
                        >
                          <i className="custom-icon-triangle-right color-black"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center row mb-0">
                  <div className="col m6">
                    <ul className="points-list list-two-cols badge-circle-78">
                      <li className="style-purple-dark">
                        <span className="badge-circle">{sessions}</span>
                        <span className="point-text">Sessions</span>
                      </li>
                      <li className="style-pink">
                        <span className="badge-circle">{formatEstimatedTotalCourseWork(estimatedTotalCourseWork)} <span className="badge-text">hrs</span></span>
                        <span className="point-text">Estimated Total Course Work</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <div className="chart-block chart-block-140">
                      <Doughnut
                        data={() => data(lessons)}
                        height={140}
                        width={140}
                        options={{
                          cutoutPercentage: 55,
                          tooltips: false,
                        }}
                        />
                      <div className="chart-text">
                        <span className="value" style={{color:  '#3d8946'}}>{lessons}</span>
                        <span className="title" style={{color:  '#3d8946'}}>Lessons</span>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>

              <div
                className="card-content collapsible-body"
                style={{ display: expanded ? 'block' : 'none' }}
              >
                <dl>
                  <dt><strong className="dl-title">Description:</strong></dt>
                  <dd>
                    <p>{description}</p>
                  </dd>
                </dl>
                <dl>
                  <dt><strong className="dl-title">Instructions:</strong></dt>
                  <dd>
                    <p>{instructions}</p>
                  </dd>
                </dl>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

TemplateCard.propTypes = {
  onToggleEditModal: PropTypes.func.isRequired,
  onCloseDropdown: PropTypes.func.isRequired,
  dropdownIsOpen: PropTypes.bool.isRequired,
  onSetDropdown: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  dropdownIndex: PropTypes.number,
  template: PropTypes.object,
};

export default TemplateCard;
