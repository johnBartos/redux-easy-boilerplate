import React, { Component, PropTypes } from 'react';
import QuoteTableHeader from './QuoteTableHeader/';
import QuoteTableBody from './QuoteTableBody/';

export class QuoteTable extends Component {
  static propTypes = {
    quotes: PropTypes.array.isRequired,
    quoteClick: PropTypes.func.isRequired
  };

  render() {
    return (
      <table className="table table-striped">
        <QuoteTableHeader
          quotes={this.props.quotes}
        />
        <QuoteTableBody
          quotes={this.props.quotes}
          onApply={this.props.quoteClick}
        />
      </table>
    );
  }
}
