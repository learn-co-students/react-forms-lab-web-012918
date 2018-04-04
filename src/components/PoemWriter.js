import React from "react"

class PoemWriter extends React.Component {
  constructor() {
    super()

    this.state = {
      poem: "",
      valid: false
    }
  }

  setPoem = event => {
    this.setState({
      poem: event.target.value
    }, () => {
      this.checkPoem(this.state.poem)
    })
  }

  checkPoem = poem => {
    const lines = poem.split('\n').map( line => line.trim() )
    const linesWords = lines.map( line => line.split(" ") )
    if (lines.length === 3) {
      if (linesWords[0].length === 5 && linesWords[1].length === 3 && linesWords[2].length === 5) {
        this.setState({
          valid: true
        })
      }
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poem} onChange={this.setPoem}/>
        {this.state.valid === false ? (<div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>) : null}
      </div>
    )
  }
}

export default PoemWriter
