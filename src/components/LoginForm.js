import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      text: '',
      pass: ''
    };
  }

  handleText = event => {
    this.setState({
      text:event.target.value
    })
  }

  handlePass = event => {
    this.setState({
      pass:event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    // console.log("this.state",this.state);
    // const { text, pass } = this.state;
    // console.log("username", text);
    // console.log("password", pass);
    // debugger
    const text = this.state.text
    const pass = this.state.pass
    if (this.state.text !== "" && this.state.pass){
      this.props.onSubmit({text , pass})
    }
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username" value={this.state.text} onChange={this.handleText}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.pass} onChange={this.handlePass}/>
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

//
// This component takes one prop, onSubmit, which is a function that gets called when the form is being submitted
//
// value={this.state.username} onChange={this.handleInputChange} />
//
// Remember that you can retrieve the inpiut name and value of an event.target from the JS event.
//
// Add the necessary event handler to the <form> element in order to call the onSubmit callback prop.
//
// The onSubmit callback prop should only be called if both fields are filled in (with any value).
