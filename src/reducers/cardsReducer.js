export const cardsReducer = (state=[], action) => {
  switch (action.type) {
    case 'SET_CARDS':
      return action.cards
    default:
      return state
  }
}