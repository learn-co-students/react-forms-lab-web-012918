import React from "react";




class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content : "",
      valid : false
    };
  }

  setContent = event => {
    this.setState({content: event.target.value}, () => this.poemValidity(this.state.content))
  }

  poemValidity = poem => {
    const splitByLines = poem.split('\n')
    if (splitByLines.length === 3){
      if (splitByLines[0].trim().split(' ').length === 5 &&
        splitByLines[1].trim().split(' ').length === 3 &&
        splitByLines[2].trim().split(' ').length === 5) {
        this.setState({
          valid: !this.state.valid
        })
      }
    }
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.content}
          onChange={this.setContent}
        />
        {!this.state.valid ?
        (<div id="poem-validation-error" style={{ color: "red" }}>'This poem is not written in the right structure!'</div>) : null}
      </div>
    );
  }
}

export default PoemWriter;
