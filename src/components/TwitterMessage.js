import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      remainingChars: props.maxChars,
      message: ''
    };
  }

  messageChange = (event) => {
    this.setState({
      message: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.messageChange}/>
        <p>Remaing Characters: {this.state.remainingChars - this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
