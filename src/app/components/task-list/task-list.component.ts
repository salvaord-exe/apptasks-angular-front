import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  arrTasks: any = [];

  constructor(private router: Router, private taskService: TaskService) { }

  ngOnInit(): void {
    this.listTasks();
  }

  listTasks() {
    this.taskService.listTask().subscribe(
      res => {
        this.arrTasks = res;
        console.log(this.arrTasks);
      },
      err => console.log(err)
    );
  }

  deleteTask(id: string) {
    this.taskService.deleteTask(id).subscribe(
      res => {
        console.log(res);
        this.listTasks();
      },
      err => console.log(err)
    )
  }


  



}
