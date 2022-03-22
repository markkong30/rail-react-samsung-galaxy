const initialState = {
    userDetail: null,
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTHENTICATE':
            return {
                ...state,
                userDetail: action.payload.userDetail
            }
        default:
            return { ...state }
    }
}