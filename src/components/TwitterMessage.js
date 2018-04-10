import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();
  this.state = {
    value: ""
  };
  }


  updateState = (e) => {
  let messageValue = e.target.value
    this.setState({
    value: messageValue
    })
  }




  render() {
    return (
      <div>
        <p>
          Characters Remaining: { this.props.maxChars - this.state.value.length}
        </p>
        <strong>Your message:</strong>
        <input value={ this.state.value } onChange={ this.updateState } type="text" />
      </div>
    );
  }
}

export default TwitterMessage;
