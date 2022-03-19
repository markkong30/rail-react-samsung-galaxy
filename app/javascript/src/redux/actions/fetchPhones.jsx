import axios from "axios";

export const fetchPhones = () => async (dispatch) => {
    const data = await axios.get('/api/phones');
    const uniquePhones = data.data.phones;
    console.log(uniquePhones)
    const filteredPhones = uniquePhones.filter(ele => {
        return ele.size == 'small'
    })

    const sliders = filteredPhones.map(ele => {
        return ele.image.slider
    })

    const buyImgs = filteredPhones.map(({ title, image }) => {
        return { [title]: image.buy }
    })

    console.log(sliders)

    dispatch({
        type: 'FETCH_PHONES',
        payload: {
            uniquePhones,
            filteredPhones,
            sliders,
            buyImgs,
        }
    })
}