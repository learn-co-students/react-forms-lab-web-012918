import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: 'f',
      maxChars: 140,
    };
  }

  changeInput = (e) => {
    // debugger
    this.setState({
      value: e.target.value,
      maxChars: this.state.maxChars-=1

    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.changeInput}/>
        <p>{this.state.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
