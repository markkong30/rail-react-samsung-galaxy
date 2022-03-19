const initialState = {
    uniquePhones: [],
    filteredPhones: [],
    sliders: [],
    buyImgs: [],
}

const phonesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_PHONES":
            return {
                ...state,
                uniquePhones: action.payload.uniquePhones,
                filteredPhones: action.payload.filteredPhones,
                sliders: action.payload.sliders,
                buyImgs: action.payload.buyImgs,
            }
        default:
            return { ...state };
    }
}

export default phonesReducer;