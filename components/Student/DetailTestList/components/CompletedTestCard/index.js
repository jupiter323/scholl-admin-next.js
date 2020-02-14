import React from "react";
import PropTypes from "prop-types";

class CompletedTestCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { show } = this.props;
    return (
      <React.Fragment>
        {show && (
          <div className="card-full-width card-scored card">
            <div className="card-content">
              <ul className="to-do-list">
                <li>
                  <div className="row">
                    <div className="col s12 m12">
                      <strong className = "list-title">2nd Practice Test</strong>
                    </div>
                    <div className="col s12 m6">
                      <ul className="info-list info-list-gray  assigned">
                        <li>
                          <span className="list-status">
                            <span className="ico-mark"/>
                            <span className="status-text">Complete 6/3/20</span>
                          </span>
                        </li>
                        <li>
                          <span className="list-date">
                            <i className="icon-calendar" />
                            <span className="date">Due 6/8/20</span>
                          </span>
                        </li>
                      </ul>
                      <div
                        className="card-meta-block"
                        style={{ padding: "0px", marginTop: "10px" }}
                      >
                        <dl className="dl-horizontal">
                          <dt>Version:</dt>
                          <dd>SAT Practice Test #5</dd>
                        </dl>
                      </div>
                    </div>
                    {/* <div className="col s12 m6">
                      <div className="btn-row d-flex align-items-center row">
                        <div className="col">
                          <label
                            className="label-wrap"
                            style={{ marginRight: "9px" }}
                          >
                            <input type="checkbox" className="filled-in" />
                            <span>Timed</span>
                          </label>
                        </div>
                        <div className="col right-align">
                          <a
                            href="#"
                            className="waves-effect waves-light btn btn-large-rounded green"
                          >
                            Start <br />
                            Next Section
                          </a>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </li>
              </ul>
              <ul className="points-list-custom">
                <li className="point-custom-large">
                  <span className="badge-circle" style = {{width:"120px",height:'120px'}}>n/a</span>
                </li>
                <li>
                  <span className="badge-circle" style = {{backgroundColor:'#4785f4'}}>
                    <span className="badge-text" style={{ fontSize: "14px" }}>
                      Math
                      <br />
                      <h2 style={{ marginTop: "10px" }}>
                        540
                        <br />
                        +70
                      </h2>
                    </span>
                  </span>
                </li>
                <li>
                  <span
                    className="badge-circle"
                  >
                    <h4>Reading
                    <br />
                    &amp; Writing
                    <br />
                    </h4>
                    <span>
                    <h4>
                      340
                      <br />
                      +70
                      </h4>
                    </span>
                  </span>
                </li>

                <li className="style-blue-light">
                  <span className="badge-circle">
                    <span className="badge-text" style={{ fontSize: "16px" }}>
                      Reading
                      <br />
                      <h2 style={{ marginTop: "10px" }}>
                        500
                        <br />
                        +100
                      </h2>
                    </span>
                  </span>
                </li>
                <li className="style-amber">
                  <span className="badge-circle">
                    <span
                      className="badge-text"
                      style={{ fontSize: "16px", marginBottom: "-10px" }}
                    >
                      Writing
                      <br />
                      <h2>
                        500
                        <br />
                        +70
                      </h2>
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        )}
        <style jsx>
          {`
          `}
        </style>
      </React.Fragment>
    );
  }
}

CompletedTestCard.propTypes = {
  show: PropTypes.bool.isRequired
};

export default CompletedTestCard;
