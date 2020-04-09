import React from 'react';

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    this.textInput.current.focus();
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.textInput} />
        <input type="button" value="Focus the text input" onClick={this.focusTextInput} />
      </div>
    )
  }
}

class AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    console.log('this.textInput.current', this.textInput.current)
    this.textInput.current.focusTextInput()
  }

  render() {
    return (<CustomTextInput ref={this.textInput} />)
  }
}

function Rank(props) {
  return (
    <div>
      <h1>Rank</h1>
      <AutoFocusTextInput></AutoFocusTextInput>
    </div>
  )
}

export default React.memo(Rank)