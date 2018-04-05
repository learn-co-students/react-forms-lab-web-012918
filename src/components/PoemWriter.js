import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      isValid: false,
      value: ''
    };
  }

  tester = (input) => {
    let lines = input.split("\n")
    if (lines.length === 3){


      //whitespace  valid
      let line0 = lines[0].trim().split(" ")
      let line1 = lines[1].trim().split(" ")
      let line2 = lines[2].trim().split(" ")

      //whitespace not valid
      // let line0 = lines[0][lines[0].length-1] === " " ? lines[0].slice(0, lines[0].length-1).split(" ") : lines[0].split(" ")
      // let line1 = lines[1][lines[1].length-1] === " " ? lines[1].slice(0, lines[1].length-1).split(" ") : lines[1].split(" ")
      // let line2 = lines[2][lines[2].length-1] === " " ? lines[2].slice(0, lines[2].length-1).split(" ") : lines[2].split(" ")
      // let line0 = lines[0].split(" ")
      // let line1 = lines[1].split(" ")
      // let line2 = lines[2].split(" ")
      console.log(line0.length)
      console.log(line1.length)
      console.log(line2.length)
      if(line0.length === 5 && line1.length === 3 && line2.length === 5 ){
        return true
      }
    }
    return false
    // return input.length > 10
  }

  changeHandler = (event) => {

    this.setState({
      value: event.target.value,
      isValid: this.tester(event.target.value)
    })
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value}  onChange={this.changeHandler}/>
        {this.state.isValid ? null : <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>}
      </div>
    );
  }
}

export default PoemWriter;



// Its value should be saved in the components state.
// You'll also find an error element in the markup. This element should only be shown if the poem is not valid.
// The rules for a valid poem structure are as follows:
// The poem has three lines.
// The first line has five words.
// The second line has three words.
// The third line has five words.
// Be sure to account for users accidentally adding too many spaces! This means that ' I am a furry dog ' is not a valid first line of the poem.
// Make sure the error message is still showing if the user deletes all of their content from the textarea box
