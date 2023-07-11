import { Component, OnInit } from '@angular/core';
//Se importa el servicio para consumir la API
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  arrUsers: any = [];

  //El private instancia el servicio en el constructor para poder usarlo
  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {

    this.listUsers();

  }

  listUsers() {
    this.userService.listUser().subscribe(
      res => {
        this.arrUsers = res;
      },
      err => console.log(err)
    );
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe(
      res => {
        console.log(res);
        this.listUsers();
      },
      err => console.log(err)
    )
  }

  //Deprecado, se deja para efectos didácticos. La mejor práctica es routerLink
  editUser(id: string) {
    this.router.navigate([`/users/edit/${id}`]);
  }

}
