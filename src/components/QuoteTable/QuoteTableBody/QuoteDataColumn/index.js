import React, { Component, PropTypes } from 'react';

export default class QuoteDataColumn  extends Component {
  render() {
    return (
      <td>{this.props.children}</td>
    );
  }
}
