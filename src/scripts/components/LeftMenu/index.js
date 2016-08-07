'use strict';

import React, { Component } from 'react'
import { Menu, Breadcrumb, Icon } from 'antd'

const { SubMenu, Item } = Menu

export default class LeftMenu extends Component {
    render() {
        return (
            <Menu mode="inline" theme="dark"
                defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
                <SubMenu key="sub1" title={<span><Icon type="user" />导航一</span>}>
                    <Item key="1">选项1</Item>
                    <Item key="2">选项2</Item>
                    <Item key="3">选项3</Item>
                    <Item key="4">选项4</Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="laptop" />导航二</span>}>
                    <Item key="5">选项5</Item>
                    <Item key="6">选项6</Item>
                    <Item key="7">选项7</Item>
                    <Item key="8">选项8</Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="notification" />导航三</span>}>
                    <Item key="9">选项9</Item>
                    <Item key="10">选项10</Item>
                    <Item key="11">选项11</Item>
                    <Item key="12">选项12</Item>
                </SubMenu>
            </Menu>
        )
    }
}
