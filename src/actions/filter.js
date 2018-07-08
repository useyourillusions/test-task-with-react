export const FILTER_CONDITION = 'FILTER_CONDITION';

export function filterCondition(string = 'all') {
    return {
        type: FILTER_CONDITION,
        payload: string
    };
}

export const applyFilter = (condition) =>
    (dispatch) => dispatch(filterCondition(condition));
