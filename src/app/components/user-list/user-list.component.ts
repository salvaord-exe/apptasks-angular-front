import { Component, OnInit } from '@angular/core';
//Se importa el servicio para consumir la API
import { TaskService } from 'src/app/services/user.service';
import { Task } from 'src/app/models/Task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  arrTasks: any = [];

  //El private instancia el servicio en el constructor para poder usarlo
  constructor(
    private router: Router,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {

    this.listTasks();

  }

  listTasks() {
    this.taskService.listUser().subscribe(
      res => {
        this.arrTasks = res;
      },
      err => console.log(err)
    );
  }

  deleteUser(id: string) {
    this.taskService.deleteUser(id).subscribe(
      res => {
        console.log(res);
        this.listTasks();
      },
      err => console.log(err)
    )
  }

  //Deprecado, se deja para efectos didácticos. La mejor práctica es routerLink
  editUser(id: string) {
    this.router.navigate([`/tasks/edit/${id}`]);
  }

}
