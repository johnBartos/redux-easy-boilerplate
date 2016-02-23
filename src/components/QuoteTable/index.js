import React, { Component, PropTypes } from 'react';
import QuoteTableHeader from './QuoteTableHeader/';
import QuoteTableBody from './QuoteTableBody/';

export class QuoteTable extends Component {
  static propTypes = {
    headers: PropTypes.array.isRequired,
    body: PropTypes.array.isRequired,
    quoteClick: PropTypes.func.isRequired,
    rowClick: PropTypes.func.isRequired
  };

  render() {
    return (
      <table className="table table-striped">
        <QuoteTableHeader
          headers={this.props.headers}
        />
        <QuoteTableBody
          body={this.props.body}
          onApply={this.props.quoteClick}
          rowClick={this.props.rowClick}
        />
      </table>
    );
  }
}
