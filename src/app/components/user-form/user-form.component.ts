import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';
//el import de Route me permite manejar enrutadores a otros componentes
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  //Todos los import que vaya a usar los debo definir en el constructor
  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  user: User = {
    id: '',
    nombre: '',
    cedula: '',
    celular: ''
  }

  edit: boolean = false;

  ngOnInit(): void {
    //Se usa activedRoute para conocer si es un edit o un add
    let params = this.activatedRouter.snapshot.params;
    if(params['id']){
      this.edit = true;
      this.user.id = params['id'];
      this.userService.getUser(params['id']).subscribe(
        res => {
          let arrUsers = Object.values(res);
          this.user = arrUsers[0];
        },
        err => console.error(err)
      );
      
    }
  }

  saveUser(){
    this.userService.insertUser(this.user).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/users']);
      },
      err => console.error(err)
    );
  }

  updateUser(id: any){
    this.userService.updateUser(id, this.user).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/users']);
      },
      err => console.error(err)
    )
  }

}
