import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      remainingChars: 140
    };
  }

  handleChange = (event) => {
    if(event.target.value.length > this.state.value.length){
      this.setState({
        value: event.target.value,
        remainingChars: this.state.remainingChars - 1
      })
    } else{
      this.setState({
        value: event.target.value,
        remainingChars: this.state.remainingChars + 1
      })
    }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}/>
          <p>{this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
