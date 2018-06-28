import React from 'react';

const NoteBody = ({ onBodyNoteClick }) => {
    return (
        <div onClick={onBodyNoteClick} className='note-body'>Open Note</div>
    );
}

export default NoteBody;