import { Geograph } from 'models/geograph'

const SET_GEOGRAPH = 'location/setGeograph'

// Actions
interface SetGeograph {
    type: typeof SET_GEOGRAPH
    geograph: Geograph | null
}

type Action =
    | SetGeograph

// Action creators
export const setGeograph = (geograph: Geograph): SetGeograph => {
    return {
        type: SET_GEOGRAPH,
        geograph: geograph
    }
}

// State
export interface State {
    geograph: Geograph | null
}

const initialState: State = {
    geograph: null
}

export default (state: State = initialState, action: Action) => {
    switch (action.type) {
        case SET_GEOGRAPH: {
            return {
                ...state,
                geograph: action.geograph
            }
        }
        default: {
            return state
        }
    }
}
