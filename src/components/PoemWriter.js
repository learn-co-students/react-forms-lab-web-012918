import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      error: 'true'
    };
  }

  handlePoemChange = (e) => {
    // debugger
    this.setState({
      value: e.target.value
    })

    let lines = e.target.value.split("\n").map(item => item.trim())
    let trimed = lines.map((item) => item.trim())
    if(lines.length === 3){
      if(lines[0].split(" ").length === 5 && lines[1].split(" ").length === 3 && lines[2].split(" ").length === 5){
        this.setState({error: true})
      }
      else{
        this.setState({error: false})
      }
    }
    else{
      this.setState({error: false})
    }






  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.handlePoemChange}/>

          {this.state.error ? null : <div id="poem-validation-error" style={{ color: "red" }}>'This poem is not written in the right structure!'</div>}
        </div>
    );
  }
}

export default PoemWriter;
