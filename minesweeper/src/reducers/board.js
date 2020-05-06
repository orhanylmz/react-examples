import {LOAD_GAME, ON_CLICK} from '../actions/board'

const initialState = {
    loaded: false,
    bombCount: 0,
    gameBoard: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_GAME:
            return {
                ...state,
                bombCount: action.payload.bombCount,
                gameBoard: action.payload.gameBoard,
                loaded: true
            }
        case ON_CLICK:
            return {
                ...state,
                gameBoard: action.payload.gameBoard,
                loaded: true
            }
        default:
            return state;
    }
}