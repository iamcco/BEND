import React from 'react'
import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import asyncCombineReducers from 'redux-async-combine-reducers'

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

export default asyncCombineReducers(combineReducers)({
    menu
})
