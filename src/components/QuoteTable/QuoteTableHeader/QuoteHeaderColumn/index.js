import React, { Component, PropTypes } from 'react';

export default class QuoteHeaderColumn  extends Component {
  render() {
    return (
      <th>{this.props.children}</th>
    );
  }
}
