import React, { Component, PropTypes } from 'react';
import QuoteRow from '../QuoteRow/';
import QuoteDataColumn from './QuoteDataColumn';
import Apply from '../../Apply/';

export default class QuoteTableBody extends Component {
  static propTypes = {
    quotes: PropTypes.array.isRequired,
    onApply: PropTypes.func.isRequired,
    rowClick: PropTypes.func
  };

  render() {
    const rows = this.props.quotes.map((e, i) => {
      const cols = Object.keys(e).map((key, j) => {
        return (<QuoteDataColumn key={j}><div>{e[key].value}</div></QuoteDataColumn>);
      });
      cols.push(<QuoteDataColumn key={"apply-button"}><Apply click={this.props.onApply.bind(null, e.carrier.value)} text="Apply!" /></QuoteDataColumn>);
      return (<QuoteRow key={i} cols={cols} onClick={this.props.rowClick}/>);
    });

    return (
      <tbody>
        {rows}
      </tbody>
    );
  }
}
