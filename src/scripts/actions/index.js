import { createAction } from 'redux-actions'

export let updateMenu = createAction('UPDATE_MENU')

export let fetchMenu = param => dispatch => {
    setTimeout(() => {
        let menu = {
            subMenuList: [{
                key: 'duty',
                text: '任务',
                type: 'user',
                items: [{
                    key: 'myDuty',
                    text: '我的任务'
                }, {
                    key: 'subDuty',
                    text: '下属任务'
                }]
            }],
            defaultSelectedKeys: [],
            defaultOpenKeys: []
        }
        dispatch(updateMenu({menu}))
    }, 0)
}
