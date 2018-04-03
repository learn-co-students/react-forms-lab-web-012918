import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  }

  counter = () => {
    return (this.props.maxChars - this.state.value.length)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
         />
        <strong>{this.counter()}</strong>
      </div>
    );
  }
}

export default TwitterMessage;
