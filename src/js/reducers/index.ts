import geographs, { State as GeographsState } from 'reducers/geographs'
import { combineReducers } from 'redux'

export interface State {
    rootReducer: {
        geographs: GeographsState
    }
}

export default combineReducers({
    geographs
})