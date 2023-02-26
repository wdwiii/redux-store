import redux from 'redux'

const reducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case 'increment':
      return state.count + 1
    case 'decrement':
      return state.count - 1
    default:
      return state
  }
}
const store = redux.createStore(reducer)

export default store
