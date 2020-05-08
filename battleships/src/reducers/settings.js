import {
    INITIAL_BOARD, SET_SHIPS, MOVE
} from '../actions/settings'

const initialState = {
    clickable: false,
    board: [],
    admiral: {},
    kreuzers: [],
    destroyers: [],
    boats: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case INITIAL_BOARD:
            return {
                ...state,
                board: action.payload.board,
            }
        case SET_SHIPS:
            return {
                ...state,
                admiral: action.payload.admiral,
                kreuzers: action.payload.kreuzers,
                destroyers: action.payload.destroyers,
                boats: action.payload.boats
            }
        case MOVE:
            return {
                ...state,
                ...moveReducer(action.payload.moveOrder, action.payload.moveList, state)
            }
        default:
            return state;
    }
}

const moveReducer = (moveOrder, moveList, state) => {
    var shotCount = 0;
    const {admiral, kreuzers, destroyers, boats} = state;

}