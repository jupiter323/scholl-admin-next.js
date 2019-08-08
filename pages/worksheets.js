import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import DetailPage from '../components/Worksheet/DetailPage';
import ListPage from '../components/Worksheet/ListPage';

// eslint-disable-next-line react/prefer-stateless-function
class Worksheets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeWorksheet: null,
    };
  }

  onSetActiveWorksheet = (activeWorksheet) => this.setState({ activeWorksheet })

  renderCurrentPage = () => {
    const { activeWorksheet } = this.state;
    if (!activeWorksheet) {
      return <ListPage onSetActiveWorksheet={this.onSetActiveWorksheet} />
    }
    return (
      <React.Fragment>
        <Sticky>
          {({ style }) => (
            <div className="title-row card-panel" style={{ ...style, zIndex: 999 }}>
              <div className="mobile-header">
                <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              </div>
              <nav className="breadcrumb-holder">
                <div className="nav-wrapper ">
                  <a
                    href="#"
                    className="breadcrumb"
                    onClick={() => this.onSetActiveWorksheet(null)}
                  >
                    &lt; Custom Worksheet Library
              </a>
                </div>
              </nav>
              <h2 className="h1 white-text">
                <span className="heading-holder">
                  <i className="icon-sheets-w"></i>
                  <span className="heading-block">Some Custom Worksheet</span>
                </span>
              </h2>
            </div>
          )}
        </Sticky>
        <DetailPage worksheet={activeWorksheet} onSetActiveWorksheet={this.onSetActiveWorksheet} />
      </React.Fragment>
    );
  }

  render() {
    return (
      <main id="main" role="main">
        <div className="main-holder grey lighten-5 switcher-section">
          <StickyContainer>
            {this.renderCurrentPage()}
          </StickyContainer>
        </div>
      </main>
    );
  }
}

export default Worksheets;
