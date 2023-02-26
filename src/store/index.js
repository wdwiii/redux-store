import { createStore } from 'redux'

const storeReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case 'increment':
      return state.count + 1
    case 'decrement':
      return state.count - 1
    default:
      return state
  }
}
const store = createStore(storeReducer)

export default store
