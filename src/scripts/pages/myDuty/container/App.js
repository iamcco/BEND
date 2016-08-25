import React, { Component } from 'react'
import Render from 'react-dom'
import { connect } from 'react-redux'
import Search from '../components/Search'
import myDuty from '../reducers/index.js'
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

let select = state => state.myDuty || myDuty({}, {type: ''})

asyncCombineReducers(combineReducers)({
    myDuty
})

export default connect(select)(App)
