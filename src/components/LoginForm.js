import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      password: "",
      username: "",
    };
  }

  loginSubmit = (event) => {
    event.preventDefault();

    if (!this.state.username || !this.state.password ) {
      return
    }
    this.props.onSubmit(this.state);

  }

  usernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  passwordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.loginSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username" onChange={this.usernameChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password" onChange={this.passwordChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}


export default LoginForm;
