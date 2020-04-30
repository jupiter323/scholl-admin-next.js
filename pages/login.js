import React, { Component } from "react";
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { logIn, loggedIn, logout, setToken } from "../utils/AuthService";
import Router from "next/router";
import { setUserIsLogged } from "../components/User/index/actions";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  componentDidMount() {
    if (loggedIn()) {
      logout();
      const { onSetUserIsLogged } = this.props;
      onSetUserIsLogged(false);
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    // const email = "test2@example.com";
    // const password = "password";
    const { email, password } = this.state;
    const postBody = {
      email,
      password,
    };
    const data = await logIn(postBody);
    if (data.token && data.expires_at) {
      setToken(data.token, data.expires_at);
      const { onSetUserIsLogged } = this.props;
      onSetUserIsLogged(true);
      Router.push("/dashboard");
    }
  };

  handleChangeForm = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <React.Fragment>
        <div className="wrapper forgot_account_number">
          <div className="container-fluid clearfix">
            <div className="rightsec padleft clearfix">
              <div className="boxgroup">
                <div className="choicelogo">
                  <a href="#">
                    <img src="./static/images/choice_logo_big.png" alt="" />
                  </a>
                </div>
                <div className="forgot_account">
                  <div className="discrption">
                    <h5>Please Enter your email and password</h5>
                    <p>
                      For security purposes, you need to enter a current your
                      email and password for this account.
                    </p>
                  </div>
                  <div className="formsec">
                    <ul className="clearfix">
                      <li>
                        <div className="input-field input-field-icon">
                          <input
                            type="text"
                            name="email"
                            placeholder="email"
                            value={email}
                            onChange={this.handleChangeForm}
                            className="email"
                          />
                          <span className="input-icon icon-letter2"></span>
                        </div>
                      </li>
                      <li>
                        <div className="input-field input-field-icon">
                          <input
                            type="password"
                            name="password"
                            placeholder="password"
                            value={password}
                            onChange={this.handleChangeForm}
                          />
                          <span className="input-icon icon-key"></span>
                        </div>
                      </li>
                      <li style={{ textAlign: "right" }}>
                        <a >Forgot Password</a>
                      </li>
                      <li>
                        <button className="btn waves-effect read" onClick={this.handleSubmit}>LogIn</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>
          {`
            .container-fluid {
              width: 100%;
              padding: 0 15px;
              margin-right: auto;
              margin-left: auto;
            }

            .clearfix {
              clear: both;
            }
            .wrapper {
              margin: 0 auto;
              height: auto;
              overflow: auto;
            }
            .forgot_account_number {
              height: 100vh !important;
              background-image: url(./static/images/forgot_account_numberbg.png);
              background-position: top center;
              background-repeat: no-repeat;
              background-size: cover;
              background-color: #181a1a;
            }
            .forgot_account_number .rightsec.padleft {
              padding-left: 0;
              text-align: center;
            }

            .forgot_account_number .rightsec {
              text-align: center;
            }
            .padleft {
              padding-left: 255px;
            }
            .rightsec {
              width: 100%;
              height: auto;
              padding-top: 130px;
            }
            .clearfix {
              clear: both;
            }
            .choicelogo {
              margin-bottom: 55px;
            }
            .forgot_account_number .rightsec .boxgroup {
              padding: 0;
              max-width: 554px;
              width: 100%;
              margin-left: auto;
              margin-right: auto;
              margin-top: auto;
              margin-bottom: auto;
            }
            .boxgroup {
              padding: 0 20px 0 30px;
              text-align: center;
            }
            .forgot_account {
              background-color: #ffffff;
              width: 100%;
              height: auto;
              box-shadow: 0 0 3px rgba(0, 0, 0, 0.35);
              margin-bottom: 30px;
              position: relative;
              border-radius: 7px;
              -webkit-border-radius: 7px;
              -moz-border-radius: 7px;
              -ms-border-radius: 7px;
              -o-border-radius: 7px;
              padding: 30px;
            }
            .discrption {
              margin-bottom: 35px;
              width: 100%;
            }
            .forgot_account h5 {
              font-weight: normal;
              margin-bottom: 15px;
            }

            h5 {
              font-size: 24px;
              font-family: "Raleway", sans-serif;
              color: #252525;
            }
            .forgot_account p {
              color: #959595;
            }
            p {
              font-size: 14px;
              font-family: "Raleway", sans-serif;
              color: #484949;
              line-height: 25px;
            }
            .formsec {
              width: 100%;
            }
            .formsec ul {
              margin: 0;
              padding: 0;
              list-style: none;
            }
            .forgot_account .formsec ul li {
              margin-bottom: 27px;
            }
            .forgot_account .formsec .read {
              max-width: 100%;
            }
            .read,
            .see_more {
              line-height: inherit;
              text-transform: none;
            }
            .read {
              font-size: 16px;
              color: #1ca609;
              display: inline-block;
              vertical-align: top;
              font-weight: bold;
              padding: 5px 15px;
              border: 1px solid transparent;
              margin: 0 auto;
              max-width: 170px;
              width: 100%;
              text-align: center;
              border-radius: 5px;
              -webkit-border-radius: 5px;
              -moz-border-radius: 5px;
              -ms-border-radius: 5px;
              -o-border-radius: 5px;
              background-color: #00bbf7;
              color: #ffffff;
              font-size: 14px;
              border: 1px solid transparent;
            }
            .forgot_account .formsec ul li input {
              height: inherit;
              padding-top: 10px;
              padding-bottom: 10px;
            }

            .formsec ul li input[type="text"] {
              height: 2rem;
              margin-bottom: 0;
              font-family: "Raleway", sans-serif;
              font-size: 14px;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}

Login.propTypes = {
  onSetUserIsLogged: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    onSetUserIsLogged: value => dispatch(setUserIsLogged(value)),
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(Login);
