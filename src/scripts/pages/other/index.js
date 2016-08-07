import React, { Component } from 'react'
import Render from 'react-dom'

class App extends Component {
    render() {
        return (
            <div>hello other page</div>
        )
    }
}

let rootEle = document.getElementById('js-mian')

Render.render(
    <App />,
    rootEle
)
