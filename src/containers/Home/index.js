import React, { Component } from 'react';
import { QuoteTable } from '../../components/QuoteTable/';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as quoteActions from 'actions/quotes';

class Home extends Component {
  componentDidMount() {
    this.props.getQuotes();
  }
  render() {
    return (
      <section>
        <QuoteTable
          headers={this.props.quoteReducer.quoteTitles}
          body={this.props.quoteReducer.quoteValues}
          quoteClick={this.props.applyToQuote}
          rowClick={this.props.exploreQuote}
        />
      </section>
    );
  }
}

export default connect(state => state, dispatch => bindActionCreators(quoteActions, dispatch))(Home);
