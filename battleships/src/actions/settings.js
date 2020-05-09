export const SET_SHIPS = "SET_SHIPS";

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