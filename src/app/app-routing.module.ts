import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAnimalsUsersComponent } from './list-animals-users/list-animals-users.component';
import { AnimalAddComponent } from './components/animals/animal-add/animal-add.component';
import { UserAddComponent } from './components/users/user-add/user-add.component';

const routes: Routes = [
  { path: '', component: ListAnimalsUsersComponent },
  { path: 'animals/add', component: AnimalAddComponent },
  { path: 'users/add', component: UserAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
