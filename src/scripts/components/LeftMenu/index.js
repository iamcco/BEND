'use strict';

import React, { Component } from 'react'
import { Menu, Breadcrumb, Icon } from 'antd'

const { SubMenu, Item } = Menu

export default class LeftMenu extends Component {
    render() {
        let { subMenuList, defaultSelectedKeys, defaultOpenKeys } = this.props.menu;
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
                defaultSelectedKeys={ defaultSelectedKeys } defaultOpenKeys={ defaultOpenKeys }>
                { subMenuList }
            </Menu>
        )
    }
}
