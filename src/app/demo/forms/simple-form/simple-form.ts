import { Component } from '@angular/core';

import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  imports: [ReactiveFormsModule],
  templateUrl: './simple-form.html',
  styleUrl: './simple-form.css'
})
export class SimpleForm {

  email = new FormControl<string|null>(null);


  // example to change the value from .ts file
  setCustomEmail() {
    this.email.setValue('angularrox@gmail.com');
  }
  onSubmit(event: Event) {
    event.preventDefault();
    // TODO do whatever you want to submit
    console.warn(this.email.value);
  }
}
