const initialState = {
    currentStock: null,
    isLoading: true,
    progress: 1,
    redirectURL: '/',
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
        case "UPDATE_PROGRESS":
            return {
                ...state,
                progress: action.payload.progress
            }
        case "UPDATE_URL":
            return {
                ...state,
                redirectURL: action.payload.url
            }
        default:
            return { ...state };
    }
}

export default buyReducer;