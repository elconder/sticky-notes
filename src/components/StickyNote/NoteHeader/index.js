import React from 'react';

const NoteHeader = ({ onAddStickyNoteClick, onHeaderMouseDown }) => {

    return (
        <div onMouseDown={onHeaderMouseDown} className='note-header'>
            <div className='button' onClick={onAddStickyNoteClick}>+</div>
        </div>
    )
}

export default NoteHeader;