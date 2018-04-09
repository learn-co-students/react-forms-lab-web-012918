import React from "react";


class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: "",
      valid: false
    };
  }

  handleSubmit = (event) => {
    const poemSubmitted = event.target.value
    this.setState({
      poem: poemSubmitted,
      valid: this.validatePoem(poemSubmitted)
    })
  }

  validatePoem = (poem) => {
    const poemLines = poem.split("\n").map(line => line.trim());
    const isRightAmountOfLines = poemLines.length === 3;
    if (poem && isRightAmountOfLines) {
      return (
        poemLines[0].split(" ").length === 5 &&
        poemLines[1].split(" ").length === 3 &&
        poemLines[2].split(" ").length === 5
      );
    } else {
      return false;
    }
  };

  render() {
    return (
      <div>
        <textarea
        rows="3"
        cols="60"
        value={this.state.poem}
        onChange={this.handleSubmit}
        />
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
