
export function filter(state = 'all', action) {
    switch (action.type) {
        case 'FILTER_CONDITION': return action.payload;
        default: return state;
    }
}