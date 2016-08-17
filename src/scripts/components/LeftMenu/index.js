'use strict';

import React, { Component } from 'react'
import { Menu, Breadcrumb, Icon } from 'antd'
import { fetchPage } from '../../actions'

const { SubMenu, Item } = Menu

export default class LeftMenu extends Component {
    handleClick(data) {
        let { dispatch, currentPage } = this.props
        if(data.key !== currentPage) {
            dispatch(fetchPage(data.key))
        }
    }
    render() {
        let self = this;
        let { subMenuList, defaultSelectedKeys, defaultOpenKeys } = self.props.menu;
        subMenuList = subMenuList.map(function(sub) {
            return (<SubMenu key={sub.key} title={<span><Icon type={sub.type}/>{sub.text}</span>}>
                        {
                            sub.items && sub.items.map(function(item) {
                                return <Item key={item.key}>{item.text}</Item>
                            }) || ''
                        }
                   </SubMenu>)
        })

        return (
            <Menu mode="inline" theme="dark"
                onSelect={this.handleClick.bind(this)}
                defaultSelectedKeys={ defaultSelectedKeys } defaultOpenKeys={ defaultOpenKeys }>
                { subMenuList }
            </Menu>
        )
    }
}
