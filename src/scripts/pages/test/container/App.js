import React, { Component } from 'react'
import Render from 'react-dom'
import { connect } from 'react-redux'
import Search from '../components/Search'

class App extends Component {
    render() {
        const {dispatch, searchParam} = this.props
        return (
            <Search {...{dispatch, searchParam}}/>
        )
    }
}

let select = state => state

export default connect(select)(App)
