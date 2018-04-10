import React from "react";


const validator = poem => {
  const rowCheck = poem.split('\n').map(row => row.trim());
  const rowValidation = rowCheck.length === 3;
  if (poem && rowValidation) {
    return (
      rowCheck[0].split(" ").length === 5 &&
      rowCheck[1].split(" ").length === 3 &&
      rowCheck[2].split(" ").length === 5
    );
  } else {
    return false;
  }
}




class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      valid: true,
    };
  }

  textValue = (e) => {
    this.setState({
      value: e.target.value,
      valid: validator(e.target.value)
    })
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          value= { this.state.value }
          onChange={ this.textValue }
          cols="60"
        />
        {!this.state.valid ? (
          <div
            id="poem-validation-error"
            style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>
        ) : null}
      </div>
    );
  }
}


export default PoemWriter;
