import React, { Component } from 'react';
import DashboardCard from '../components/Dashboard/components/DashboardCard';

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
                        <div className="dashboard-card card">
                            <div className="card-content">
                                <h2 className="dashboard-title">
                                    <time dateTime="2019-02-02">Feb 2, 2019</time>
                                    <span className="small">(today)</span>
                                </h2>
                                <div className="row d-flex-content card-width-366 mb-0">
                                    <DashboardCard ></DashboardCard>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Dashboard