import {createPanel} from "../helpers/boardHelper";

export const INITIAL_GAME = 'INITIAL_GAME';
export const SET_CLICKABLE = 'SET_CLICKABLE';
export const NEXT_MOVE_ORDER = 'NEXT_MOVE_ORDER';
export const ADD_MOVE_LIST = 'ADD_MOVE_LIST';
export const REMOVE_MOVE_LIST = 'REMOVE_MOVE_LIST';
export const SET_OTHER_BOARD = 'SET_OTHER_BOARD';

export function initialGame() {
    return dispatch => {
        dispatch({
            type: INITIAL_GAME,
            payload: {
                mineBoard: createPanel(),
                otherBoard: createPanel()
            }
        })
    }
}

export function setClickable(clickable) {
    return dispatch => {
        dispatch({
            type: SET_CLICKABLE,
            payload: {
                clickable: clickable
            }
        })
    }
}

export function nextMoveOrder() {
    return dispatch => {
        dispatch({
            type: NEXT_MOVE_ORDER
        })
    }
}

export function setOtherBoard(board) {
    return dispatch => {
        dispatch({
            type: SET_OTHER_BOARD,
            payload: {
                otherBoard: board
            }
        })
    }
}

export function addMoveList(moveList, board) {
    return dispatch => {
        dispatch({
            type: ADD_MOVE_LIST,
            payload: {
                moveList: moveList,
                mineBoard: board
            }
        })
    }
}

export function removeMoveList(board) {
    return dispatch => {
        dispatch({
            type: REMOVE_MOVE_LIST,
            payload: {
                mineBoard: board
            }
        })
    }
}