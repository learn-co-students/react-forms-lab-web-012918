import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
     this.setState({
       [name]: value
     });
   }

  handleSubmit = (event) => {
    event.preventDefault()
    if(!this.state.username || !this.state.password){
      return
    }
    this.props.onSubmit(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" name="username" type="text"  onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" name="password" type="password" onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form >
    );
  }
}

export default LoginForm;
