export const updateProgress = (progress) => (dispatch) => {
    dispatch({
        type: 'UPDATE_PROGRESS',
        payload: {
            progress
        }
    })
}