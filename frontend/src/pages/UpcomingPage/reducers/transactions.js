const transactionsReducer = (state, action) => {
    switch(action.type) {
      case 'POPULATE_TRANSACTIONS':
        return action.transactions;
      default:
        return state
    }
  }
  
  export { transactionsReducer as default }