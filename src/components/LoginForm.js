import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username : "",
      password : ""
    };
  }

  setUsername = event => {
    this.setState({username : event.target.value})
    console.log(this.state.username)
  }

  setPassword = event => {
    this.setState({password : event.target.value})
    console.log(this.state.password)
  }

  onSubmit = event => {
    event.preventDefault();
    if(this.state.username && this.state.password){
      return this.state
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>Username</label>
        <input id="test-username" type="text" value={this.state.username} onChange={this.setUsername}/>
        <label>Password</label>
        <input id="test-password" type="password" value={this.state.password} onChange={this.setPassword}/>
        <button type="submit" onClick={this.onSubmit}>Log in</button>
      </form>
    );
  }
}

export default LoginForm;
