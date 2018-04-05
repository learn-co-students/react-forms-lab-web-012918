import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }

  handleFormSubmit = event => {
    event.preventDefault()
    const {username, password} = this.state

    if (!username || !password) {
      return
    }
  }

  updateUsername = event => {
    this.setState({
      username: event.target.value
    })
  }

  updatePassword = event => {
    console.log(event.target.value)
    this.setState({
      password: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" onChange={this.updateUsername} value={this.state.username} name="username" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" onChange={this.updatePassword} value={this.state.password} name="password" />
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
