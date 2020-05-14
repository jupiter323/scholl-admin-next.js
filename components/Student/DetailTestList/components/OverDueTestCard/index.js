import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

class OverDueTestCard extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDropdownClick = event => {
    const { onSetDropdown, onCloseDropdown, dropdownIsOpen, index } = this.props;
    event.preventDefault();
    if (dropdownIsOpen) {
      return onCloseDropdown();
    }
    return onSetDropdown(index);
  };

  render() {
    const {
      dropdownIndex,
      index,
      dropdownIsOpen,
      test: { test_name, test_description, due_date, assignment_date, student_test_id, student_id },
      onEnterAnswers,
      handleTestSettingModalOpen,
      onDeleteTest,
    } = this.props;
    const formattedDueDate = moment(due_date).format("MM/DD/YY");
    const formattedCompletedDate = moment(assignment_date).format("MM/DD/YY");
    return (
      <React.Fragment>
        <div
          className="card-full-width card-scored card"
          style={{ margin: "10px", minWidth: "580px" }}
        >
          <div className="card-content">
            <div className=" card-panel-row row mb-0">
              <div className="col s12">
                <ul className="to-do-list">
                  <li>
                    <div
                      className="row"
                      style={{ marginBottom: "0px !important", marginTop: "20px" }}
                    >
                      <div className="col s12 m6">
                        <strong className="list-title">{test_name}</strong>
                      </div>
                      <div className="col s6 m6 right-align">
                        <div className="row icons-row" style={{ marginBottom: "10px" }}>
                          <div className="dropdown-block col">
                            <a
                              href="#"
                              className="dropdown-trigger btn"
                              onClick={this.handleDropdownClick}
                            >
                              <i className="material-icons dots-icon">more_vert</i>
                            </a>
                            <If condition={dropdownIsOpen && dropdownIndex === index}>
                              <ul
                                id="dropdown01"
                                style={{
                                  display: "block",
                                  minWidth: "160px",
                                  transformOrigin: "0px 0px 0px",
                                  opacity: "1",
                                  transform: "scaleX(1) scaleY(1)",
                                  width: "210px",
                                }}
                                className="dropdown-content"
                              >
                                <li>
                                  <a href="#" onClick={handleTestSettingModalOpen}>
                                    Edit Test Settings
                                  </a>
                                </li>
                                <li>
                                  <a href="#" onClick={() => onEnterAnswers(student_test_id)}>
                                    Edit/Enter Answers
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="disabled">
                                    Excuse/Unexcuse lateness
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="disabled">
                                    Mark flags reviewed
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="disabled">
                                    Reset
                                  </a>
                                </li>
                                <li>
                                  <a href="#" onClick={() => onDeleteTest(student_test_id, student_id)} className="red-text text-darken-3">
                                    Unassign
                                  </a>
                                </li>
                              </ul>
                            </If>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col s12 m8">
                        <ul className="info-list info-list-gray  overdue">
                          <li>
                            <span className="list-status">
                              <span className="ico-mark" />
                              <span className="status-text">Assigned {formattedCompletedDate}</span>
                            </span>
                          </li>
                          <li>
                            <span className="list-date">
                              <i className="icon-calendar" />
                              <span className="date">Due {formattedDueDate}</span>
                            </span>
                          </li>
                        </ul>
                        <div
                          className="card-meta-block"
                          style={{ padding: "0px", marginTop: "10px" }}
                        >
                          <dl className="dl-horizontal">
                            <dt>Version:</dt>
                            <dd>{test_description}</dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

OverDueTestCard.propTypes = {
  onSetDropdown: PropTypes.func.isRequired,
  dropdownIsOpen: PropTypes.bool.isRequired,
  onCloseDropdown: PropTypes.func.isRequired,
  onDownloadReport: PropTypes.func.isRequired,
  test: PropTypes.object.isRequired,
};

export default OverDueTestCard;
