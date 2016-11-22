import React, { Component, PropTypes } from 'react';

export default class Title extends Component {
  render() {
    return (
      <h1>{this.props.title}</h1>
    );
  }
}
