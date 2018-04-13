import { base } from '../actions'

const store = (state = base, action) => {
  switch (action.type) {
    case 'getBaseData':
      return { ...action.obj }
    default:
      return state
  }
}

export default store
