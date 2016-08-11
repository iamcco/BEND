import React, { Component } from 'react'
import Render from 'react-dom'
import { connect } from 'react-redux'
import Page from 'components/Page'
import Search from '../components/Search'

class App extends Component {
    render() {
        const {dispatch, menu, searchParam} = this.props
        return (
            <Page {...{dispatch, menu}}>
                <Search {...{dispatch, searchParam}}/>
            </Page>
        )
    }
}

let select = state => state

export default connect(select)(App)
