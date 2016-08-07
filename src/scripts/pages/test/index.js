import React, { Component } from 'react'
import Render from 'react-dom'
import App from './container/App.js'

let rootEle = document.getElementById('js-main')

Render.render(
    <App />,
    rootEle
)
