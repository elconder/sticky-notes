import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NoteHeader from './NoteHeader';
import NoteBody from './NoteBody';
import './styles.css';

class StickyNote extends Component {

    handleBodyNoteClick = (event) => {
        this.props.onBodyNoteClick(event, this.props.noteId);
    }

    handleCloseStickyNoteClick = (event) => {
        this.props.onCloseStickyNoteClick(event, this.props.noteId);
    }

    handleStickyNoteClick = () => {
        this.props.onAddStickyNote();
    }

    handleHeaderMouseDown = (event) => {
        this.props.onMoveHeader(event, this.props.noteId);
    }

    render() {
        const { noteParams } = this.props;
        const styles = {
            transform: `matrix(1, 0, 0, 1, ${noteParams.posX}, ${noteParams.posY})`
        }

        let noteClass = 'sticky-note';

        if (noteParams.flipped) {
            noteClass += ' flipped';
        }

        return (
            <div style={styles} className={noteClass}>
                <div className="flipper">
                    <div className='front'>
                        <NoteHeader
                            onHeaderMouseDown={this.handleHeaderMouseDown}
                            onAddStickyNoteClick={this.handleStickyNoteClick} />
                        <NoteBody onBodyNoteClick={this.handleBodyNoteClick} />
                    </div>
                    <div className='back'>
                        <div onClick={this.handleCloseStickyNoteClick} className="close-note">x</div>
                    </div>
                </div>
            </div>
        )
    }

}

StickyNote.propTypes = {
    onAddStickyNote: PropTypes.func.isRequired
}

export default StickyNote;