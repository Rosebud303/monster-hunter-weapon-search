import React, { Component } from 'react';
import { connect } from 'react-redux';

export class App extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  cards: state.cards
});

export const mapDispatchToProps = (dispatch) => ({
  setCards: (cards) => dispatch(setCards(cards))
});

export default connect(mapStateToProps, mapDispatchToProps)(App)

