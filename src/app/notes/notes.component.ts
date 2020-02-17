import {Component, OnInit} from '@angular/core';
import {Notebook} from './model/Notebook';
import {ApiService} from '../shared/api.service';
import {Note} from './model/Note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notebooks: Notebook[] = [];
  notes: Note[] = [];
  selectedNotebook: Notebook;
  searchText: string;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getAllNotebooks();
    this.getAllNotes();
  }

  public getAllNotebooks() {
    this.apiService.getAllNotebooks().subscribe(
      res => {
        this.notebooks = res;
      },
      err => {
        alert('An error has occured.');
      }
    );
  }

  getAllNotes() {
    this.apiService.getAllNotes().subscribe(
      res => {
        this.notes = res;
      },
      err => {
        alert('Error occurred.');
      }
    );
  }

  createNotebook() {
    const notebook: Notebook = {
      name: 'New notebook',
      id: null,
      nbOfNotes: 0
    };

    this.apiService.postNotebook(notebook).subscribe(
      res => {
        notebook.id = res.id;
        this.notebooks.push(notebook);
      },
      err => {
        alert('An error has occurred while saving new notebook.');
      }
    );
  }

  updateNotebook(updatedNotebook: Notebook) {
    this.apiService.postNotebook(updatedNotebook).subscribe(
      res => {
      },
      err => {
        alert('An error has occurred while updating new notebook.');
      }
    );
  }

  deleteNotebook(notebook: Notebook) {
    if (confirm('Are you sure you want to delete this notebook?')) {
      this.apiService.deleteNotebook(notebook.id).subscribe(
        res => {
          const indexOfNotebook = this.notebooks.indexOf(notebook);
          this.notebooks.splice(indexOfNotebook, 1);
        },
        err => {
          alert('Could not delete the notebook.');
        }
      );
    }
  }

  createNote(noteBookId: string) {
    const newNote: Note = {
      id: null,
      title: 'New Note',
      text: 'Some text here',
      lastModifiedOn: null,
      notebookId: noteBookId
    };

    this.apiService.saveNote(newNote).subscribe(
      res => {
          newNote.id = res.id;
          this.notes.push(newNote);
      },
      err => {
        alert('An error has occurred while saving the note.');
      }
    );

  }

  selectNotebook(notebook: Notebook) {
    this.selectedNotebook = notebook;
    this.apiService.getNotesByNotebook(notebook.id).subscribe(
      res => {
          this.notes = res;
      },
      err => {
        alert('Can\'t get notes for this Notebook.');
      }
    );
  }

  updateNote(note: Note) {
    this.apiService.saveNote(note).subscribe(
      res => {},
      err => {
        alert('An error has occurred while saving the note.');
      }
    );
  }

  selectAllNotes() {
    this.selectedNotebook = null;
    this.getAllNotes();
  }

  deleteNote(note: Note) {
    if (confirm('Are you sure you want to delete this note?')) {
      this.apiService.deleteNote(note.id).subscribe(
        res => {
          const indexOfNote = this.notes.indexOf(note);
          this.notes.splice(indexOfNote);
        },
        err => { alert('Can not delete this note.'); }
      );
    }
  }
}
