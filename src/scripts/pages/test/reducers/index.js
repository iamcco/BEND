import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'

const searchParam = handleActions({
    UPDATE_SEARCH_PARAM(state, action) {
        let { userName, ID } = action.payload
        return Object.assign({}, state, {userName, ID})
    }
}, {
    userName: '',
    ID: ''
})

const menu = handleActions({
    UPDATE_SUB_MENU_LIST(state, action) {
        let { subMenuList } = action.payload
        return Object.assign({}, state, { subMenuList })
    },
    UPDATE_DEFAULT_SELECTED_KEYS(state, action) {
        let { defaultSelectedKeys } = action.payload
        return Object.assign({}, state, { defaultSelectedKeys })
    },
    UPDATE_DEFAULT_OPEN_KEYS(state, action) {
        let { defaultOpenKeys } = action.payload
        return Object.assign({}, state, { defaultOpenKeys })
    }
}, {
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
})

const TestReducer = combineReducers({
    menu,
    searchParam
})

export default TestReducer
