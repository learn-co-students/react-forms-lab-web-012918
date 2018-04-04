import React from "react";
import PropTypes from 'prop-types';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poemInput: '',
      errorMessage: 'This poem is not written in the right structure!'
    };
  }

  handlePoemChange = event => {
    this.setState({
      poemInput: event.target.value
    })
    let poemLines = this.state.poemInput.split('\n')
    if (poemLines.length === 3){
      let line1 = poemLines[0].split(' ')
      let line2 = poemLines[1].split(' ')
      let line3 = poemLines[2].split(' ')
      if( line1.length === 5 && line2.length === 3 && line3.length === 5 ){
        this.setState({errorMessage: ''})
        console.log(this.state)

      }else {
        this.setState({errorMessage: 'This poem is not written in the right structure!'})
        console.log(this.state)
      }
    }

  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          id='poem'
          value={this.state.poemInput}
          onChange={this.handlePoemChange}
        />
      <h3>Poem Test: {this.state.poemInput} </h3>
        <div id="poem-validation-error" style={{ color: "red" }}>
          {this.state.errorMessage}
        </div>
      </div>
    );
  }
}

export default PoemWriter;
