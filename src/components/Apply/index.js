import React, { Component, PropTypes } from 'react';

export default class ApplyButton extends Component {
  render() {
    return (
      <button onClick={this.props.click}>{this.props.text}</button>
    );
  }
}
