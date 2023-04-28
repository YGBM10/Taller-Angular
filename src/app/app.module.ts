import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './Components/prueba/prueba.component';
import { TasksComponent } from './Paginas/tasks/tasks.component';
import { TaskFormComponent } from './Components/task-form/task-form.component';
import { CharacteresComponent } from './Paginas/characteres/characteres.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CharactersTablaComponent } from './Paginas/characters-tabla/characters-tabla.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Material
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';



import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    CharacteresComponent,
    CharactersTablaComponent,
    TasksComponent,
    TaskFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatDatepickerModule,
    MatButtonModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
