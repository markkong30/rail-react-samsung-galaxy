import axios from 'axios';

export const fetchCurrentStock = (title, storage) => async (dispatch) => {
    dispatch({
        type: 'LOADING',

    })

    const data = await axios.get(`/api/phones/stock?title=${title}&storage=${storage}`);
    dispatch({
        type: 'FETCH_STOCK',
        payload: {
            currentStock: data.data.phone,
            isLoading: false,
        }
    })
}