import { createStore } from 'redux';
import { notes } from './../reducers/notes'

const initialState = {
    'note-0': {
        posX: 10,
        posY: 10,
        flipped: false
    }
}


export const store = createStore(notes, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

