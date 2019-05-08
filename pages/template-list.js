import React from 'react';

class TemplateList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: true,
    };
  }

  render() {
    return (
      <body className="instructor-page">
      <div className="wrapper">
        <aside id="slide-out" className="sidenav">
          <div className="sidenav-holder">
            <h1 className="white-text"><img src="images/instructor-logo.png" alt="" /></h1>
            <ul>
              <li><a href="#"><i className="icon-speed"></i> Dashboard</a></li>
              <li><a href="#"><i className="icon-student"></i> Students</a></li>
              <li><a href="#"><i className="icon-instructors"></i> Instructors</a></li>
              <li><a href="#"><i className="icon-members"></i> Classes</a></li>
              <li><a href="#"><i className="icon-location"></i> Locations</a></li>
              <li><a href="#"><i className="icon-sheets-w"></i> Worksheets</a></li>
              <li className="active"><a href="#"><i className="icon-module"></i> Course Templates</a></li>
              <li><a href="#"><i className="icon-help"></i> Help</a></li>
            </ul>
            <a href="#" className="log-block white-text">
              <div className="text">
                <div className="block">Log Out</div>
                <div className="block">Joe Smith</div>
              </div>
              <div className="img-block"><img src="images/img-user.jpg" className="circle" alt="" /></div>
            </a>
          </div>
        </aside>
        <main id="main" role="main">
          <div className="main-holder grey lighten-5 switcher-section">
            <div className="title-row card-panel">
              <div className="mobile-header">
                <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              </div>
              <h2 className="h1 white-text">
                <span className="heading-holder">
                  <i className="icon-module"></i>
                  <span className="heading-block">Course Template Library</span>
                </span>
              </h2>
            </div>
            <div className="filter-form-holder">
              <ul className="collapsible expandable">
                <li>
                  <div className="collapsible-body">
                    <div className="filter-form_checkbox-list-holder justify-center">
                      <ul className="filter-form_checkbox-list">
                        <li>
                          <input type="checkbox" id="reading" />
                          <label htmlFor="reading">Reading</label>
                        </li>
                        <li>
                          <input type="checkbox" id="writing" />
                          <label htmlFor="writing">Writing</label>
                        </li>
                        <li>
                          <input type="checkbox" id="math" />
                          <label htmlFor="math">Math</label>
                        </li>
                        <li>
                          <input type="checkbox" id="all" />
                          <label htmlFor="all">All</label>
                        </li>
                      </ul>
                      <ul className="filter-form_checkbox-list">
                        <li>
                          <input type="checkbox" id="built_in" />
                          <label htmlFor="built_in">Built-In</label>
                        </li>
                        <li>
                          <input type="checkbox" id="user_created" />
                          <label htmlFor="user_created">User Created</label>
                        </li>
                      </ul>
                    </div>
                    <div className="d-flex row mb-0 justify-center">
                      <div className="col s12 m3">
                        <div className="search-field input-field">
                          <input type="search" id="course_search" className="input-control  validate" />
                          <button type="submit" className="search-button"><i className="icon-search"></i></button>
                          <label className="label" htmlFor="course_search">Search</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-0 d-flex align-items-center">
                    <div className="col s12 l4">
                      <div className="row mb-0">
                        <div className="col s12 xl7">
                          <div className="input-field">
                            <select id="sort_courses">
                              <option>Number of Sessions</option>
                              <option>Number of Sessions</option>
                            </select>
                            <label className="label" htmlFor="sort_courses">Sort By</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col s12 l4 hide-on-med-and-down show-on-large">&nbsp;</div>
                    <div className="col s12 l4">
                      <div className="option-filters">
                        <div className="option-item clear"><a href="#">Clear Filters</a></div>
                        <div className="option-item">
                          <span className="collapsible-header"><span className="hide-text">Hide</span> <span className="open-text">Open</span> Filters</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="content-section">
              <div className="container-middle">
                <div className="result-row center-align">
                  <b className="result">- 23 matches -</b>
                </div>
                <div className="d-flex-content row card-width-470">
                  {/* <!-- card --> */}
                  <div className="card-main-col col s12 l6">
                    <div className="card-template card">
                      <i className="icon-module icon-position-left"></i>
                      <ul className="collapsible expandable">
                        <li>
                          <div className="collapsible-card card-panel">
                            <div className="card-panel-row align-items-start row">
                              <div className="col s10">
                                <div className="card-header-block">
                                  <h3 className="h4 collapsible-title">The Name of Some Built-In Template</h3>
                                  <div className="meta-info">
                                    <dl className="dl-horizontal">
                                      <dt>Source:</dt>
                                      <dd>User Created</dd>
                                    </dl>
                                  </div>
                                </div>
                              </div>
                              <div className="col s2 right-align">
                                <div className="row icons-row">
                                  <div className="dropdown-block col">
                                    {/* <!-- Dropdown Trigger --> */}
                                    <a className='dropdown-trigger btn' href='#' data-target='dropdown01'><i className="material-icons dots-icon">more_vert</i></a>
                                    {/* <!-- Dropdown Structure --> */}
                                    <ul id='dropdown01' className='dropdown-content dropdown-wide'>
                                      <li>
                                        {/* <!-- Modal Trigger --> */}
                                        <a href="#modal_user_edit" className="modal-trigger link-block">Edit</a>
                                      </li>
                                      <li><a href="#!" className="link-delete">Delete</a></li>
                                    </ul>
                                  </div>
                                  <div className="col right-align">
                                    <span className="collapsible-header collapsible-opener">
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
                                    <span className="badge-circle">24</span>
                                    <span className="point-text">Sessions</span>
                                  </li>
                                  <li className="style-pink">
                                    <span className="badge-circle">62 <span className="badge-text">hrs</span></span>
                                    <span className="point-text">Estimated Total Course Work</span>
                                  </li>
                                </ul>
                              </div>
                              <div className="col">
                                <div className="chart-block chart-block-140">
                                  <div className="js-donut-chart" data-stroke-width="42" data-source='./inc/score-data-multiline.json'></div>
                                  <div className="chart-text">
                                    <span className="value">108</span>
                                    <span className="description">Lessons</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-content collapsible-body">
                            <dl>
                              <dt><strong className="dl-title">Description:</strong></dt>
                              <dd>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum-my nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p>
                              </dd>
                            </dl>
                            <dl>
                              <dt><strong className="dl-title">Instructions:</strong></dt>
                              <dd>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum-my nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam. </p>
                                <p>Quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulpu-tate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent.</p>
                              </dd>
                            </dl>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* <!-- card --> */}
                  <div className="card-main-col col s12 l6">
                    <div className="card-template card">
                      <i className="icon-module icon-position-left"></i>
                      <ul className="collapsible expandable">
                        <li>
                          <div className="collapsible-card card-panel">
                            <div className="card-panel-row align-items-start row">
                              <div className="col s10">
                                <div className="card-header-block">
                                  <h3 className="h4 collapsible-title">The Name of Some Built-In Template</h3>
                                  <div className="meta-info">
                                    <dl className="dl-horizontal">
                                      <dt>Source:</dt>
                                      <dd>User Created</dd>
                                    </dl>
                                  </div>
                                </div>
                              </div>
                              <div className="col s2 right-align">
                                <div className="row icons-row">
                                  <div className="dropdown-block col">
                                    {/* <!-- Dropdown Trigger --> */}
                                    <a className='dropdown-trigger btn' href='#' data-target='dropdown02'><i className="material-icons dots-icon">more_vert</i></a>
                                    {/* <!-- Dropdown Structure --> */}
                                    <ul id='dropdown02' className='dropdown-content dropdown-wide'>
                                      <li>
                                        {/* <!-- Modal Trigger --> */}
                                        <a href="#modal_user_edit" className="modal-trigger link-block">Edit</a>
                                      </li>
                                      <li><a href="#!" className="link-delete">Delete</a></li>
                                    </ul>
                                  </div>
                                  <div className="col right-align">
                                    <span className="collapsible-header collapsible-opener">
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
                                    <span className="badge-circle">24</span>
                                    <span className="point-text">Sessions</span>
                                  </li>
                                  <li className="style-pink">
                                    <span className="badge-circle">62 <span className="badge-text">hrs</span></span>
                                    <span className="point-text">Estimated Total Course Work</span>
                                  </li>
                                </ul>
                              </div>
                              <div className="col">
                                <div className="chart-block chart-block-140">
                                  <div className="js-donut-chart" data-stroke-width="42" data-source='./inc/score-data-multiline.json'></div>
                                  <div className="chart-text">
                                    <span className="value">108</span>
                                    <span className="description">Lessons</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-content collapsible-body">
                            <dl>
                              <dt><strong className="dl-title">Description:</strong></dt>
                              <dd>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum-my nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p>
                              </dd>
                            </dl>
                            <dl>
                              <dt><strong className="dl-title">Instructions:</strong></dt>
                              <dd>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum-my nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam. </p>
                                <p>Quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulpu-tate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent.</p>
                              </dd>
                            </dl>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <!-- cards row --> */}
                <div className="d-flex-content row card-width-470">
                  {/* <!-- card --> */}
                  <div className="card-main-col col s12 l6">
                    <div className="card-template card">
                      <i className="icon-module icon-position-left"></i>
                      <ul className="collapsible expandable">
                        <li>
                          <div className="collapsible-card card-panel">
                            <div className="card-panel-row align-items-start row">
                              <div className="col s10">
                                <div className="card-header-block">
                                  <h3 className="h4 collapsible-title">The Name of Some Built-In Template</h3>
                                  <div className="meta-info">
                                    <dl className="dl-horizontal">
                                      <dt>Source:</dt>
                                      <dd>User Created</dd>
                                    </dl>
                                  </div>
                                </div>
                              </div>
                              <div className="col s2 right-align">
                                <div className="row icons-row">
                                  <div className="dropdown-block col">
                                    {/* <!-- Dropdown Trigger --> */}
                                    <a className='dropdown-trigger btn' href='#' data-target='dropdown03'><i className="material-icons dots-icon">more_vert</i></a>
                                    {/* <!-- Dropdown Structure --> */}
                                    <ul id='dropdown03' className='dropdown-content dropdown-wide'>
                                      <li>
                                        {/* <!-- Modal Trigger --> */}
                                        <a href="#modal_user_edit" className="modal-trigger link-block">Edit</a>
                                      </li>
                                      <li><a href="#!" className="link-delete">Delete</a></li>
                                    </ul>
                                  </div>
                                  <div className="col right-align">
                                    <span className="collapsible-header collapsible-opener">
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
                                    <span className="badge-circle">24</span>
                                    <span className="point-text">Sessions</span>
                                  </li>
                                  <li className="style-pink">
                                    <span className="badge-circle">62 <span className="badge-text">hrs</span></span>
                                    <span className="point-text">Estimated Total Course Work</span>
                                  </li>
                                </ul>
                              </div>
                              <div className="col">
                                <div className="chart-block chart-block-140">
                                  <div className="js-donut-chart" data-stroke-width="42" data-source='./inc/score-data-multiline.json'></div>
                                  <div className="chart-text">
                                    <span className="value">108</span>
                                    <span className="description">Lessons</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-content collapsible-body">
                            <dl>
                              <dt><strong className="dl-title">Description:</strong></dt>
                              <dd>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum-my nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p>
                              </dd>
                            </dl>
                            <dl>
                              <dt><strong className="dl-title">Instructions:</strong></dt>
                              <dd>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum-my nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam. </p>
                                <p>Quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulpu-tate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent.</p>
                              </dd>
                            </dl>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* <!-- card --> */}
                  <div className="card-main-col col s12 l6">
                    <div className="card-template card">
                      <i className="icon-module icon-position-left"></i>
                      <ul className="collapsible expandable">
                        <li>
                          <div className="collapsible-card card-panel">
                            <div className="card-panel-row align-items-start row">
                              <div className="col s10">
                                <div className="card-header-block">
                                  <h3 className="h4 collapsible-title">The Name of Some Built-In Template</h3>
                                  <div className="meta-info">
                                    <dl className="dl-horizontal">
                                      <dt>Source:</dt>
                                      <dd>User Created</dd>
                                    </dl>
                                  </div>
                                </div>
                              </div>
                              <div className="col s2 right-align">
                                <div className="row icons-row">
                                  <div className="dropdown-block col">
                                    {/* <!-- Dropdown Trigger --> */}
                                    <a className='dropdown-trigger btn' href='#' data-target='dropdown04'><i className="material-icons dots-icon">more_vert</i></a>
                                    {/* <!-- Dropdown Structure --> */}
                                    <ul id='dropdown04' className='dropdown-content dropdown-wide'>
                                      <li>
                                        {/* <!-- Modal Trigger --> */}
                                        <a href="#modal_user_edit" className="modal-trigger link-block">Edit</a>
                                      </li>
                                      <li><a href="#!" className="link-delete">Delete</a></li>
                                    </ul>
                                  </div>
                                  <div className="col right-align">
                                    <span className="collapsible-header collapsible-opener">
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
                                    <span className="badge-circle">24</span>
                                    <span className="point-text">Sessions</span>
                                  </li>
                                  <li className="style-pink">
                                    <span className="badge-circle">62 <span className="badge-text">hrs</span></span>
                                    <span className="point-text">Estimated Total Course Work</span>
                                  </li>
                                </ul>
                              </div>
                              <div className="col">
                                <div className="chart-block chart-block-140">
                                  <div className="js-donut-chart" data-stroke-width="42" data-source='./inc/score-data-multiline.json'></div>
                                  <div className="chart-text">
                                    <span className="value">108</span>
                                    <span className="description">Lessons</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-content collapsible-body">
                            <dl>
                              <dt><strong className="dl-title">Description:</strong></dt>
                              <dd>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum-my nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p>
                              </dd>
                            </dl>
                            <dl>
                              <dt><strong className="dl-title">Instructions:</strong></dt>
                              <dd>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum-my nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam. </p>
                                <p>Quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulpu-tate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent.</p>
                              </dd>
                            </dl>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <!-- cards row --> */}
                {/* <!-- cards row --> */}
              </div>
            </div>
          </div>
          <div className="add-btn-block">
            <a href="#" className="waves-effect waves-teal btn add-btn"><i className="material-icons">add</i> Import Template from File</a>
          </div>
        </main>
      </div>
    </body>
    );
  }
}

export default TemplateList;