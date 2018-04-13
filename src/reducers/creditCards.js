import { ADD, DEL } from '../actions'

const creditCards = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.obj]
    case DEL:
      let arr = [...state]
      arr.splice(action.idx, 1)
      return arr
    default:
      return state
  }
}

export default creditCards
