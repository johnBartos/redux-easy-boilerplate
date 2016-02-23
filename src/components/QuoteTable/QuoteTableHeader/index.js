import React, { Component, PropTypes } from 'react';
import QuoteRow from '../QuoteRow/';
import QuoteHeaderColumn from './QuoteHeaderColumn';

export default class QuoteTableHeader extends Component {
  static propTypes = {
    headers: PropTypes.array.isRequired,
  };

  render() {
    const cols = this.props.headers.map((header, index) => {
      return (<QuoteHeaderColumn key={index}>{header}</QuoteHeaderColumn>);
    });

    return (
      <thead className="thead-inverse">
        <QuoteRow cols={cols} />
      </thead>
    );
  }
}
