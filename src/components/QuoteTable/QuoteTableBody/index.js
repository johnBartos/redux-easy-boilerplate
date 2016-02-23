import React, { Component, PropTypes } from 'react';
import QuoteRow from '../QuoteRow/';
import QuoteDataColumn from './QuoteDataColumn';
import Apply from '../../Apply/';

export default class QuoteTableBody extends Component {
  static propTypes = {
    body: PropTypes.array.isRequired,
    onApply: PropTypes.func.isRequired,
    rowClick: PropTypes.func
  };

//this is a bit ghastly
  render() {
    const body = this.props.body;

    const rows = body.map((e, i) => {
      const cols = Object.keys(e).map((key, j) => {
        return (<QuoteDataColumn key={j}><div>{e[key].value}</div></QuoteDataColumn>);
      });

      //don't want to have the button if it's an explore row
      let row;
      if (e.explore === undefined) {
        cols.push(<QuoteDataColumn key={"apply-button"}><Apply click={this.props.onApply.bind(null, e.carrier.value)} text="Apply!" /></QuoteDataColumn>);
        row = (<QuoteRow key={i} cols={cols} rowClick={this.props.rowClick.bind(null, i)}/>);
      }
      else {
        row =(<QuoteRow key={i} cols={cols}/>);
      }
      return row;
    });

    return (
      <tbody>
        {rows}
      </tbody>
    );
  }
}
