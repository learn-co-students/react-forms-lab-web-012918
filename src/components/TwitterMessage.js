import React from "react";
import PropTypes from 'prop-types';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {messageInput: ''};
    // this sets the initial state by taking the value were trying to find and setting it up
  }

  handleChange = event => {
    this.setState({
      messageInput: event.target.value
    })
  }



  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.messageInput}
          onChange={this.handleChange}
        />
      <h1>characters remaining</h1>
      <h3>{this.props.maxChars - this.state.messageInput.length}</h3>
      </div>
    );
    // subtracts input length with the prop of maxChars which is 140 by default
  }

}

TwitterMessage.propTypes = {
  maxChars: PropTypes.number,
};
// validates that the prop is a number

TwitterMessage.defaultProps = {
  maxChars: 140,
};
// makes default of prop 140

//proptypes should be outside of the class

export default TwitterMessage;
