import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'

const searchParam = handleActions({
    UPDATE_SEARCH_PARAM(state, action) {
        let { dutyName, ID } = action.payload
        return Object.assign({}, state, { dutyName, ID })
    }
}, {
    dutyName: '',
    ID: ''
})

export default combineReducers({
    searchParam
})

