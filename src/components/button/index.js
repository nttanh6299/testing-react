import React, { Component } from 'react';
class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitEvent = () => {
    this.props.emitEvent();
  };

  render() {
    const { text } = this.props;

    return (
      <button data-test="buttonComponent" onClick={this.submitEvent}>
        {text}
      </button>
    );
  }
}

export default Button;
