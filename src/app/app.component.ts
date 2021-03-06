import { Component, OnInit } from '@angular/core';
import { AnimalRestService } from './services/animal-rest.service';
import { UserRestService } from './services/user-rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  public animals = [];
  public users = [];

  constructor(public animalRest: AnimalRestService, public userRest: UserRestService) {}

  ngOnInit(): void {
    this.animalRest.findAll().subscribe(
      res => {
        this.animals = res.animals;
      }
    );

    this.userRest.findAll().subscribe(
      res => {
        this.users = res.users;
      }
    );
  }
}
