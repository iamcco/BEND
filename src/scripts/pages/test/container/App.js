import React, { Component } from 'react'
import Render from 'react-dom'
import { DatePicker } from 'antd'
import Page from 'components/Page'

export default class extends Component {
    render() {
        return (
            <Page>
                <DatePicker />
            </Page>
        )
    }
}
