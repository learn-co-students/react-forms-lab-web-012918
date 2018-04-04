import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      isValid: false
    };
  }

  doBoth = (e) => {
    this.handleTyping(e)
    this.checkForErrors(e)
  }

  handleTyping = (e) => {
    console.log(e.target.value);
    this.setState({
      value: e.target.value
    })
  }

  checkForErrors = (e) => {
    console.log(this.poemValid(e.target.value));
    console.log(this.state.isValid);
    if (this.poemValid(e.target.value)) {
      this.setState({isValid: true})
    } else {
      this.setState({isValid: false})
    }
  }

  poemValid = (poem) => {
    const poemLines = poem.split('\n').map(line => line.trim());
    const lineCheck = poemLines.length === 3;

    if (poem && lineCheck) {
      return (
        poemLines[0].split(" ").length === 5 &&
        poemLines[1].split(" ").length === 3 &&
        poemLines[2].split(" ").length === 5
      )
    } else {
      return false
    }
  }

  showError = () => {
    return (this.state.isValid) ? "" : "Please restructure into a real poem"
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.doBoth} value={this.state.value} />

        {(!this.state.isValid) ?
          <div id="poem-validation-error" style={{ color: "red" }}>
            {this.showError()}
          </div> : null
        }

      </div>
    );
  }
}

export default PoemWriter;
