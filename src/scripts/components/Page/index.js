import React, { Component } from 'react'
import LeftMenu from 'components/LeftMenu'
import Header from 'components/Header'
import 'styles/index.css'
import './index.css'

export default class Page extends Component {

    render() {
        return (
            <div className="ant-layout-aside">
                <aside className="ant-layout-sider">
                    <div className="ant-layout-logo"></div>
                    <LeftMenu />
                </aside>
                <div className="ant-layout-main">
                    <Header />
                    <div className="ant-layout-container">
                        <div className="ant-layout-content">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

