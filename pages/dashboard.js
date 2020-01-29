import React, { Component } from "react";
import Router from "next/router";
import { Sticky, StickyContainer } from "react-sticky";
import SessionList from "../components/Dashboard/components/SessionList";
import { loggedIn } from "../utils/AuthService";
// eslint-disable-next-line react/prefer-stateless-function
class Dashboard extends Component {
  componentDidMount() {
    if (!loggedIn()) {
      Router.push("/login");
    }
  }
  render() {
    return (
      <main id="main" role="main">
        <div className="main-holder grey lighten-5">
          <StickyContainer>
            <Sticky>
              {({ style }) => (
                <div
                  className="title-row card-panel"
                  style={{ ...style, zIndex: 1999 }}
                >
                  <div className="mobile-header">
                    <a
                      href="#"
                      data-target="slide-out"
                      className="sidenav-trigger"
                    >
                      <i className="material-icons">menu</i>
                    </a>
                  </div>
                  <h2 className="h1 white-text">
                    <span className="heading-holder">
                      <i className="icon-speed"></i>
                      <span className="heading-block">Dashboard</span>
                    </span>
                  </h2>
                  <nav className="nav-additional">
                    <ul className="menu-additional">
                      <li>
                        <a className="active" href="#">
                          Upcoming Sessions
                        </a>
                      </li>
                      <li>
                        <a href="#">Stats</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              )}
            </Sticky>
            <div className="content-section">
              <SessionList />
            </div>
          </StickyContainer>
        </div>
      </main>
    );
  }
}

export default Dashboard;
