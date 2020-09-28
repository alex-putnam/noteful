import React, { Component } from "react";
import APIContext from "../APIContext";
import { findNote } from "../notes-helpers";
import Note from "../Note/Note";
import "./NotePageMain.css";
import PropTypes from "prop-types";

export default class NotePageMain extends Component {
  static defaultProps = {
    match: {
      params: {},
    },
  };

  static contextType = APIContext;

  handleDeleteNote = (noteId) => {
    this.props.history.push("/");
  };

  render() {
    const { notes = [] } = this.context;
    const { noteId } = this.props.match.params;
    const note = findNote(notes, noteId) || { content: "" };
    return (
      <section className="NotePageMain">
        <Note
          id={note.id}
          name={note.name}
          modified={note.modified}
          onDeleteNote={this.handleDeleteNote}
        />
        <div className="NotePageMain__content">
          {note.content.split(/\n \r|\n/).map((param, i) => (
            <p key={i}>{param}</p>
          ))}
        </div>
      </section>
    );
  }
}

NotePageMain.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
};
