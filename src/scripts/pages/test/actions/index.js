import { createAction } from 'redux-actions'

export let updateSearchParam = createAction('UPDATE_SEARCH_PARAM')
export let updateMenu = createAction('UPDATE_MENU')

export let fetchMenu = param => dispatch => {
    setTimeout(() => {
        let menu = {
            subMenuList: [{
                key: 'sub1',
                text: '导航一',
                type: 'user',
                items: [{
                    key: '1',
                    text: '选项一'
                }, {
                    key: '2',
                    text: '选项二'
                }]
            },{
                key: 'sub2',
                text: '导航一',
                type: 'desktop',
                items: [{
                    key: '3',
                    text: '选项一'
                }, {
                    key: '4',
                    text: '选项二'
                }]
            }],
            defaultSelectedKeys: [],
            defaultOpenKeys: []
        }
        dispatch(updateMenu({menu}))
    }, 2000)
}
