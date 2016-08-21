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

export default combineReducers({
    searchParam
})

