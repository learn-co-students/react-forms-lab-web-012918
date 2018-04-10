import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      username: "",
      password: ""
    }
  }
  updateUsername = (e) => {
    let un = e.target.value
    this.setState({
      username: un
    })
  }
  updatePassword = (e) => {
    let pw = e.target.value
    this.setState({
      password: pw
    })
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onSubmit
  }

  render() {
    return (
      <form onSubmit={ this.submitHandler }>
        <div>
          <label>
            Username
            <input value={ this.state.username } onChange={ this.updateUsername } id="test-username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input value={ this.state.password } onChange={ this.updatePassword} id="test-password" type="password" />
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
