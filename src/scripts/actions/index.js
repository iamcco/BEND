import { createAction } from 'redux-actions'

export let updatePages = createAction('UPDATE_PAGES')
export let updateActivePage = createAction('UPDATE_ACTIVE_PAGE')
export let updateMenu = createAction('UPDATE_MENU')

export let fetchPage = pageName => (dispatch, getState) => {
    let page = getState().pages[pageName]
    if(page) {
        dispatch(updateActivePage(pageName))
    } else {
        switch(pageName) {
            case 'test':
                require.ensure(['pages/test'], function() {
                    page = require('pages/test').default
                    dispatch(updatePages({ pageName, page }))
                    dispatch(updateActivePage(pageName))
                });
                break;
            case 'other':
                require.ensure(['pages/other'], function() {
                    page = require('pages/other').default
                    dispatch(updatePages( { pageName, page}))
                    dispatch(updateActivePage(pageName))
                });
                break;
        }
    }
}

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
