import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  charCount = () => {
    let tweetLength = this.state.value.length
    let remaining = this.props.maxChars - tweetLength
    return remaining
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
    this.charCount()
  }



  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} type="text" value={this.state.value}/>
        <p>Remaining chars: {this.charCount()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
