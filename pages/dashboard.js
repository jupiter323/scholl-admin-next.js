import React, { Component } from 'react';
import SessionList from "../components/Dashboard/components/SessionList";

class Dashboard extends Component {
    render() {
        return (
            <main id="main" role="main">
                <div className="main-holder grey lighten-5">
                    <div className="title-row card-panel">
                        <div className="mobile-header">
                            <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        </div>
                        <h2 className="h1 white-text">
                          <span className="heading-holder">
                            <i className="icon-speed"></i>
                            <span className="heading-block">Dashboard</span>
                          </span>
                        </h2>
                        <nav className="nav-additional">
                            <ul className="menu-additional">
                                <li><a className="active" href="#">Upcoming Sessions</a></li>
                                <li><a href="#">Stats</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="content-section">
                        <SessionList/>
                    </div>
                </div>
            </main>
        );
    }
}

export default Dashboard