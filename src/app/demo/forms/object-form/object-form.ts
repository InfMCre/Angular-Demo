import { Component } from '@angular/core';
import { IPersonForm } from '../IPersonForm';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-object-form',
  imports: [ReactiveFormsModule],
  templateUrl: './object-form.html',
  styleUrl: './object-form.css'
})
export class ObjectForm {

  personForm = new FormGroup<IPersonForm>({
    name: new FormControl(null),
    age: new FormControl(null),
  });

  setCustomData() {
    this.personForm.controls.name.setValue("Mikel")
    this.personForm.controls.age.setValue(25)
  }

  setCustomData2() {
    // OR
    this.personForm.setValue({name: "Mikellll", age: 35})
  }

  onSubmit() {
    // TODO do whatever you want to submit
    console.warn(this.personForm.value);
  }

}
