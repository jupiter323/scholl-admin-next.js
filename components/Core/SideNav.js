/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Link from "next/link";
import ActiveLink from "../../utils/ActiveLink";
import { makeSelectUserIsLogged } from "../User/index/selectors";
import { loggedIn } from "../../utils/AuthService";

import { setUserIsLogged } from "../User/index/actions";
import $ from "jquery";

if (typeof window !== "undefined") {
  window.$ = $;
  window.jQuery = $;
  // eslint-disable-next-line global-require
  require("materialize-css");
}

const menuItems = [
  {
    key: "dashboard",
    page: "dashboard"
  },
  {
    key: "students",
    page: "students"
  },
  {
    key: "instructors",
    page: "all-instructors"
  },
  {
    key: "classes",
    page: "classes"
  },
  {
    key: "locations",
    page: "all-locations"
  },
  {
    key: "worksheets",
    page: "worksheets"
  },
  {
    key: "course templates",
    page: "courseTemplates"
  },
  {
    key: "help",
    page: "help"
  }
];

const menuIconMap = {
  dashboard: "icon-speed",
  students: "icon-student",
  instructors: "icon-instructors",
  classes: "icon-members",
  locations: "icon-location",
  worksheets: "icon-sheets-w",
  "course templates": "icon-module",
  help: "icon-help"
};

class SideNav extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const isLogged = loggedIn();
    const { onSetUserIsLogged } = this.props;
    onSetUserIsLogged(isLogged);
    $(".sidenav").sidenav();
  }

  render() {
    const { firstName, lastName } = this.props.user;
    return (
      <aside id="slide-out" className="sidenav">
        <div className="sidenav-holder">
          <h1 className="white-text">
            <img src="/static/images/logo.jpg" alt="image description" />
          </h1>
          <ul>
            {menuItems.map(menuItem => (
              <ActiveLink
                href={`/${menuItem.page}`}
                key={menuItem.key}
                activeClassName="active"
                scroll
              >
                <li key={menuItem.key} style={{ cursor: "pointer" }}>
                  <a>
                    <i className={menuIconMap[menuItem.key]}></i>
                    {menuItem.key.charAt(0).toUpperCase() +
                      menuItem.key.slice(1)}
                  </a>
                </li>
              </ActiveLink>
            ))}
          </ul>
          <div className="log-block white-text" style={{ cursor: "hand" }}>
            <div className="text">
              <Link href="/login">
                <a href="#">
                  <div className="block white-text">Log Out</div>
                </a>
              </Link>
              <Link href="/account">
                <a>
                  <div className="block white-text">
                    {firstName} {lastName}
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}

SideNav.propTypes = {
  isLogged:PropTypes.bool,
  onSetUserIsLogged:PropTypes.func,
  user: PropTypes.object.isRequired,
}

function mapDispatchToProps(dispatch){
  return {
    onSetUserIsLogged:(value) => dispatch(setUserIsLogged(value)),
  }
}

const mapStateToProps = createStructuredSelector({
  isLogged:makeSelectUserIsLogged(),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {pure:false}
)

export default compose(withConnect)(SideNav);
