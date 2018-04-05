import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      valid: false
    };
  }

  validator = (content) => {
    //split into an array of lines and make it an array that cuts off extra space
    const contentLines = content.split("\n").map(line => line.trim());

    //check if the array has three lines
    const threeLinesCheck = contentLines.length === 3;

    //if three lines exist then check whether each line has the right # of words
    if (threeLinesCheck) {
      return (
        contentLines[0].split(' ').length === 5 &&
        contentLines[1].split(' ').length === 3 &&
        contentLines[2].split(' ').length === 5
      )
    } else {
      return false
    }
  }

  handleChange = (event) => {
    this.setState({
      poem: event.target.value,
      valid: this.validator(event.target.value)//update this with a method or function
    })
    //const errorDiv = event.target.parentElement.children[1]

  }



  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poem} onChange={this.handleChange}/>
        {!this.state.valid ? (
        <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>
      ) : null}
      </div>
    );
  }
}

export default PoemWriter;
