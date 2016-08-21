import React, { Component } from 'react'
import Render from 'react-dom'
import { connect } from 'react-redux'
import Search from '../components/Search'
import TestPage from '../reducers/index.js'
import { combineReducers } from 'redux'
import asyncCombineReducers from 'redux-async-combine-reducers'

class App extends Component {
    render() {
        const {dispatch, searchParam} = this.props
        return (
            <Search {...{dispatch, searchParam}}/>
        )
    }
}

let select = state => state.TestPage

asyncCombineReducers(combineReducers)({
    TestPage
})

export default connect(select)(App)
