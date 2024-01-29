import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  //Se añade en constructor lo que vamos a usar
  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) { }

  //Se crea objeto a trabajar en el form
  task: Task = {
    id: '',
    title: '',
    description: ''
    
  }

  //Este boolean determina si es creacion o edicion
  edit: boolean = false;

  ngOnInit(): void {
    //Creo variable params para validar si el id esta lleno, de estarlo, entonces es una solicitud de edicion
    let params = this.activatedRouter.snapshot.params;
    if(params['id']){
      this.edit = true;
      this.task.id = params['id'];
      //Esta accion llena los campos de la tarea
      this.taskService.getTask(params['id']).subscribe(
        res => {
          this.task = res;
          console.log(this.task);
          
        },
        err => console.error(err)
      );
      
    }
  }

  saveTask(){
    this.taskService.insertTask(this.task).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/tasks']);
      },
      err => console.error(err)
    );
  }

  updateTask(id: any){
    this.taskService.updateTask(id, this.task).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/tasks']);
      },
      err => console.error(err)
    )
  }
}
