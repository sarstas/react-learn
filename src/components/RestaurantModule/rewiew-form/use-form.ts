import { useReducer } from 'react';

export type State = {
    name: string;
    rating: number;
    text: string;
};

const INITIAL_STATE: State = {
    name: '',
    rating: 1,
    text: '',
};

const ACTIONS = {
    CHANGE_NAME: 'CHANGE_NAME',
    CHANGE_RATING: 'CHANGE_RATING',
    CHANGE_TEXT: 'CHANGE_TEXT',
    RESET: 'RESET',
}

const reducer = (state: State, action): State => {
    const { type, payload } = action;

    switch (type) {
        case ACTIONS.CHANGE_NAME:
            return { ...state, name: payload };
        case ACTIONS.CHANGE_RATING:
            return { ...state, rating: payload };
        case ACTIONS.CHANGE_TEXT:
            return { ...state, text: payload };
        case ACTIONS.RESET:
            return INITIAL_STATE;
        default:
            return state;
    }
};

export const useForm = () => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    const setName = (value) => dispatch(
        { type: ACTIONS.CHANGE_NAME, payload: value }
    );
    const setRating = (value) => dispatch(
        { type: ACTIONS.CHANGE_RATING, payload: value }
    );
    const setText = (value) => dispatch(
        { type: ACTIONS.CHANGE_TEXT, payload: value }
    );

    const reset = () => dispatch(
        { type: ACTIONS.RESET }
    );

    return { state, setName, setRating, setText, reset };
}
