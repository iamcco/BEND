import React, { Component } from 'react'
import Render from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { Router, useRouterHistory } from 'react-router'
import { createHistory } from 'history'
import reducers from './reducers'
import routes from './routes'

// Middleware
const logger = store => next => action => {
    console.log('action', action);
    let result = next(action)
    console.log('next state: ', store.getState())
    return result
}

// store
const store = applyMiddleware(thunkMiddleware, logger)(createStore)(reducers)
// history
const history = useRouterHistory(createHistory)({ basename: ''})
// element
const rootEle = document.getElementById('js-main')

Render.render(
    <Provider store={store}>
        <Router
            history = { history }
            routes = { routes }
        />
    </Provider>,
    rootEle
)
