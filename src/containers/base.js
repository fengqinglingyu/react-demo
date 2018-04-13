import { connect } from 'react-redux'
import { getBaseData } from '../actions'
import baseView from '../components/base'
import { base } from '../actions'

const mapStateToProps = state => {
  return { item: state.base }
}

const createObject = () => ({
  ...base,
  cn: Math.floor(Math.random() * 100),
  s: Math.floor(Math.random() * 100),
  wt: Math.floor(Math.random() * 100),
  we: Math.floor(Math.random() * 100),
  dk: Math.floor(Math.random() * 100)
})

const mapDispatchToProps = dispatch => {
  return {
    getData: () => {
      dispatch(getBaseData(createObject()))
    }
  }
}

const view = connect(mapStateToProps, mapDispatchToProps)(baseView)

export default view
