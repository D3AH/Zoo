import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserRestService } from 'src/app/services/user-rest.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  registerForm;
  submitedUser;
  submited = false;

  constructor(private formbuilder: FormBuilder, public userRest: UserRestService) {
    this.registerForm = this.formbuilder.group({
      name: ['', Validators.required],
      role: ['', Validators.required],
      phone_number: ['', Validators.required]
    });
  }

  get name() { return this.registerForm.get('name'); }
  get role() { return this.registerForm.get('role'); }
  get phone_number() { return this.registerForm.get('phone_number'); }

  ngOnInit() {
  }

  onSubmit() {
    if(this.registerForm.valid) {
      this.userRest.add(this.registerForm.value).subscribe(
        res => {
          this.submitedUser = res.user;
          this.submited = true;
        }
      );
    }
  }

}
