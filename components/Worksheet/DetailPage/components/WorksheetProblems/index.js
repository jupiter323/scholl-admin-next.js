import React from 'react';
import PropTypes from 'prop-types';

import { subjectMap, difficultyMap, typeMap } from '../../../utils/worksheetFilterMap';

class WorksheetProblems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      true: true,
    };
  }

  mapProblemsAndPassages = () => {
    const { problems, passages } = this.props;
    const mappableArray = [...problems, ...passages];
    return mappableArray.map(problemOrPassage => {
      if (problemOrPassage.difficulty) {
        return (
          <li className="collection-item">
            <div className="list-row">
              <div className="cell handle cell_01">
                <i className="custom-icon-burger"></i>
              </div>
              <div className="cell cell_02">
                <span className="list-num"></span>
              </div>
              <div className="cell cell_03">
                <span>{subjectMap[problemOrPassage.subject]}</span>
              </div>
              <div className="cell cell_04">
                <span>{typeMap[problemOrPassage.type]}</span>
              </div>
              <div className="cell cell_05">
                <span>{problemOrPassage.inWorkbook ? 'Yes' : 'No'}</span>
              </div>
              <div className="cell cell_06">
                <span>{difficultyMap[problemOrPassage.difficulty].charAt(0)}</span>
              </div>
              <div className="cell right-align cell_07">
                <span className="icon-frame">
                  <a href="#"><i className="icon-eye"></i></a>
                </span>
                <a href="#" className="close"><i className="icon-close"></i></a>
              </div>
            </div>
          </li>
        );
      }
      return (
        <li className="collection-item combined-rows">
          <div className="combined-holder">
            <div className="combined-header">
              <div className="burger-block handle">
                <i className="custom-icon-burger"></i>
              </div>
              <div className="combined-title">{problemOrPassage.title}</div>
              <a href="#" className="close"><i className="icon-close"></i></a>
            </div>
            <ol className="problems-list-number problems-list collection">
              {problemOrPassage.problems.map(problem => (
                <li className="collection-item">
                  <div className="list-row">
                    <div className="cell handle cell_01">&nbsp;</div>
                    <div className="cell cell_02">
                      <span className="list-num"></span>
                    </div>
                    <div className="cell cell_03">
                      <span>{subjectMap[problem.subject]}</span>
                    </div>
                    <div className="cell cell_04">
                      <span>{typeMap[problem.type]}</span>
                    </div>
                    <div className="cell cell_05">
                      <span>{problem.inWorkbook ? 'Yes' : 'No'}</span>
                    </div>
                    <div className="cell cell_06">
                      <span>{difficultyMap[problem.difficulty].charAt(0)}</span>
                    </div>
                    <div className="cell right-align cell_07">
                      <span className="icon-frame">
                        <a href="#"><i className="icon-eye"></i></a>
                      </span>
                      <a href="#" className="close invisible"><i className="icon-close"></i></a>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </li>
      );
    })
  }

  render() {
    const { onOpenProblemBankModal, onRemoveAllProblems } = this.props;
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
                {this.mapProblemsAndPassages()}
              </ol>
            </div>
            <div className="card-footer right-align">
              <a
                href="#"
                className="waves-effect waves-teal btn-flat pink-text text-darken-1"
                onClick={onRemoveAllProblems}
              >
                Remove All
              </a>
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
  problems: PropTypes.array.isRequired,
  passages: PropTypes.array.isRequired,
  onRemoveAllProblems: PropTypes.func.isRequired,
  onOpenProblemBankModal: PropTypes.func.isRequired,
}

export default WorksheetProblems;
