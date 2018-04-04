import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      remainingCharacters: this.props.maxChars,
      value: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      remainingCharacters: this.props.maxChars - event.target.value.length,
      value: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange}/><span>{this.state.remainingCharacters}</span>
      </div>
    );
  }
}

export default TwitterMessage;
