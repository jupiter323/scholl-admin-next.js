import React from 'react';
// import PropTypes from 'prop-types';

import FilterSection from './components/FilterSection';

class DetailWorksheetPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'list',
    };
  }

  onChangeView = (view) => this.setState({ currentView: view });

  render() {
    const { currentView } = this.state;
    return (
      <React.Fragment>
        <div className="main-holder grey lighten-5 switcher-section">
          <FilterSection
            currentView={currentView}
            onChangeView={this.onChangeView}
          />
          <div className="content-section">
            <div className="container-md">
              <div className="result-row center-align">
                <b className="result"> - 23 results -</b>
              </div>
              <div className="list-view-section">
                <div className="list-table">
                  <div className="list-table-header">
                    <div className="list-table-row">
                      <div className="list-table-cell icon-cell">&nbsp;</div>
                      <div className="list-table-cell name-cell"><b>Worksheet</b></div>
                      <div className="list-table-cell graph-cell"><b>Score</b></div>
                      <div className="list-table-cell description-cell"><b>Problems</b></div>
                      <div className="list-table-cell time-cell"><b>Time Est</b></div>
                      <div className="list-table-cell date-cell"><b>Assign</b></div>
                      <div className="list-table-cell date-cell"><b>Due</b></div>
                      <div className="list-table-cell completed-cell"><b>Completed</b></div>
                      <div className="list-table-cell flags-cell"><b>Flags</b></div>
                      <div className="list-table-cell status-cell"><b>Status</b></div>
                      <div className="list-table-cell drop-cell">&nbsp;</div>
                    </div>
                  </div>
                  <div className="list-table-body">
                    {/* <!-- card row --> */}
                    <div className="card card-disabled list-table-row">
                      <div className="list-table-cell icon-cell">
                        <span className="block-icon">
                          <i className="icon-sheets-w"></i>
                        </span>
                      </div>
                      <div className="list-table-cell name-cell">
                        <div className="card-panel-text truncate">
                          <div className="text-large truncate">Some SAT Problems about Triangles</div>
                        </div>
                      </div>
                      <div className="list-table-cell graph-cell">&nbsp; </div>
                      <div className="list-table-cell description-cell">16</div>
                      <div className="list-table-cell time-cell">14 min</div>
                      <div className="list-table-cell date-cell"><time dateTime="2019-01-27">1/27/19</time></div>
                      <div className="list-table-cell date-cell"><time dateTime="2019-01-27">1/27/19</time></div>
                      <div className="list-table-cell completed-cell">&nbsp;</div>
                      <div className="list-table-cell flags-cell">&nbsp;</div>
                      <div className="list-table-cell status-cell">
                        <span className="badge badge-rounded-md grey darken-4 white-text">Assigned</span>
                      </div>
                      <div className="list-table-cell drop-cell">
                        <div className="dropdown-block">
                          {/* <!-- Dropdown Trigger --> */}
                          <a className='dropdown-trigger btn' href='#' data-target='dropdown01'><i className="material-icons dots-icon">more_vert</i></a>
                          {/* <!-- Dropdown Structure --> */}
                          <ul id='dropdown01' className='dropdown-content dropdown-wide'>
                            <li>
                              {/* <!-- Modal Trigger --> */}
                              <a href="#modal_user_edit" className="modal-trigger link-block">View Details</a>
                            </li>
                            <li><a href="#!">Dismiss Flags</a></li>
                            <li><a href="#!">Reset</a></li>
                            <li><a href="#!" className="link-delete">Delete</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* <!-- card row --> */}
                    <div className="card list-table-row">
                      <div className="list-table-cell icon-cell">
                        <span className="block-icon">
                          <i className="icon-sheets-w"></i>
                        </span>
                      </div>
                      <div className="list-table-cell name-cell">
                        <div className="card-panel-text truncate">
                          <div className="text-large truncate">Some SAT Problems about Triangles</div>
                        </div>
                      </div>
                      <div className="list-table-cell graph-cell">&nbsp;</div>
                      <div className="list-table-cell description-cell">16</div>
                      <div className="list-table-cell time-cell">14 min</div>
                      <div className="list-table-cell date-cell"><time dateTime="2019-01-27">1/27/19</time></div>
                      <div className="list-table-cell date-cell"><time dateTime="2019-01-27">1/27/19</time></div>
                      <div className="list-table-cell completed-cell">0 of 10</div>
                      <div className="list-table-cell flags-cell">
                        <span className="badge-rounded-xs badge red darken-2 white-text"><b className="badge-text">3</b> <i className="icon-flag"></i></span>
                      </div>
                      <div className="list-table-cell status-cell">
                        <span className="badge badge-rounded-md grey darken-4 white-text">Assigned</span>
                      </div>
                      <div className="list-table-cell drop-cell">
                        <div className="dropdown-block">
                          {/* <!-- Dropdown Trigger --> */}
                          <a className='dropdown-trigger btn' href='#' data-target='dropdown02'><i className="material-icons dots-icon">more_vert</i></a>
                          {/* <!-- Dropdown Structure --> */}
                          <ul id='dropdown02' className='dropdown-content dropdown-wide'>
                            <li>
                              {/* <!-- Modal Trigger --> */}
                              <a href="#modal_user_edit" className="modal-trigger link-block">View Details</a>
                            </li>
                            <li><a href="#!">Dismiss Flags</a></li>
                            <li><a href="#!">Reset</a></li>
                            <li><a href="#!" className="link-delete">Delete</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* <!-- card row --> */}
                    <div className="card list-table-row">
                      <div className="list-table-cell icon-cell">
                        <span className="block-icon">
                          <i className="icon-sheets-w"></i>
                        </span>
                      </div>
                      <div className="list-table-cell name-cell">
                        <div className="card-panel-text truncate">
                          <div className="text-large truncate">Some SAT Problems about Triangles</div>
                        </div>
                      </div>
                      <div className="list-table-cell graph-cell">
                        <span className="chart-bar purple darken-3 white-text">83%</span>
                      </div>
                      <div className="list-table-cell description-cell">16</div>
                      <div className="list-table-cell time-cell">14 min</div>
                      <div className="list-table-cell date-cell"><time dateTime="2019-01-27">1/27/19</time></div>
                      <div className="list-table-cell date-cell"><time dateTime="2019-01-27">1/27/19</time></div>
                      <div className="list-table-cell completed-cell">0 of 10</div>
                      <div className="list-table-cell flags-cell">&nbsp;</div>
                      <div className="list-table-cell status-cell">
                        <span className="badge badge-rounded-md purple darken-3 white-text">Accomplished</span>
                      </div>
                      <div className="list-table-cell drop-cell">
                        <div className="dropdown-block">
                          {/* <!-- Dropdown Trigger --> */}
                          <a className='dropdown-trigger btn' href='#' data-target='dropdown03'><i className="material-icons dots-icon">more_vert</i></a>
                          {/* <!-- Dropdown Structure --> */}
                          <ul id='dropdown03' className='dropdown-content dropdown-wide'>
                            <li>
                              {/* <!-- Modal Trigger --> */}
                              <a href="#modal_user_edit" className="modal-trigger link-block">View Details</a>
                            </li>
                            <li><a href="#!">Dismiss Flags</a></li>
                            <li><a href="#!">Reset</a></li>
                            <li><a href="#!" className="link-delete">Delete</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* <!-- card row --> */}
                    <div className="card list-table-row">
                      <div className="list-table-cell icon-cell">
                        <span className="block-icon">
                          <i className="icon-sheets-w"></i>
                        </span>
                      </div>
                      <div className="list-table-cell name-cell">
                        <div className="card-panel-text truncate">
                          <div className="text-large truncate">Some SAT Problems about Triangles</div>
                        </div>
                      </div>
                      <div className="list-table-cell graph-cell">
                        <span className="chart-bar red darken-3 white-text">38%</span>
                      </div>
                      <div className="list-table-cell description-cell">16</div>
                      <div className="list-table-cell time-cell">14 min</div>
                      <div className="list-table-cell date-cell"><time dateTime="2019-01-27">1/27/19</time></div>
                      <div className="list-table-cell date-cell"><time dateTime="2019-01-27">1/27/19</time></div>
                      <div className="list-table-cell completed-cell">0 of 10</div>
                      <div className="list-table-cell flags-cell">&nbsp;</div>
                      <div className="list-table-cell status-cell">
                        <span className="badge badge-rounded-md red darken-3 white-text">Beginning</span>
                      </div>
                      <div className="list-table-cell drop-cell">
                        <div className="dropdown-block">
                          {/* <!-- Dropdown Trigger --> */}
                          <a className='dropdown-trigger btn' href='#' data-target='dropdown04'><i className="material-icons dots-icon">more_vert</i></a>
                          {/* <!-- Dropdown Structure --> */}
                          <ul id='dropdown04' className='dropdown-content dropdown-wide'>
                            <li>
                              {/* <!-- Modal Trigger --> */}
                              <a href="#modal_user_edit" className="modal-trigger link-block">View Details</a>
                            </li>
                            <li><a href="#!">Dismiss Flags</a></li>
                            <li><a href="#!">Reset</a></li>
                            <li><a href="#!" className="link-delete">Delete</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* <!-- card row --> */}
                    <div className="card list-table-row">
                      <div className="list-table-cell icon-cell">
                        <span className="block-icon">
                          <i className="icon-sheets-w"></i>
                        </span>
                      </div>
                      <div className="list-table-cell name-cell">
                        <div className="card-panel-text truncate">
                          <div className="text-large truncate">Some SAT Problems about Triangles</div>
                        </div>
                      </div>
                      <div className="list-table-cell graph-cell">
                        <span className="chart-bar blue accent-4 white-text">91%</span>
                      </div>
                      <div className="list-table-cell description-cell">16</div>
                      <div className="list-table-cell time-cell">14 min</div>
                      <div className="list-table-cell date-cell"><time dateTime="2019-01-27">1/27/19</time></div>
                      <div className="list-table-cell date-cell"><time dateTime="2019-01-27">1/27/19</time></div>
                      <div className="list-table-cell completed-cell">0 of 10</div>
                      <div className="list-table-cell flags-cell">&nbsp;</div>
                      <div className="list-table-cell status-cell">
                        <span className="badge badge-rounded-md blue accent-4 white-text">Exemplary</span>
                      </div>
                      <div className="list-table-cell drop-cell">
                        <div className="dropdown-block">
                          {/* <!-- Dropdown Trigger --> */}
                          <a className='dropdown-trigger btn' href='#' data-target='dropdown05'><i className="material-icons dots-icon">more_vert</i></a>
                          {/* <!-- Dropdown Structure --> */}
                          <ul id='dropdown05' className='dropdown-content dropdown-wide'>
                            <li>
                              {/* <!-- Modal Trigger --> */}
                              <a href="#modal_user_edit" className="modal-trigger link-block">View Details</a>
                            </li>
                            <li><a href="#!">Dismiss Flags</a></li>
                            <li><a href="#!">Reset</a></li>
                            <li><a href="#!" className="link-delete">Delete</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* <!-- card row --> */}
                    <div className="card list-table-row">
                      <div className="list-table-cell icon-cell">
                        <span className="block-icon">
                          <i className="icon-sheets-w"></i>
                        </span>
                      </div>
                      <div className="list-table-cell name-cell">
                        <div className="card-panel-text truncate">
                          <div className="text-large truncate">Some SAT Problems about Triangles</div>
                        </div>
                      </div>
                      <div className="list-table-cell graph-cell">
                        <span className="chart-bar purple white-text">68%</span>
                      </div>
                      <div className="list-table-cell description-cell">16</div>
                      <div className="list-table-cell time-cell">14 min</div>
                      <div className="list-table-cell date-cell"><time dateTime="2019-01-27">1/27/19</time></div>
                      <div className="list-table-cell date-cell"><time dateTime="2019-01-27">1/27/19</time></div>
                      <div className="list-table-cell completed-cell">0 of 10</div>
                      <div className="list-table-cell flags-cell">&nbsp;</div>
                      <div className="list-table-cell status-cell">
                        <span className="badge badge-rounded-md purple white-text">Developing</span>
                      </div>
                      <div className="list-table-cell drop-cell">
                        <div className="dropdown-block">
                          {/* <!-- Dropdown Trigger --> */}
                          <a className='dropdown-trigger btn' href='#' data-target='dropdown06'><i className="material-icons dots-icon">more_vert</i></a>
                          {/* <!-- Dropdown Structure --> */}
                          <ul id='dropdown06' className='dropdown-content dropdown-wide'>
                            <li>
                              {/* <!-- Modal Trigger --> */}
                              <a href="#modal_user_edit" className="modal-trigger link-block">View Details</a>
                            </li>
                            <li><a href="#!">Dismiss Flags</a></li>
                            <li><a href="#!">Reset</a></li>
                            <li><a href="#!" className="link-delete">Delete</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="add-btn-block">
          <a href="#" className="dropdown-trigger waves-effect waves-teal btn add-btn" data-target='dropdown_assign_selected'><i className="material-icons">add</i> Assign Worksheet</a>
          <ul id='dropdown_assign_selected' className='dropdown-content dropdown-small'>
            <li><a href="#">From Saved</a></li>
            <li><a href="#">Create New</a></li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default DetailWorksheetPage;

