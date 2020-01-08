import React from 'react';
import PropTypes from 'prop-types';
import { Sticky, StickyContainer } from 'react-sticky';
import ClassNavBar from './components/ClassNavBar';
import DetailSummaryPage from './DetailSummaryPage';
import DetailWorksheetPage from './DetailWorksheetPage';
import TestSectionsPage from './TestSectionsPage';

class Class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 'summary',
    };
  }

  onSetActivePage = (activePage) => this.setState({ activePage })

  renderCurrentPage = () => {
    const { activePage } = this.state;
    const { currentClass } = this.props;
    if (activePage === 'summary') {
      return <DetailSummaryPage currentClass={currentClass} />;
    }
    if (activePage === 'worksheets') {
      return <DetailWorksheetPage />;
    }
    if (activePage === 'testSections') {
      return <TestSectionsPage />;
    }
    return null;
  }

  render() {
    const { activePage } = this.state;
    const { currentClass: { name }, onRedirectToClassList } = this.props;
    return (
      <React.Fragment>
        <StickyContainer>
          <Sticky>
            {({ style }) => (
              <div className="title-row card-panel" style={{ ...style, zIndex: 1999 }}>
                <div className="mobile-header">
                  <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                </div>
                <nav className="breadcrumb-holder">
                  <div className="nav-wrapper ">
                    <a href="#" onClick={onRedirectToClassList} className="breadcrumb">&lt; Classes</a>
                  </div>
                </nav>
                <h2 className="h1 white-text">
                  <span className="heading-holder">
                    <i className="icon-members"></i>
                    <span className="heading-block">{name}</span>
                  </span>
                </h2>
                <ClassNavBar active={activePage} onSetActivePage={this.onSetActivePage} />
              </div>
            )}
          </Sticky>
          {this.renderCurrentPage()}
        </StickyContainer>
      </React.Fragment>
    );
  }
}

Class.propTypes = {
  currentClass: PropTypes.object.isRequired,
  onRedirectToClassList: PropTypes.func.isRequired,
};

export default Class;
