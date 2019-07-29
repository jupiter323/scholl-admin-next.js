import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';

import WorksheetDetails from './components/WorksheetDetails';
import WorksheetProblems from './components/WorksheetProblems';
import ProblemBank from './components/ProblemBank';
import { getDefaultCategories, samplePassages, sampleProblems } from '../utils';

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      problemBankOpen: false,
      problems: sampleProblems,
      passages: samplePassages,
    }
  }

  onToggleProblemBankModal = () => this.setState(({ problemBankOpen }) => ({ problemBankOpen: !problemBankOpen }))
  onRemoveAllProblems = () => this.setState({ problems: [], passages: [] })

  // TODO: Determine how to incorporate this method if problems/passges are pulled from worksheet instead of state
  addSelectedProblems = (incomingProblems, incomingPassages, addTime) => {
    const problems = update(this.state.problems, {
      $push: [...incomingProblems],
    });
    const passages = update(this.state.passages, {
      $push: [...incomingPassages],
    });
    console.warn('What are we doing with addTime?', addTime);
    this.setState({ problems, passages }, this.onToggleProblemBankModal);
  }

  render() {
    const { problemBankOpen } = this.state;
    const { worksheet, onSetActiveWorksheet } = this.props;
    return (
      <div className="main-container">
        <div className="container">
          <div className="main-row row">
            <ProblemBank
              open={problemBankOpen}
              onClose={this.onToggleProblemBankModal}
              addSelectedProblems={this.addSelectedProblems}
            />
            <WorksheetProblems
              onOpenProblemBankModal={this.onToggleProblemBankModal}
              onRemoveAllProblems={this.onRemoveAllProblems}
              problems={worksheet.problems}
              passages={worksheet.passages}
            />
            <WorksheetDetails
              worksheet={worksheet}
              defaultCategories={getDefaultCategories(worksheet.classifications, worksheet.subject)}
            />
          </div>
          <div className="row">
            <div className="col s12">
              <div className="btn-holder right-align">
                <a
                  href="#"
                  className="waves-effect waves-teal btn-flat pink-text text-darken-1"
                  onClick={() => onSetActiveWorksheet(null)}
                >
                  Cancel
                </a>
                <a
                  href="#"
                  className="btn waves-effect waves-light bg-blue"
                >
                  Save Worksheet
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

DetailPage.propTypes = {
  worksheet: PropTypes.object,
  onSetActiveWorksheet: PropTypes.func.isRequired,
};

export default DetailPage;
