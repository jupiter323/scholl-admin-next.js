import React from 'react';
import PropTypes from 'prop-types';

class WorksheetProblems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      true: true,
    };
  }

  render() {
    const { onOpenProblemBankModal } = this.props;
    return (
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
              <a
                href="#"
                className="modal-trigger link-btn waves-effect waves-teal btn-flat"
                onClick={onOpenProblemBankModal}
              >
                Add Problems
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

WorksheetProblems.propTypes = {
  onOpenProblemBankModal: PropTypes.func.isRequired,
}

export default WorksheetProblems;
