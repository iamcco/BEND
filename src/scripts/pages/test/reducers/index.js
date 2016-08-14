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
    UPDATE_MENU(state, action) {
        return Object.assign({}, state, action.payload.menu)
    },
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
    subMenuList: [],
    defaultSelectedKeys: [],
    defaultOpenKeys: []
})

const TestReducer = combineReducers({
    menu,
    searchParam
})

export default TestReducer
