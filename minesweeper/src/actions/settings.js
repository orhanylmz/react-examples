export const SETTING = 'SETTING';

export function setSettings({x, y, bombCount}) {
    return dispatch => {
        dispatch({
            type: SETTING,
            payload: {
                x: x,
                y: y,
                bombCount: bombCount
            }
        })
    }
}