import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IPersonWithTelephone } from '../IPersonWithTelephone';

import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-array-form-simple',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './array-form-simple.html',
  styleUrl: './array-form-simple.css'
})
export class ArrayFormSimple {

  personForm = new FormGroup<IPersonWithTelephone>({
    name: new FormControl(null),
    age: new FormControl(null),
    telephones: new FormArray<FormControl<number|null>>([])
  });

  onSubmit() {
    // TODO do whatever you want to submit
    console.warn(this.personForm.value);
  }

  get telephones(): FormArray {
    return this.personForm.get('telephones') as FormArray;
  }

  removeTelephone(index: number) {
    this.telephones.removeAt(index);
  }
  addTelephone() {
    this.telephones.push(new FormControl(null, Validators.required))
  }


}
