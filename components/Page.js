import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import Meta from './Meta';
import SideNav from './Core/SideNav';
// import Main from './Core/Main';

const theme = {
  grey: '#707070',
  lightGrey: '#959595',
  blue: '#01579b',
  darkBlue: '#01579b',
};

const StyledPage = styled.div``;

const Inner = styled.div``;

// eslint-disable-next-line react/prefer-stateless-function
class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <div className="wrapper">
            <SideNav />
            <Inner>
              { this.props.children }
            </Inner>
          </div>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

Page.propTypes = {
  children: PropTypes.any,
};

export default Page;
