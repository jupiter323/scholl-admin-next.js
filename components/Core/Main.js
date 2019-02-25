import React from 'react';
import PropTypes from 'prop-types';

const Main = props => (
    <main id="main" role="main">
        <div className="main-holder grey lighten-3">
            <div className="title-row card-panel">
                <div class="mobile-header">
                    <a href="#" data-target="slide-out" className="sidenav-trigger"><i class="material-icon">menu</i></a>
                </div>
                <nav className="breadcrumb-holder">
                    <div className="nav-wrapper">
                        <a href="#" className="breadcrumb">&lt; Instructors</a>
                    </div>
                </nav>
                <h2 className="h1 white-text">
                    <span className="heading-holder">
                        <i className="icon-instructors"></i>
                        <span className="heading-block">George Tutorly</span>
                    </span>
                </h2>
                <nav className="nav-additional">
                    <ul className="menu-additional">
                        <li><a className="active" href="#">Summary</a></li>
                        <li><a href="#">Account</a></li>
                        <li><a href="#">Management Settings</a></li>
                    </ul>
                </nav>
            </div>
            { props.children }
        </div>
    </main>
);

Main.propTypes = {
    children: PropTypes.any,
}

export default Main;