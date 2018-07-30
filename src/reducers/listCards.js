const initialState = {
    isCardsLoading: true,
    errorData: {
        hasError: false,
        errorCode: null,
        errorMessage: null
    },
    data: []
};

export function cards(state = initialState, action) {
    switch (action.type) {
        case 'CARDS_ITEMS_LOADING': {
            return {
                ...state,
                isCardsLoading: action.payload
            };
        }

        case 'CARDS_ITEMS_LOADED': {
            return {
                ...state,
                data: action.payload
            };
        }

        case 'CARDS_LOADING_ERROR': {
            return {
                ...state,
                errorData: action.payload
            };
        }

        default: return state;
    }
}