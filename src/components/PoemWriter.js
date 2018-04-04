import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      isValid: false
    };
  }

  changeHandler = (event) => {
    this.setState({
      value: event.target.value
    })
    this.isValidPoem(event.target.value)
  }

  isValidPoem = (poem) => {
    let lines = poem.split(/\r*\n/)
    let splitLines = lines.map(line => {
      return line.split(" ").filter(word => word.length > 0)
    })

    if (poem.length === 0 || lines.length !== 3 || splitLines[0].length !== 5 || splitLines[1].length !== 3 || splitLines[2].length !== 5){
      this.setState({
        isValid: false
      })
    } else {
      this.setState({
        isValid: true
      })
    }
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.value}
          onChange={this.changeHandler}/>
          {this.state.isValid ? null :
        <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>}
      </div>
    );
  }
}

export default PoemWriter;

//
// e rules for a valid poem structure are as follows:
// The poem has three lines.
// The first line has five words.
// The second line has three words.
// The third line has five words.
// Be sure to account for users accidentally adding too many spaces! This means that ' I am a furry dog ' is not a valid first line of the poem.
// Make sure the error message is still showing if the user deletes all of their content from the textarea box
