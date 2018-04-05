import React from "react";

const checkValid = (poem) => {
  let poemLines = poem.split("\n").map(line => line.trim());
  let checkLines = poemLines.length === 3;
  if (poem && checkLines === true) {
    return (
      poemLines[0].split(" ").length === 5 &&
      poemLines[1].split(" ").length === 3 &&
      poemLines[2].split(" ").length === 5
    );
  } else {
    return false;
  }
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      textarea: '',
      isValid: true
    };
  }

  handleInput = (event) => {
    const content = event.target.value;
    this.setState({
      content,
      isValid: checkValid(content),
    });
  };


  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value = {this.state.textarea}
          onChange = {this.handleInput}
         />

        {!this.state.valid ? (<div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!</div>) : null}

      </div>
    );
  }
}

export default PoemWriter;
