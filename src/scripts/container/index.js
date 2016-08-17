import React, { Component } from 'react'
import Render from 'react-dom'
import { connect } from 'react-redux'
import Page from 'components/Page'
import Loading from 'components/Loading'
import { fetchMenu, fetchPage } from '../actions'

class App extends Component {
    componentDidMount() {
        // 获取菜单
        let { dispatch, currentPage } = this.props
        dispatch(fetchMenu())
        currentPage !== 'loading' && dispatch(fetchPage(currentPage))

    }
    render() {
        const { dispatch, menu, pages, currentPage } = this.props
        const ActivePage = pages[currentPage] && pages[currentPage].page || Loading
        return (
            <Page {...{ dispatch, menu, currentPage }}>
                <ActivePage />
            </Page>
        )
    }
}

let select = state => state

export default connect(select)(App)
