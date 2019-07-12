import React, { Component } from 'react';

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
                    </div>
                </div>
            </main>
        );
    }
}

export default Dashboard