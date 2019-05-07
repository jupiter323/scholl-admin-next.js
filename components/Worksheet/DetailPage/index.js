import React from 'react';

import WorksheetDetails from './components/WorksheetDetails';
import WorksheetProblems from './components/WorksheetProblems';
import ProblemBank from './components/ProblemBank';

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      problemBankOpen: true,
    }
  }

  onToggleProblemBankModal = () => this.setState(({ problemBankOpen }) => ({ problemBankOpen: !problemBankOpen }))

  addSelectedProblems = (problems, passages) => {
    console.warn('problems', problems, passages);
    this.onToggleProblemBankModal();
  }

  render() {
    const { problemBankOpen } = this.state;
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
