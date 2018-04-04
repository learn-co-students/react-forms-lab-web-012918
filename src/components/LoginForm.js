import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  onUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  onPasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  submitHandler = (event) => {
    event.preventDefault()
    if(this.state.username.length > 0 && this.state.password.length > 0){
      this.props.onSubmit()
    }
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label>
            Username
            <input
              id="test-username"
              type="text"
              value={this.state.username}
              onChange={this.onUsernameChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="test-password"
              type="password"
              value={this.state.password}
              onChange={this.onPasswordChange} />
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
