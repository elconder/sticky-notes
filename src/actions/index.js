export const ADD_NOTE = 'ADD_NOTE';
export const MOVE_NOTE = 'MOVE_NOTE';
export const OPEN_NOTE = 'OPEN_NOTE';
export const CLOSE_NOTE = 'CLOSE_NOTE';

export const addNote = payload => ({ type: ADD_NOTE, payload });

export const moveNote = payload => ({ type: MOVE_NOTE, payload });

export const openNote = payload => ({ type: OPEN_NOTE, payload });

export const closeNote = payload => ({ type: CLOSE_NOTE, payload });