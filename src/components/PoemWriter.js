import React from "react";

const checkPoemStructure = (poem) => {
  const enters = poem.split("\n").map(line => line.trim());
  const threeLines = enters.length === 3;
  if (poem && threeLines) {
    return (
      enters[0].split(" ").length === 5 &&
      enters[1].split(" ").length === 3 &&
      enters[2].split(" ").length === 5
    );
  } else {
    return false;
  }
};

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      textArea: "",
      poemValidity: true,
    };
  }

  handleText = (event) => {
    this.setState({
      value: event.target.value,
      poemValidity: checkPoemStructure(event.target.value)
    })

  }

  // checkPoemStructure(text){
  //   let enters = text.match(/\n/g)
  //   if(enters === 2){
  //     let indexEnter = text.indexOf(enters[0])
  //     let secondEnter = text.indexOf(enters[1], indexEnter+1)
  //     let firstLine = text.slice(0,indexEnter)
  //     let secondLine = text.slice(indexEnter+1, secondEnter)
  //     let thirdLine = text.slice(secondEnter+1)
  //     if(firstLine.trim() !=)
  //   }
  // }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.textArea} onChange={this.handleText}/>
        {!this.state.poemValidity ? (<div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>) : null}
      </div>
    );
  }
}

export default PoemWriter;
