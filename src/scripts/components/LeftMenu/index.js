import React, { Component } from 'react'
import { Menu, Breadcrumb, Icon } from 'antd'
import { fetchPage } from '../../actions'
import { Link } from 'react-router'

const { SubMenu, Item } = Menu

export default class LeftMenu extends Component {
    render() {
        let self = this;
        let { subMenuList, defaultSelectedKeys, defaultOpenKeys } = self.props.menu;
        subMenuList = subMenuList.map(function(sub) {
            return (<SubMenu key={sub.key} title={<span><Icon type={sub.type}/>{sub.text}</span>}>
                        {
                            sub.items && sub.items.map(function(item) {
                                return (
                                    <Item key={item.key}>
                                        <Link to={'/' + item.key} key={item.key}>
                                            {item.text}
                                        </Link>
                                    </Item>
                                )
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
