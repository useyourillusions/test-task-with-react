//import {filterCondition} from "./filter";
import cards from '../cards.json';

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

export function loadingError(bool) {
    return {
        type: 'CARDS_LOADING_ERROR',
        payload: bool
    };
}

export function getCards() {
    return (dispatch) => {
        setTimeout(() => {
            // localStorage.setItem('cards', cards.cards);
            dispatch(cardsLoaded(cards.cards));
        }, 2000);
    }
}
