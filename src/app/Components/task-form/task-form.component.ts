import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Interfaces/task.interface';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { TaskService } from 'src/app/Services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {


  constructor(
    private formBuilder: FormBuilder,
    private servicesTask : TaskService
  ){}

  formTask: FormGroup = this.formBuilder.group({
    // task_id: new FormControl('', Validators.required),
    task: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
    this.formTask.get('task')?.setValue("hola")
  }

  onClick(){

    console.log("metodo Boton");

    const newTask : Task = {
        task:           this.formTask.get('task')?.value,
        description:    this.formTask.get('description')?.value,
        task_datetime:  this.formTask.get('date')?.value
    }

    console.log("ingreso estos datos",newTask);

    this.servicesTask.addTask(newTask);

  }


}
