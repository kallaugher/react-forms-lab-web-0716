const React = require('react');

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.validatePoem = this.validatePoem.bind(this);

    this.state = {
      value: '',
      poemValid: false
    };
  }

  validatePoem(){
    let lines = this.state.value.split("\n");
    if (this.state.value && document.getElementById('poem-validation-error') !== null) {
      if (lines.length == 3) {
        if (lines[0].trim().split(" ").length === 5 && lines[1].trim().split(" ").length === 3 && lines[2].trim().split(" ").length === 5) {
          this.setState({
            poemValid: true
          })
        }
      }
    }

  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    }, function(){ this.validatePoem() });
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.handleChange} />
        { (!this.state.poemValid) ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null}
      </div>
    );
  }
}

module.exports = PoemWriter;
