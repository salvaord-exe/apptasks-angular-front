import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Esto fue agregado por mi para usar http en la app. Esto es necesario para que funcione el servicio
import { HttpClientModule } from '@angular/common/http';

//Esto fue agregado para poder gestionar los formularios
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import { TaskService } from './services/task.service';
import { Router, RouterModule } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TaskListComponent,
    TaskFormComponent
    /*UserFormComponent,
    UserListComponent*/
    
  ],
  //En imports se agregan todos los modulos utilizados
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    //Se tiene que agregar el servicio del usuario para poder usarlo en los componentes
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
