import React, { Component } from 'react'
import Render from 'react-dom'
import { createStore } from 'redux'
import { Provider  }from 'react-redux'
import TestReducer from './reducers/index.js'
import App from './container/App.js'

const store = createStore(TestReducer)
const rootEle = document.getElementById('js-main')

Render.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootEle
)
