const initialState = {
    currentStock: null,
    isLoading: true,
}

const buyReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_STOCK":
            return {
                ...state,
                currentStock: action.payload.currentStock,
                isLoading: action.payload.isLoading
            }
        case "LOADING":
            return {
                ...state,
                isLoading: true,
            }
        default:
            return { ...state };
    }
}

export default buyReducer;