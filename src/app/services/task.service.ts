import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  API_URI = 'http://localhost:4567'

  constructor(private http: HttpClient) { }

  listTask() {
    
    return this.http.get(`${this.API_URI}/tasks`);
    
  }

  getTask(id: string) {
    return this.http.get(`${this.API_URI}/tasks/${id}`);
  }

  insertTask(task: Task) {
    return this.http.post(`${this.API_URI}/tasks`, task);
  }

  deleteTask(id: string) {
    return this.http.delete(`${this.API_URI}/tasks/${id}`);
  }

  updateTask(id: string, task: Task) {
    return this.http.put(`${this.API_URI}/tasks/${id}`, task);
  }

}
