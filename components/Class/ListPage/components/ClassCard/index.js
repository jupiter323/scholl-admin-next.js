import React from "react";
import PropTypes from "prop-types";

class ClassCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card-main-col col s12 m8 l7 xl5">
        <div className="card-main card-class card card-large">
          <div
            className="owner-box card-panel"
            style={{ backgroundColor: "#408e49", color: "#fff" }}
          >
            <div className="card-panel-row row">
              <div className="col s9">
                <div className="user-block">
                  <div
                    className="user-circle"
                    style={{ backgroundColor: "#fff", color: "#408e49" }}
                  >
                    <span className="initials">8</span>
                    <span className="ititials-text">students</span>
                  </div>
                  <div className="user-text" style={{ color: "#fff" }}>
                    <h4 className="h3">Some Class in June</h4>
                    <time dateTime="P120D">6/1/19 - 8/5/19</time>
                  </div>
                </div>
              </div>
              <div className="col s3 right-align">
                <div className="row icons-row">
                  <div className="col right-align">
                    <span className="block-icon">
                      <i className="icon-members" />
                      <span className="text-icon">Class</span>
                    </span>
                  </div>
                  <div className="dropdown-block col">
                    {/* Dropdown Trigger */}
                    <a
                      className="dropdown-trigger btn"
                      href="#"
                      data-target="dropdown01"
                    >
                      <i className="material-icons dots-icon">more_vert</i>
                    </a>
                    {/* Dropdown Structure */}
                    <ul
                      id="dropdown01"
                      className="dropdown-content dropdown-wide"
                    >
                      <li>
                        {/* Modal Trigger */}
                        <a
                          href="#modal_user_edit"
                          className="modal-trigger link-block"
                        >
                          Edit
                        </a>
                      </li>
                      <li>
                        <a href="#!">Clone</a>
                      </li>
                      <li>
                        <a href="#!">Impersonate</a>
                      </li>
                      <li>
                        <a href="#!">Delete</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-content">
            <div className="row d-flex mb-0">
              <div className="col s12 m5">
                <div className="row mb-0">
                  <div className="col s6 m12">
                    <ul className="points-list-custom">
                      <li className="style-aqua">
                        <span className="badge-circle">
                          +223
                          <span className="badge-text">improvement</span>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="col s6 m12">
                    <div className="chart-block chart-block-test">
                      <span className="value-max">24</span>
                      <div
                        className="js-donut-chart"
                        data-stroke-width={15}
                        data-source="./inc/score-data-class-instruction.json"
                      />
                      <div className="chart-text">
                        <span className="title">Instruction</span>
                        <span className="value">63%</span>
                        <span className="description">
                          vs scheduled instruction
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12 m7">
                <ul className="points-list">
                  <li className="style-purple-darken">
                    <span className="badge-circle">62</span>
                    <span className="point-text">coursework assigned</span>
                  </li>
                  <li className="style-purple-lighten">
                    <span className="badge-circle">93%</span>
                    <span className="point-text">coursework completed</span>
                  </li>
                  <li className="style-red-darken-3">
                    <span className="badge-circle">127</span>
                    <span className="point-text">
                      problems ﬂagged for review
                    </span>
                  </li>
                  <li className="style-blue-light">
                    <span className="badge-circle">1238</span>
                    <span className="point-text">average score</span>
                  </li>
                  <li className="style-blue">
                    <span className="badge-circle">85%</span>
                    <span className="point-text">achieved target score</span>
                  </li>
                  <li className="style-orange-accent-4">
                    <span className="badge-circle">1.8</span>
                    <span className="point-text">
                      average practice tests completed
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-inner-row">
              <div className="row-holder">
                <ul className="category-list">
                  <li className="category-box ">
                    <span className="category-badge badge-purple">TW</span>
                    <span className="category-text">Tutor Withalongername</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClassCard;
