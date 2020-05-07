import {
    INITIAL_GAME,
    SET_CLICKABLE,
    NEXT_MOVE_ORDER,
    ADD_MOVE_LIST,
    REMOVE_MOVE_LIST,
    SET_OTHER_BOARD
} from '../actions/game'

const initialState = {
    clickable: false,
    moveOrder: 1,
    moveList: [],
    mineBoard: [],
    otherBoard: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case INITIAL_GAME:
            return {
                ...state,
                mineBoard: action.payload.mineBoard,
                otherBoard: action.payload.otherBoard
            }
        case SET_CLICKABLE:
            return {
                ...state,
                clickable: action.payload.clickable
            }
        case NEXT_MOVE_ORDER:
            return {
                ...state,
                moveOrder: state.moveOrder + 1
            }
        case ADD_MOVE_LIST:
            return {
                ...state,
                moveList: action.payload.moveList,
                mineBoard: action.payload.mineBoard,
            }
        case REMOVE_MOVE_LIST:
            return {
                ...state,
                moveList: [],
                mineBoard: action.payload.mineBoard,
            }
        case SET_OTHER_BOARD:
            return {
                ...state,
                otherBoard: action.payload.otherBoard,
                moveOrder: state.moveOrder + 1,
                moveList: []
            }
        default:
            return state;
    }
}