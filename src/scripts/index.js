import React, { Component } from 'react'
import Render from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider  } from 'react-redux'
import reducers, * as all from './reducers'
import App from './container/index.js'
import { fetchCurrentPage } from './actions'

// Middleware
const logger = store => next => action => {
    console.log('action', action);
    let result = next(action)
    console.log('next state: ', store.getState())
    return result
}

// store
const store = applyMiddleware(thunkMiddleware, logger)(createStore)(reducers)
// element
const rootEle = document.getElementById('js-main')

Render.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootEle
)
