import base from './base'
import { combineReducers } from 'redux'
import creditCards from './creditCards'

const todoApp = combineReducers({
  creditCards,
  base
})

export default todoApp
