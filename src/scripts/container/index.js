import React, { Component } from 'react'
import Render from 'react-dom'
import { connect } from 'react-redux'
import Page from 'components/Page'
import Loading from 'components/Loading'
import { fetchMenu, fetchPage } from '../actions'

class App extends Component {
    componentDidMount() {
        // 获取菜单
        let { dispatch } = this.props
        dispatch(fetchMenu())
    }
    render() {
        return (
            <Page {...this.props}>
                { this.props.children }
            </Page>
        )
    }
}

let select = state => state

export default connect(select)(App)
