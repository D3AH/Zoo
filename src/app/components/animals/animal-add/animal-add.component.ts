import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AnimalRestService } from 'src/app/services/animal-rest.service';

@Component({
  selector: 'app-animal-add',
  templateUrl: './animal-add.component.html',
  styleUrls: ['./animal-add.component.css']
})
export class AnimalAddComponent implements OnInit {
  registerForm;
  submitedAnimal;
  submited = false;

  constructor(private formbuilder: FormBuilder, public animalRest: AnimalRestService) {
    this.registerForm = this.formbuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      age: ['', Validators.required],
      scientific_name: ['', Validators.required]
    });
  }

  get name() { return this.registerForm.get('name'); }
  get type() { return this.registerForm.get('type'); }
  get age() { return this.registerForm.get('age'); }
  get scientific_name() { return this.registerForm.get('scientific_name'); }

  ngOnInit() {
  }

  onSubmit() {
    if(this.registerForm.valid) {
      this.animalRest.add(this.registerForm.value).subscribe(
        res => {
          this.submitedAnimal = res.animal;
          this.submited = true;
        }
      );
    }
  }

}
