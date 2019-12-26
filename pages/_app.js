import React from "react";
import App, { Container } from "next/app";
import { Provider } from "react-redux";
import "isomorphic-fetch";
import Page from "../components/Page";
import withReduxStore from "../utils/with-redux-store";

class ClearChoice extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Provider store={reduxStore}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </Provider>
      </Container>
    );
  }
}
export default withReduxStore(ClearChoice);
