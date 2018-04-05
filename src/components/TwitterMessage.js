import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      maxChars: props.maxChars
    };
  }

  inputtingMessage = (event) => {
    this.setState({
      value: event.target.value,
      maxChars: (this.props.maxChars - event.target.value.length)
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} max={this.state.maxChars} onChange={this.inputtingMessage}/>
        <strong>Char left: {this.state.maxChars}</strong>
      </div>
    );
  }
}

export default TwitterMessage;
