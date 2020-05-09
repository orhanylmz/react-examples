import {SET_SHIPS} from '../actions/settings';

import {createPanel} from "../helpers/boardHelper";

const initialState = {
    panel: createPanel(),
    admiral: {},
    kreuzers: [],
    destroyers: [],
    boats: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_SHIPS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}