import { connect } from 'react-redux'
import { add, del } from '../actions'
import creditCards from '../components/creditCards'

const mapStateToProps = state => {
  return { cardItems: state.creditCards }
}

const createObject = () => ({
  ct: Math.floor(Math.random() * 100),
  cn: Math.floor(Math.random() * 20),
  pu: Math.floor(Math.random() * 50),
  key: Date.now()
})

const mapDispatchToProps = dispatch => {
  return {
    add: () => {
      dispatch(add(createObject()))
    },
    del: i => {
      dispatch(del(i))
    }
  }
}

const view = connect(mapStateToProps, mapDispatchToProps)(creditCards)

export default view
