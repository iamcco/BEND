import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import LeftMenu from 'components/LeftMenu'
import Header from 'components/Header'
import 'styles/index.less'
import styles from './index.css'

class Page extends Component {

    render() {
        return (
            <div styleName="aside">
                <aside styleName="sider">
                    <div styleName="logo"></div>
                    <LeftMenu />
                </aside>
                <div styleName="main">
                    <Header />
                    <div styleName="container">
                        <div styleName="content">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CSSModules(Page, styles)
