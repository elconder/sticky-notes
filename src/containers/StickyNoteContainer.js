import React, { Component } from 'react';
import PropTypes from 'prop-types';

//StickyNote component
import StickyNote from './../components/StickyNote/';

//Connect
import { connect } from 'react-redux';

//Action Creator
import { addNote, moveNote, openNote, closeNote } from './../actions'

let countNotes = 1;
let lastPosX = 0;
let lastPosY = 0;

class StickyNoteContainer extends Component {

    //Move Note
    handleMoveHeader = (event, noteId) => {

        let offsetX = event.nativeEvent.offsetX;
        let offsetY = event.nativeEvent.offsetY;

        const _mouseMove = (e) => {
            const payload = {
                id: noteId,
                posX: e.clientX - offsetX,
                posY: e.clientY - offsetY,
                flipped: false
            }

            //Dispatch the action
            this.props.moveNote(payload);
        }
        const _mouseUp = () => {
            document.removeEventListener('mousemove', _mouseMove, false);
            document.removeEventListener('mouseup', _mouseUp, false);
        }

        document.addEventListener('mousemove', _mouseMove, false);
        document.addEventListener('mouseup', _mouseUp, false);
    }

    //Add Note
    handleAddStickyNote = () => {
        const payload = {};

        payload['note-' + countNotes++] = {
            posX: 100,
            posY: 100,
            flipped: false
        }

        this.props.addNote(payload);
    }

    //Close Note
    handleCloseStickyNoteClick = (event, noteId) => {
        const payload = {
            id: noteId,
            posX: lastPosX,
            posY: lastPosY,
            flipped: false
        }

        this.props.closeNote(payload);
    }

    //Open Note
    handleBodyNoteClick = (event, noteId) => {
        let stickyNoteElem = event.nativeEvent.srcElement.parentElement.parentElement.parentElement;
        let stickyNoteWidth = stickyNoteElem.offsetWidth;
        let stickyNoteHeight = stickyNoteElem.offsetHeight;
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;
        const posX = (windowWidth / 2) - (stickyNoteWidth / 2)
        const posY = (windowHeight / 2) - (stickyNoteHeight / 2)
        const payload = {
            id: noteId,
            posX,
            posY,
            flipped: true
        }

        lastPosX = this.props.notes[noteId].posX;
        lastPosY = this.props.notes[noteId].posY;

        this.props.openNote(payload);
    }

    //Generate Sticky Notes
    generateStickyNotes = notes => (
        Object.keys(notes).map((key) =>
            (
                <StickyNote
                    key={key}
                    noteId={key}
                    noteParams={notes[key]}
                    onDragStartStickyNote={this.handleOnDragStart}
                    onDragEndStickyNote={this.handleOnDragEnd}
                    onAddStickyNote={this.handleAddStickyNote}
                    onMoveHeader={this.handleMoveHeader}
                    onBodyNoteClick={this.handleBodyNoteClick}
                    onCloseStickyNoteClick={this.handleCloseStickyNoteClick}
                >
                </StickyNote>
            )
        )
    )

    render() {
        const { notes } = this.props;
        return (
            <div>
                {this.generateStickyNotes(notes)}
            </div>
        );
    }
}

StickyNoteContainer.propTypes = {
    addNote: PropTypes.func.isRequired
}

// Receives 'state' as parameter
const mapStateToProps = state => (
    {
        notes: state
    }
)


const mapDispatchToPropsActions = dispatch => ({
    addNote: value => dispatch(addNote(value)),
    moveNote: value => dispatch(moveNote(value)),
    openNote: value => dispatch(openNote(value)),
    closeNote: value => dispatch(closeNote(value))
});

export default connect(mapStateToProps, mapDispatchToPropsActions)(StickyNoteContainer);