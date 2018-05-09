import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  state = {
    redirectToPreviousRoute: false,
    email: "",
    password: "",
    err: false
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;

    this.props.logIn(
      {
        email,
        password
      },
      () => {
        this.setState({ redirectToPreviousRoute: true });
      }
    );
  };

  handleChange = e => {
    const value = e.currentTarget.value;
    const fieldName = e.currentTarget.dataset.fieldName;

    if (fieldName === "email") {
      const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var res = reg.exec(value);
      if (res === null) {
        this.setState({
          err: true
        });
      } else {
        this.setState({
          err: false
        });
      }
    }
    this.setState(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  render() {
    const { location, errorMsg } = this.props;
    const { from } = location.state || { from: { pathname: "/" } };
    const { email, password, redirectToPreviousRoute } = this.state;

    if (redirectToPreviousRoute) {
      return <Redirect to={from} />;
    }
    const errEmail = <div className="err">Email is not correct</div>;
    return (
      <div>
        {errorMsg && <p>{errorMsg}</p>}
        <form onSubmit={this.handleSubmit}>
          <input
            data-field-name={"email"}
            type={"email"}
            onChange={this.handleChange}
            placeholder={"Email"}
            value={email}
          />
          <input
            data-field-name={"password"}
            type={"password"}
            onChange={this.handleChange}
            placeholder={"Пароль"}
            value={password}
          />
          <button type="submit" disabled={this.state.err}>
            Log in
          </button>
          {this.state.err ? errEmail : ""}
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  logIn: PropTypes.func.isRequired,
  errorMsg: PropTypes.string
};

export default Login;
