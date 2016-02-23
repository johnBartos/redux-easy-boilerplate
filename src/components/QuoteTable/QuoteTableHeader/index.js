import React, { Component, PropTypes } from 'react';
import QuoteRow from '../QuoteRow/';
import QuoteHeaderColumn from './QuoteHeaderColumn';

export default class QuoteTableHeader extends Component {
  static propTypes = {
    quotes: PropTypes.array.isRequired,
  };

  render() {
    let row;
    const quote = this.props.quotes[0];
    if (typeof quote !== 'undefined') {
      const cols = Object.keys(quote).map((key, index) => {
        return (<QuoteHeaderColumn key={index}><div>{quote[key].title}</div></QuoteHeaderColumn>);
      });
      row = (<QuoteRow cols={cols} />)
    }

    return (
      <thead className="thead-inverse">
        {row}
      </thead>
    );
  }
}
