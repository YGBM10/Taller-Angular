import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../Interfaces/character.interface';
import { Task } from '../Interfaces/task.interface';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient
  ) { }

  addTask(task: Task): Observable<Task>
  {
    console.log("recibi ", task)
    const url_api : string = 'https://taller-angular.000webhostapp.com/api-Angular/task/post'
    return this.http.post<Task>(url_api, task);
  }


}
