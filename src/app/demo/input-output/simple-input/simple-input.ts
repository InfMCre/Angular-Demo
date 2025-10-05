import { Component, input } from '@angular/core';

@Component({
  selector: 'app-simple-input',
  imports: [],
  templateUrl: './simple-input.html',
  styleUrl: './simple-input.css'
})
export class SimpleInput {

  name = input<string>()
}
