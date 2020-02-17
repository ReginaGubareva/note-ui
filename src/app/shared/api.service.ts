import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Notebook} from '../notes/model/Notebook';
import {FeedbackViewModel} from '../feedback/feedback.component';
import {Note} from '../notes/model/Note';
import {not} from 'rxjs/internal-compatibility';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private ALL_NOTEBOOKS_URL = 'http://localhost:8080/api/notebooks/all';
  private SEND_FEEDBACK_URL = 'http://localhost:8080/api/feedback';
  private SEND_UPDATE_NOTEBOOK = 'http://localhost:8080/api/notebooks/';
  private DELETE_NOTEBOOK_URL = 'http://localhost:8080/api/notebooks\\';
  private ALL_NOTES_URL = 'http://localhost:8080/api/notes/all';
  private ALL_NOTES_BY_NOTEBOOK_URL = 'http://localhost:8080/api/notes/byNotebook\\';
  private NOTE_BY_ID_URL = 'http://localhost:8080/api/notes/byId\\';
  private CREATE_NOTE_URL = 'http://localhost:8080/api/notes';
  private DELETE_NOTE_URL = 'http://localhost:8080/api/notes\\';

  constructor(private http: HttpClient) {

  }

  getAllNotebooks(): Observable<Notebook[]> {
    return this.http.get<Notebook[]>(this.ALL_NOTEBOOKS_URL);
  }

  postFeedback(feedback: FeedbackViewModel): Observable<any> {
    return this.http.post(this.SEND_FEEDBACK_URL, feedback);
  }

  postNotebook(notebook: Notebook): Observable<Notebook> {
    return this.http.post<Notebook>(this.SEND_UPDATE_NOTEBOOK, notebook);
  }

  // tslint:disable-next-line:ban-types align
  deleteNotebook(id: string): Observable<any> {
    return this.http.delete(this.DELETE_NOTEBOOK_URL + id);
  }

  getAllNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.ALL_NOTES_URL);
  }

  getNotesByNotebook(notebookId: string): Observable<Note[]> {
    return this.http.get<Note[]>(this.ALL_NOTES_BY_NOTEBOOK_URL + notebookId);
  }

  getNoteById(noteId: string): Observable<Note> {
    return this.http.get<Note>(this.NOTE_BY_ID_URL + noteId);
  }

  saveNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.CREATE_NOTE_URL, note);
  }

  deleteNote(noteId: string): Observable<any> {
    return this.http.delete(this.DELETE_NOTE_URL + noteId);
  }
}
