import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider  } from 'react-redux'
import TestReducer from './reducers/index.js'
import App from './container/App.js'

// Middleware
const logger = store => next => action => {
    console.log('action', action);
    let result = next(action)
    console.log('next state: ', store.getState())
    return result
}
// store
const store = applyMiddleware(thunkMiddleware, logger)(createStore)(TestReducer)

export default class Test extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}
