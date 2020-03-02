import React, { Component } from 'react';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { title, desc } = this.props;

    if (!title) {
      return null;
    }

    return (
      <div data-test="listItemComponent">
        <h3 data-test="title">{title}</h3>
        <p data-test="desc">{desc}</p>
      </div>
    );
  }
}

export default ListItem;
