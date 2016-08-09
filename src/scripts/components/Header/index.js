import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './index.css'

class Header extends Component {

    render() {
        return (
            <div styleName="header"></div>
        )
    }
}

export default CSSModules(Header, styles)
