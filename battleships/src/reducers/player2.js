import {SHOT} from '../actions/player2'

const initialState = {
    clickable: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SHOT:
            return {
                ...state
            }
        default:
            return state;
    }
}