import { createAction } from 'redux-actions'

export let updateMenu = createAction('UPDATE_MENU')

export let fetchMenu = param => dispatch => {
    setTimeout(() => {
        let menu = {
            subMenuList: [{
                key: 'sub1',
                text: '导航一',
                type: 'user',
                items: [{
                    key: 'test',
                    text: '选项一'
                }, {
                    key: 'other',
                    text: '选项二'
                }]
            },{
                key: 'sub2',
                text: '导航一',
                type: 'desktop',
                items: [{
                    key: 'test1',
                    text: '选项一'
                }, {
                    key: 'other1',
                    text: '选项二'
                }]
            }],
            defaultSelectedKeys: [],
            defaultOpenKeys: []
        }
        dispatch(updateMenu({menu}))
    }, 0)
}
