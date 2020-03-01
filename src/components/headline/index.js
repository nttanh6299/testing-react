import React, { Component } from 'react';

class Headline extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { header, desc } = this.props;

    if (!header) {
      return null;
    }

    return (
      <div className="headline" data-test="headlineComponent">
        <h1 data-test="header">{header}</h1>
        <p data-test="description">{desc}</p>
      </div>
    );
  }
}

export default Headline;
