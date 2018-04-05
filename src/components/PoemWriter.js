import React from "react";

const isValid = content => {
  const numberOfLines = content.split("\n")

  if (numberOfLines.length !== 3) {
    return false
  } else if (numberOfLines[0].trim().split(' ').length !== 5) {
    return false
  } else if (numberOfLines[1].trim().split(' ').length !== 3) {
    return false
  }else if (numberOfLines[2].trim().split(' ').length !== 5) {
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
      isValid: false
    };
  }

  setPoemContent = event => {
    const content = event.target.value
    
    this.setState({
      content,
      isValid: isValid(content)
    })
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.content} onChange={this.setPoemContent} />

        {(!this.state.isValid) ? (
          <div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>) : null}
      </div>
    );
  }
}

export default PoemWriter;
