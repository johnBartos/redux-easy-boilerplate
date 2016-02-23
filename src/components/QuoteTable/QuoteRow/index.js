import React, { Component, PropTypes } from 'react';

export default class QuoteRow extends Component {
  static propTypes = {
    cols: PropTypes.array.isRequired,
    rowClick: PropTypes.func
  };

  render() {
    return (
      <tr onClick={this.props.rowClick}>{this.props.cols}</tr>
    );
  }
}
