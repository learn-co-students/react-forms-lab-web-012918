import React from "react";

let remainingCharacters = 140;


class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      maxChars: 140
    };
  }

  handleTweet = (e) => {
    console.log(e.target.value)

    this.setState({
      value: e.target.value,
      maxChars: 140 - e.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <p>Characters Remaining: {this.state.maxChars} </p>
        <input type="text" value={this.state.value} onChange={this.handleTweet} />
      </div>
    );
  }
}

export default TwitterMessage;
