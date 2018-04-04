import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      usernameValue: '',
      passwordValue: ''
    };
  }

  // handleUsername = (e) => {
  //   console.log(e.target.value);
  //   this.setState({
  //     usernameValue: e.target.value
  //   })
  // }
  //
  // handlePassword = (e) => {
  //   console.log(e.target.value);
  //   this.setState({
  //     passwordValue: e.target.value
  //   })
  // }


  handleInputValue = (e) => {
    console.log(e.target.value);
    (e.target.id === 'test-username') ? this.setState({usernameValue: e.target.value}) : this.setState({passwordValue: e.target.value})
  }

  dontSubmit = (e) => {
    e.preventDefault()
    console.log('hit');
  }

  render() {
    return (
      <form onSubmit={this.dontSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.usernameValue} onChange={this.handleInputValue}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.passwordValue} onChange={this.handleInputValue} />
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
