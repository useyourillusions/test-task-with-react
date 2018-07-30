import axios from 'axios';

export function cardsLoaded(array) {
    return {
        type: 'CARDS_ITEMS_LOADED',
        payload: array
    };
}

export function cardsLoading(bool) {
    return {
        type: 'CARDS_ITEMS_LOADING',
        payload: bool
    };
}

export function loadingError(object) {
    return {
        type: 'CARDS_LOADING_ERROR',
        payload: object
    };
}

export function getCards() {
    return (dispatch) => {
        axios.get('http://localhost:5000/api/cards').then(
            res => {
                if (res.data && res.data.cards && res.data.cards.length) {
                    dispatch(cardsLoaded(res.data.cards));
                }
            }, err => {
                dispatch(cardsLoading(false));
                dispatch(loadingError(err.response.data));
                console.log(err.response);
        });
    }
}
