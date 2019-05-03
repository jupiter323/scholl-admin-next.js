import React from 'react';

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: true,
    }
  }
  render() {
    return (
      <div className="main-container">
        <div className="container">
          <div className="main-row row">
            <div className="col s12 l6">
              <div className="card-block card-block-problems">
                <h2>Worksheet Problems</h2>
                <div className="card-main-full card">
                  <div className="body-inner">
                    <ol className="problems-list-number problems-list collection js-sortable-list" data-sortable-group='{ "name": "put-list", "put": "list"}'>
                      <li className="collection-item list-header">
                        <div className="header-row">
                          <div className="cell cell_01">&nbsp;</div>
                          <div className="cell cell_02">&nbsp;</div>
                          <div className="cell cell_03">Subject</div>
                          <div className="cell cell_04">Type</div>
                          <div className="cell cell_05">In Book</div>
                          <div className="cell cell_06">Diﬀ</div>
                          <div className="cell cell_07">&nbsp;</div>
                        </div>
                      </li>
                      <li className="collection-item">
                        <div className="list-row">
                          <div className="cell handle cell_01">
                            <i className="custom-icon-burger"></i>
                          </div>
                          <div className="cell cell_02">
                            <span className="list-num"></span>
                          </div>
                          <div className="cell cell_03">
                            <span>Math</span>
                          </div>
                          <div className="cell cell_04">
                            <span>Skill Builder</span>
                          </div>
                          <div className="cell cell_05">
                            <span>No</span>
                          </div>
                          <div className="cell cell_06">
                            <span>E</span>
                          </div>
                          <div className="cell right-align cell_07">
                            <span className="icon-frame">
                              <a href="#"><i className="icon-eye"></i></a>
                            </span>
                            <a href="#" className="close"><i className="icon-close"></i></a>
                          </div>
                        </div>
                      </li>
                      <li className="collection-item">
                        <div className="list-row">
                          <div className="cell handle cell_01">
                            <i className="custom-icon-burger"></i>
                          </div>
                          <div className="cell cell_02">
                            <span className="list-num"></span>
                          </div>
                          <div className="cell cell_03">
                            <span>Math</span>
                          </div>
                          <div className="cell cell_04">
                            <span>Skill Builder</span>
                          </div>
                          <div className="cell cell_05">
                            <span>No</span>
                          </div>
                          <div className="cell cell_06">
                            <span>E</span>
                          </div>
                          <div className="cell right-align cell_07">
                            <span className="icon-frame">
                              <a href="#"><i className="icon-eye"></i></a>
                            </span>
                            <a href="#" className="close"><i className="icon-close"></i></a>
                          </div>
                        </div>
                      </li>
                      <li className="collection-item combined-rows">
                        <div className="combined-holder">
                          <div className="combined-header">
                            <div className="burger-block handle">
                              <i className="custom-icon-burger"></i>
                            </div>
                            <div className="combined-title">The Name of Some Passage</div>
                            <a href="#" className="close"><i className="icon-close"></i></a>
                          </div>
                          <ol className="problems-list-number problems-list collection">
                            <li className="collection-item">
                              <div className="list-row">
                                <div className="cell handle cell_01">&nbsp;</div>
                                <div className="cell cell_02">
                                  <span className="list-num"></span>
                                </div>
                                <div className="cell cell_03">
                                  <span>Math</span>
                                </div>
                                <div className="cell cell_04">
                                  <span>Skill Builder</span>
                                </div>
                                <div className="cell cell_05">
                                  <span>No</span>
                                </div>
                                <div className="cell cell_06">
                                  <span>E</span>
                                </div>
                                <div className="cell right-align cell_07">
                                  <span className="icon-frame">
                                    <a href="#"><i className="icon-eye"></i></a>
                                  </span>
                                  <a href="#" className="close invisible"><i className="icon-close"></i></a>
                                </div>
                              </div>
                            </li>
                            <li className="collection-item">
                              <div className="list-row">
                                <div className="cell handle cell_01">&nbsp;</div>
                                <div className="cell cell_02">
                                  <span className="list-num"></span>
                                </div>
                                <div className="cell cell_03">
                                  <span>Math</span>
                                </div>
                                <div className="cell cell_04">
                                  <span>Skill Builder</span>
                                </div>
                                <div className="cell cell_05">
                                  <span>No</span>
                                </div>
                                <div className="cell cell_06">
                                  <span>E</span>
                                </div>
                                <div className="cell right-align cell_07">
                                  <span className="icon-frame">
                                    <a href="#"><i className="icon-eye"></i></a>
                                  </span>
                                  <a href="#" className="close invisible"><i className="icon-close"></i></a>
                                </div>
                              </div>
                            </li>
                          </ol>
                        </div>
                      </li>
                      <li className="collection-item">
                        <div className="list-row">
                          <div className="cell handle cell_01">
                            <i className="custom-icon-burger"></i>
                          </div>
                          <div className="cell cell_02">
                            <span className="list-num"></span>
                          </div>
                          <div className="cell cell_03">
                            <span>Math</span>
                          </div>
                          <div className="cell cell_04">
                            <span>Skill Builder</span>
                          </div>
                          <div className="cell cell_05">
                            <span>No</span>
                          </div>
                          <div className="cell cell_06">
                            <span>E</span>
                          </div>
                          <div className="cell right-align cell_07">
                            <span className="icon-frame">
                              <a href="#"><i className="icon-eye"></i></a>
                            </span>
                            <a href="#" className="close"><i className="icon-close"></i></a>
                          </div>
                        </div>
                      </li>
                      <li className="collection-item">
                        <div className="list-row">
                          <div className="cell handle cell_01">
                            <i className="custom-icon-burger"></i>
                          </div>
                          <div className="cell cell_02">
                            <span className="list-num"></span>
                          </div>
                          <div className="cell cell_03">
                            <span>Math</span>
                          </div>
                          <div className="cell cell_04">
                            <span>Skill Builder</span>
                          </div>
                          <div className="cell cell_05">
                            <span>No</span>
                          </div>
                          <div className="cell cell_06">
                            <span>E</span>
                          </div>
                          <div className="cell right-align cell_07">
                            <span className="icon-frame">
                              <a href="#"><i className="icon-eye"></i></a>
                            </span>
                            <a href="#" className="close"><i className="icon-close"></i></a>
                          </div>
                        </div>
                      </li>
                    </ol>
                  </div>
                  <div className="card-footer right-align">
                    <a href="#!" className=" waves-effect waves-teal btn-flat pink-text text-darken-1">Remove All</a>
                    <a href="#modal_add_problem" className="modal-trigger link-btn waves-effect waves-teal btn-flat">Add Problems</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col s12 l6">
              <div className="card-block">
                <h2>Details</h2>
                <div className="card">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="row mb-0">
                        <div className="col s12">
                          <div className="input-field">
                            <input type="text" id="details_name" value="Some SAT Problems about Triangles" />
                            <label className="label" htmlFor="details_name">Name</label>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-0">
                        <div className="col s6">
                          <div className="input-field">
                            <select id="detail_subject">
                              <option>Mixed</option>
                              <option>Option</option>
                              <option>Option</option>
                            </select>
                            <label className="label" htmlFor="detail_subject">Subject</label>
                          </div>
                        </div>
                        <div className="col s6">
                          <div className="input-field">
                            <select id="detail_type">
                              <option>Mixed</option>
                              <option>Option</option>
                              <option>Option</option>
                            </select>
                            <label className="label" htmlFor="detail_type">Type</label>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-0">
                        <div className="col s6">
                          <div className="input-field">
                            <select id="detail_diﬃculty">
                              <option>Mixed</option>
                              <option>Option</option>
                              <option>Option</option>
                            </select>
                            <label className="label" htmlFor="detail_diﬃculty">Diﬃculty</label>
                          </div>
                        </div>
                        <div className="col s6">
                          <div className="datepicker-field input-field">
                            <i className="icon-clock2"></i>
                            <input type="text" className="timepicker" id="detail_estimated_time" />
                            <label className="label" htmlFor="detail_estimated_time">Estimated Time</label>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-0">
                        <div className="col s12">
                          <div className="input-field input-tags">
                            <select multiple id="detail_category_tag">
                              <option value="" disabled selected>Choose Category</option>
                              <option value="1">Right Trianges</option>
                              <option value="2">Circles</option>
                              <option value="3">Option</option>
                            </select>
                            <label className="label" htmlFor="detail_category_tag">Category (Tag)</label>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-0">
                        <div className="col s12">
                          <div className="input-field">
                            <textarea id="detail_description" className="materialize-textarea" style={{ height: '70px' }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie </textarea>
                            <label className="label" htmlFor="detail_description">Description (optional)</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <div className="btn-holder right-align">
                <a href="#!" className="waves-effect waves-teal btn-flat pink-text text-darken-1">Cancel</a>
                <a href="#" className="btn waves-effect waves-light bg-blue">Save Worksheet</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DetailPage;
