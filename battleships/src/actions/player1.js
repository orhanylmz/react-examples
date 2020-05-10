export const SHOT = 'SHOT';

export function shot() {
    return dispatch => {
        dispatch({
            type: SHOT,
        })
    }
}