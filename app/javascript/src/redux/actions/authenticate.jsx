import axios from 'axios';

export const authenticate = () => async (dispatch) => {
    const data = await axios.get('/api/authenticated');
    console.log(data.data)
    dispatch({
        type: 'AUTHENTICATE',
        payload: {
            userDetail: data.data
        }
    })
}