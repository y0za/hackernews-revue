import Vue from 'vue'
import Revue from 'revue'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk'
import * as actions from './actions/stories'

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore)

const reduxStore = createStoreWithMiddleware(reducer)

const store = new Revue(Vue, reduxStore, actions)

export default store
