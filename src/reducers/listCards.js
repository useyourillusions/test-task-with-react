const initialState = {
    isCardsLoading: true,
    hasError: false,
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
                hasError: true
            };
        }

        default: return state;
    }
}