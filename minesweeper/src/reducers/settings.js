import {SETTING} from '../actions/settings'

const initialState = {
    x: 20,
    y: 10,
    bombCount: 30,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SETTING:
            return {
                ...state,
                x: action.payload.x,
                y: action.payload.y,
                bombCount: action.payload.bombCount
            }
        default:
            return state;
    }
}