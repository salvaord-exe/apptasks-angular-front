import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Esto fue agregado por mi para usar http en la app. Esto es necesario para que funcione el servicio
import { HttpClientModule } from '@angular/common/http';

//Esto fue agregado para poder gestionar los formularios
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';

import { UserService } from './services/user.service';
import { Router, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UserFormComponent,
    UserListComponent
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
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
