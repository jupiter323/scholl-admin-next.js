import React, { Component } from "react";
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import PropTypes from "prop-types";
import { logIn, loggedIn, logout, setToken } from "../utils/AuthService";
import Router from "next/router";
import { setUserIsLogged, getCurrentUser } from "../components/User/index/actions";
import { makeSelectCurrentUser } from "../components/User/index/selectors";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      forgotPassword: false,
      loginError: false,
      recoverEmail: "",
    };
  }

  componentDidMount() {
    if (loggedIn()) {
      logout();
      const { onSetUserIsLogged } = this.props;
      onSetUserIsLogged(false);
    }
    this.textFieldForUserEmailRef = React.createRef();
    this.textFieldForPasswordRef = React.createRef();
    this.chkRememberRef = React.createRef();
    this.buttonForLoginRef = React.createRef();
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
      const { onFetchCurrentUser } = this.props;
      onFetchCurrentUser();
    } else {
      this.setState({
        loginError: true,
      })
    }
  };

  componentWillReceiveProps = (nextProps) => {
    const { onSetUserIsLogged } = this.props;
    const{currentUser} = nextProps;
    if (currentUser && currentUser.type === "INSTRUCTOR") {
      onSetUserIsLogged(true);
      Router.push("/dashboard");
    } else {
      onSetUserIsLogged(false);
      this.setState({
        loginError: true,
      })
    }
}


handleChangeForm = event => {
  this.setState({
    [event.target.name]: event.target.value,
  });
};

handleForgotPassword = () => {
  console.log('this.recoverEmail', this.state.recoverEmail)
}
onSetForgotPassword = () => {
  this.setState({
    forgotPassword: true,
  });
}

render() {
  const { email, password, forgotPassword, loginError, recoverEmail } = this.state;

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
              <Choose>
                <When condition={forgotPassword}>
                  <div className="forgot_account">
                    <div className="discrption">
                      <h5>Forgot Account Number</h5>
                      <p>If you’ve lost or forgotten your Account Number, we can sendt it to your email address. To receive your Account Number by email, enter your email address below and click “Send Account Number”.</p>
                    </div>
                    <div className="formsec">
                      <ul className="clearfix">
                        <li>
                          <div className="input-field input-field-icon">
                            <input type="email" name="recoverEmail" placeholder="Enter your Email Addres" value={recoverEmail} onChange={this.handleChangeForm} />
                            <span className="input-icon icon-letter2"></span>
                          </div>
                        </li>
                        <li><button className="btn waves-effect read" onClick={this.handleForgotPassword}>Send Account Number</button></li>
                      </ul>
                    </div>
                  </div>
                </When>
                <Otherwise>
                  <div className="forgot_account">
                    <div className="discrption">
                      {loginError ? <h5 style={{ color: 'red' }}>Please Enter valid email and password</h5> :
                        <>
                          <h5>Please Enter your email and password</h5>
                          <p>
                            For security purposes, you need to enter a current your
                            email and password for this account.
                        </p></>}
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
                              autoFocus
                              ref={this.textFieldForUserEmailRef}
                              onKeyPress={event => {
                                if (event.key === "Enter") {
                                  this.textFieldForPasswordRef.current.focus();
                                }
                              }}
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
                              className="password"
                              autoFocus
                              ref={this.textFieldForPasswordRef}
                              onKeyPress={event => {
                                if (event.key === "Enter") {
                                  this.chkRememberRef.current.focus();
                                }
                              }}
                            />
                            <span className="input-icon icon-key"></span>
                          </div>
                        </li>
                        <div className="course-context_two-col" style={{ marginBottom: 20 }}>
                          <div className="column">
                            <div className="checkbox-block" style={{ textAlign: 'left', paddingLeft: 20 }}>
                              <div className="checkbox-holder">
                                <label>
                                  <input
                                    type="checkbox"
                                    className="filled-in"
                                    name="chk_remember"
                                    id="chk_remember"
                                    value
                                    autoFocus
                                    ref={this.chkRememberRef}
                                    onKeyPress={event => {
                                      if (event.key === "Enter") {
                                        this.buttonForLoginRef.current.click();
                                      }
                                    }}

                                  />
                                  <span className="large-label">Remember Me</span>
                                </label>
                              </div>

                            </div>
                          </div>
                          <div style={{ textAlign: "right", width: '100%', paddingRight: 20 }}>
                            <a onClick={this.onSetForgotPassword} style={{ cursor: 'pointer' }}>Forgot Password?</a>
                          </div>
                        </div>

                        <li>
                          <button className="btn waves-effect read" onClick={this.handleSubmit} ref={this.buttonForLoginRef}>LogIn</button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Otherwise>
              </Choose>
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
            .formsec ul li input[type="password"] {
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

const mapStateToProps = createStructuredSelector({
  currentUser: makeSelectCurrentUser(),
})

function mapDispatchToProps(dispatch) {
  return {
    onSetUserIsLogged: value => dispatch(setUserIsLogged(value)),
    onFetchCurrentUser: () => dispatch(getCurrentUser()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Login);
