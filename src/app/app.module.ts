import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
// import { MaterialModule } from './material/material.module';

import { AnimalRestService } from './services/animal-rest.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserRestService } from './services/user-rest.service';
import { ListAnimalsUsersComponent } from './list-animals-users/list-animals-users.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AnimalAddComponent } from './components/animals/animal-add/animal-add.component';
import { UserAddComponent } from './components/users/user-add/user-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddCarerComponent } from './components/animals/add-carer/add-carer.component';

@NgModule({
  declarations: [
    AppComponent,
    ListAnimalsUsersComponent,
    NavbarComponent,
    AnimalAddComponent,
    UserAddComponent,
    AddCarerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
    // MaterialModule
  ],
  providers: [
    AnimalRestService,
    UserRestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
