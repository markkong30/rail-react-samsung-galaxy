export const updateURL = (url) => (dispatch) => {
    dispatch({
        type: 'UPDATE_URL',
        payload: {
            url
        }
    })
}