import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { User } from '../models/User'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URI = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  listUser() {
    return this.http.get(`${this.API_URI}/usuarios/list`);
  }

  getUser(id: string) {
    return this.http.get(`${this.API_URI}/usuarios/get/${id}`);
  }

  insertUser(user: User) {
    return this.http.post(`${this.API_URI}/usuarios/insert`, user);
  }

  deleteUser(id: string) {
    return this.http.delete(`${this.API_URI}/usuarios/delete/${id}`);
  }

  updateUser(id: string, user: User) {
    return this.http.put(`${this.API_URI}/usuarios/update/${id}`, user);
  }

}
