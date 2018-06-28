import { ADD_NOTE, MOVE_NOTE, OPEN_NOTE, CLOSE_NOTE } from '../actions';

export const notes = (state, action) => {

    switch (action.type) {
        case ADD_NOTE:
            return { ...state, ...action.payload }
        case MOVE_NOTE:
            return { ...state, [action.payload.id]: action.payload }
        case OPEN_NOTE:
            return { ...state, [action.payload.id]: action.payload }
        case CLOSE_NOTE:
            return { ...state, [action.payload.id]: action.payload }
        default:
            return state;
    }
}