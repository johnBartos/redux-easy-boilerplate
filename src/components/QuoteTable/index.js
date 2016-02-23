import React, { Component, PropTypes } from 'react';
import ApplyButton from '../Apply/';

export class QuoteTable extends Component {
  static propTypes = {
    quotes: PropTypes.array.isRequired,
    quoteClick: PropTypes.func.isRequired
  };

  render() {
    console.log(this.props)
    const quotes = this.props.quotes.map(e => {
      return <li key={e.carrier}><ApplyButton text={e.carrier} click={this.props.quoteClick}/></li>;
    });
    return (
      <ul>
        {quotes}
      </ul>
    );
  }
}
