import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotesComponent } from './notes/notes.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FeedbackComponent } from './feedback/feedback.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NoteComponent } from './notes/note/note.component';
import { NoteTextFilterPipePipe } from './shared/note-text-filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NotesComponent,
    NotFoundComponent,
    FeedbackComponent,
    NoteComponent,
    NoteTextFilterPipePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
