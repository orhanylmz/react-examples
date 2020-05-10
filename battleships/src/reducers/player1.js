import {SHOT} from '../actions/player1'

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