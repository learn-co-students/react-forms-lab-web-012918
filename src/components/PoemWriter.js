import React from "react";

const isValidPoem = content => {
  const numOfLines = content.split("\n")

  if (numOfLines.length !== 3) {
    return false
  } else if (numOfLines[0].trim().split(' ').length !== 5) {
    return false
  } else if (numOfLines[1].trim().split(' ').length !== 3) {
    return false
  }else if (numOfLines[2].trim().split(' ').length !== 5) {
    return false
  } else {
    return true
  }

}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: "",
      isValid: true,
    };
  }

  setPoemContent = event => {
    const content = event.target.value
    this.setState({
      content,
      isValid: isValidPoem(content),
    })
  }


  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.content} onChange={this.setPoemContent}  />
        {(!this.state.isValid) ? (
          <div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>) : null}
      </div>
    );
  }
}

export default PoemWriter;
