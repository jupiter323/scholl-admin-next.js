/* eslint-disable  */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const StudentsWhoHave = ({ state: { overdueCoursework, flaggedProblems, fewerThan2PracticeTests } }) => {
  const [ overdueSectionOpen, setOverdueSectionOpen ] = useState(false);
  const [ flaggedSectionOpen, setFlaggedSectionOpen ] = useState(false);
  const [ fewerThan2PracticeTestsOpen, setFewerThan2PracticeTestsOpen ] = useState(false);
    return (
      <div className="card-block">
      <h2>Student Who Have...</h2>
      <div className="row">
        <div className="card-main-col col s12 m8 l7 xl4">
          <ul className="card-detail card-main-full card collapsible expandable">
            <li className={overdueSectionOpen ? "pink-darken-2 pink-text text-darken-2 active" : "pink-darken-2 pink-text text-darken-2"}>
              <div
                onClick={() => setOverdueSectionOpen(!overdueSectionOpen)}
                className="card card-alert collapsible-header"
              >
                <span className="icon-box pink darken-2"><i className="icon-exclamation-mark"></i></span>
                <div className="alert-text">
                  <p><b>Overdue Coursework</b></p>
                  <div className="value"><b className="text-large">{overdueCoursework.length}</b></div>
                </div>
                <span className="collapsible-opener">
                  <i className="custom-icon-traingle-down"></i>
                </span>
              </div>
              <div
                className="card-content collapsible-body"
                style={{ display: overdueSectionOpen ? 'block' : '' }}
              >
                <table className="card-detail-table">
                  <thead>
                    <tr>
                      <th>
                        <a href="#"><span className="sort-holder">Name <i className="sort-icon custom-icon-traingle-down"></i></span></a>
                      </th>
                      <th>
                        <a href="#"><span className="sort-holder">Overdue <i className="sort-icon custom-icon-traingle-down"></i></span></a>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {overdueCoursework.map(student => (
                      <tr key={student.name}>
                        <td>{student.name}</td>
                        <td>{student.overdueAssignments}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </li>
          </ul>
        </div>
        <div className="card-main-col col s12 m8 l7 xl4">
          <ul className="card-detail card-main-full card collapsible expandable">
            <li className={flaggedSectionOpen ? "pink-darken-3 pink-text text-darken-3 active" : "pink-darken-3 pink-text text-darken-3"}>
              <div
                onClick={() => setFlaggedSectionOpen(!flaggedSectionOpen)}
                className="card card-alert collapsible-header"
              >
                <span className="icon-box pink darken-3"><i className="icon-exclamation-mark"></i></span>
                <div className="alert-text">
                  <p><b>Flagged Problems</b></p>
                  <div className="value"><b className="text-large">{flaggedProblems.length}</b></div>
                </div>
                <span className="collapsible-opener">
                  <i className="custom-icon-traingle-down"></i>
                </span>
              </div>
              <div
                className="card-content collapsible-body"
                style={{ display: flaggedSectionOpen ? 'block' : '' }}
              >
                <table className="card-detail-table">
                  <thead>
                    <tr>
                      <th>
                        <a href="#"><span className="sort-holder">Name <i className="sort-icon custom-icon-traingle-down"></i></span></a>
                      </th>
                      <th>
                        <a href="#"><span className="sort-holder">Flags<i className="sort-icon custom-icon-traingle-down"></i></span></a>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {flaggedProblems.map(student => (
                      <tr key={student.name}>
                        <td>{student.name}</td>
                        <td>{student.flaggedProblems}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </li>
          </ul>
        </div>
        <div className="card-main-col col s12 m8 l7 xl4">
          <ul className="card-detail card-main-full card collapsible expandable">
            <li className={fewerThan2PracticeTestsOpen ? "pink-darken-4 pink-text text-darken-4 active" : "pink-darken-4 pink-text text-darken-4"}>
              <div
                onClick={() => setFewerThan2PracticeTestsOpen(!fewerThan2PracticeTestsOpen)}
                className="card card-alert collapsible-header"
              >
                <span className="icon-box pink darken-4"><i className="icon-exclamation-mark"></i></span>
                <div className="alert-text">
                  <p><b>Fewer than 2  Practice Tests</b></p>
                  <div className="value"><b className="text-large">{fewerThan2PracticeTests.length}</b></div>
                </div>
                <span className="collapsible-opener">
                  <i className="custom-icon-traingle-down"></i>
                </span>
              </div>
              <div
                className="card-content collapsible-body"
                style={{ display: fewerThan2PracticeTestsOpen ? 'block' : '' }}
              >
                <table className="card-detail-table">
                  <thead>
                    <tr>
                      <th>
                        <a href="#"><span className="sort-holder">Name <i className="sort-icon custom-icon-traingle-down"></i></span></a>
                      </th>
                      <th>
                        <a href="#"><span className="sort-holder">Tests<i className="sort-icon custom-icon-traingle-down"></i></span></a>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {fewerThan2PracticeTests.map(student => (
                      <tr key={student.name}>
                        <td>{student.name}</td>
                        <td>{student.fewerThan2PracticeTests}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

StudentsWhoHave.propTypes = {
  state: PropTypes.object.isRequired,
};

export default StudentsWhoHave;
