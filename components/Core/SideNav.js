/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import Link from 'next/link';
import $ from 'jquery';

if (typeof window !== 'undefined') {
  window.$ = $;
  window.jQuery = $;
  // eslint-disable-next-line global-require
  require('materialize-css');
}


const menuItems = [
    {
        key: 'dashboard',
        page: 'dashboard',
    },
    {

        key: 'instructors',
        page: 'all-instructors',
    },
    {

        key: 'classes',
        page: 'classes',
    },
    {

        key: 'locations',
        page: 'all-locations',
    },
    {

        key: 'worksheets',
        page: 'worksheets',
    },
    {
        key: 'course templates',
        page: 'courseTemplates',
    },
    {
        key: 'help',
        page: 'help',
    },
];

const menuIconMap = {
  'dashboard': 'icon-speed',
  'students': 'icon-student',
  'instructors': 'icon-instructors',
  'classes': 'icon-members',
  'locations': 'icon-location',
  'worksheets': 'icon-sheets-w',
  'course templates': 'icon-module',
  'help': 'icon-help',
};

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      active: '',
    };
  }

  componentDidMount() {
    $('.sidenav').sidenav();
  }

  handleClick(menuItem) {
    this.setState({ active: menuItem });
  }

  render() {
    return (
      <aside id="slide-out" className="sidenav">
        <div className="sidenav-holder">
          <h1 className="white-text"><img src="" alt="image description" /></h1>
          <ul>
            {menuItems.map(menuItem => (
              <li
                className={this.state.active === menuItem.key ? "active" : ''}
                onClick={() => this.handleClick(menuItem.key)}
                key={menuItem.key}
              >
                <Link href={`/${menuItem.page}`} >
                  <a>
                    <i className={menuIconMap[menuItem.key]}></i>
                    {
                      menuItem.key.charAt(0).toUpperCase() + menuItem.key.slice(1)
                    }
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <a href="#" className="log-block white-text">
            <div className="text">
              <div className="block">Log Out</div>
              <div className="block">Joe Smith</div>
            </div>
          </a>
        </div>
      </aside>
    );
  }
}

export default SideNav;
