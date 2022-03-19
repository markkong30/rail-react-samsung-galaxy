import axios from "axios";

export const fetchSpecs = () => async (dispatch) => {
    const data = await axios.get('/api/specs');
    dispatch({
        type: 'FETCH_SPECS',
        payload: {
            specs: data.data.specs
        }
    })
}