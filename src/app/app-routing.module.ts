import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PruebaComponent } from './Components/prueba/prueba.component';
import { CharacteresComponent } from './Paginas/characteres/characteres.component';
import { CharactersTablaComponent } from './Paginas/characters-tabla/characters-tabla.component';
import { TasksComponent } from './Paginas/tasks/tasks.component';

const routes: Routes = [
  { path: "", component: PruebaComponent },
  { path: "prueba", component: PruebaComponent },
  { path: "characters", component: CharacteresComponent },
  { path: "characters-tabla", component: CharactersTablaComponent },
  { path: "tasks", component: TasksComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
