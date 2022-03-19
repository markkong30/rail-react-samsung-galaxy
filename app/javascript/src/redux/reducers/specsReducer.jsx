const initialState = {
    specs: [],
}

export const specsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_SPECS":
            return {
                ...state,
                specs: action.payload.specs
            }
        default:
            return { ...state }
    }
}