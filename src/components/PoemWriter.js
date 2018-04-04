// You'll find one <textarea> in this component. Make this a controlled component. Recall that controlled components in React render dynamically based on some piece of props or state. Its value should be saved in the components state.
// You'll also find an error element in the markup. This element should only be shown if the poem is not valid.
// The rules for a valid poem structure are as follows:
// The poem has three lines.
// The first line has five words.
// The second line has three words.
// The third line has five words.
// Be sure to account for users accidentally adding too many spaces! This means that ' I am a furry dog ' is not a valid first line of the poem.
// Make sure the error message is still showing if the user deletes all of their content from the textarea box


import React from "react";

const cleanArray = (array) => {
  return array.split(" ").filter(Boolean)
}

class PoemWriter extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ''
    }
  }

  handleChange = (event) => {
    let poem = event.target.value
    this.setState({
      value: poem
    })
  }

  isProperPoem = () => {
    let poem = this.state.value
    let poemArray = poem.split(/\r\n|\r|\n/)
    if(poemArray.length === 3 && cleanArray(poemArray[0]).length === 5 && cleanArray(poemArray[1]).length === 3 && cleanArray(poemArray[2]).length === 5) {
      return true
    }
    return false
  }


  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.handleChange} value={this.state.value}/>
          {this.isProperPoem() ? null : <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
          </div>}
      </div>
    );
  }
}

export default PoemWriter;
