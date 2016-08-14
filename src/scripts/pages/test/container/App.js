import React, { Component } from 'react'
import Render from 'react-dom'
import { connect } from 'react-redux'
import Page from 'components/Page'
import Search from '../components/Search'
import { fetchMenu } from '../actions'

class App extends Component {
    componentDidMount() {
        this.props.dispatch(fetchMenu('fetch menu'))
    }
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
