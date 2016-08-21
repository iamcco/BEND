import React from 'react'
import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import asyncCombineReducers from 'redux-async-combine-reducers'

export const menu = handleActions({
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

export const pages = handleActions({
    UPDATE_PAGES(pages, action) {
        let { pageName, page } = action.payload
        return Object.assign({}, pages, { [pageName]: { page } })
    }
}, {})

export const currentPage = handleActions({
    UPDATE_ACTIVE_PAGE(currentPage, action) {
        return action.payload
    }
}, 'loading')

export default asyncCombineReducers(combineReducers)({
    menu,
    pages,
    currentPage
})
