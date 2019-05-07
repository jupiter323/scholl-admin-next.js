import React from 'react';

import WorksheetDetails from './components/WorksheetDetails';
import WorksheetProblems from './components/WorksheetProblems';
import ProblemBank from './components/ProblemBank';
import sampleProblems from '../utils/sampleProblems';
import samplePassages from '../utils/samplePassages';

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

  addSelectedProblems = (problems, passages, addTime) => {
    console.warn('stubbed out add problems', problems, passages, addTime);
    this.onToggleProblemBankModal();
  }

  render() {
    const { problemBankOpen, problems, passages } = this.state;
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
              problems={problems}
              passages={passages}
            />
            <WorksheetDetails
              worksheet={{}}
            />
          </div>
          <div className="row">
            <div className="col s12">
              <div className="btn-holder right-align">
                <a
                  href="#"
                  className="waves-effect waves-teal btn-flat pink-text text-darken-1"
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

export default DetailPage;
