import axios from 'axios';

export const authenticate = () => async (dispatch) => {
    const data = await axios.get('/api/authenticated');

    dispatch({
        type: 'AUTHENTICATE',
        payload: {
            userDetail: data.data
        }
    })
}