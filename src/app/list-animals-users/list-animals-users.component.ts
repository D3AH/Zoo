import { Component, OnInit } from '@angular/core';
import { AnimalRestService } from '../services/animal-rest.service';
import { UserRestService } from '../services/user-rest.service';

@Component({
  selector: 'app-list-animals-users',
  templateUrl: './list-animals-users.component.html',
  styleUrls: ['./list-animals-users.component.css']
})
export class ListAnimalsUsersComponent implements OnInit {

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
