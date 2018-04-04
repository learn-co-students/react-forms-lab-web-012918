import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleUsernameChange = event =>{
    this.setState({
      username: event.target.value,
      password: this.state.password
    })
  }

  handlePasswordChange = event =>{
    this.setState({
      username: this.state.username,
      password: event.target.value
    })
  }

  handleSubmit = event =>{
    event.preventDefault();
    console.log(this.state)
    if (this.state.username.length > 0 && this.state.password.length > 0){
      alert('works')
    }else{
      alert('fuck you doing')
    }
  }

  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <div>
          <label>
            Username:
            <input
              id="test-username"
              type="text"
              name='username'
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          <h3>username test: {this.state.username}</h3>
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="test-password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          <h3>password test: {this.state.password}</h3>
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
