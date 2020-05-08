import {initialBoard} from "../helpers/boardHelper";

export const INITIAL_BOARD = 'INITIAL_BOARD';
export const SET_SHIPS = 'SET_SHIPS';
export const MOVE = 'MOVE';

export function initialSettingsBoard() {
    return dispatch => {
        dispatch({
            type: INITIAL_BOARD,
            payload: {
                board: initialBoard(),
            }
        })
    }
}

export function setShips({admiral, kreuzers, destroyers, boats}) {
    return dispatch => {
        dispatch({
            type: SET_SHIPS,
            payload: {
                admiral: admiral,
                kreuzers: kreuzers,
                destroyers: destroyers,
                boats: boats
            }
        })
    }
}

export function move({moveOrder, moveList}) {
    return dispatch => {
        dispatch({
            type: MOVE,
            payload: {
                moveOrder: moveOrder,
                moveList: moveList
            }
        })
    }
}