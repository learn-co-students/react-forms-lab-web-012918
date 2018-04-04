import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: ""
    };
  }

  isPoemValid = (poem) => {
    let poemLines = poem.split("\n").map(line => line.trim());
    console.log(poemLines)
    if (poem && poemLines.length === 3){
      return(
        poemLines[0].split(" ").length === 5 &&
        poemLines[1].split(" ").length === 3 &&
        poemLines[2].split(" ").length === 5
      )
    } else {
      return false;
    }
  }

  setPoem = (event) => {
    this.setState({
      poem: event.target.value
    })
  }

  showPoem = () => {
    if(!this.isPoemValid(this.state.poem)) {
      // debugger
      return(<div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>)
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poem} onChange={this.setPoem}/>
        {this.showPoem()}
      </div>
    );
  }
}

export default PoemWriter;
