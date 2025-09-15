import { Component } from '@angular/core';

@Component({
  selector: 'app-ifs',
  imports: [],
  templateUrl: './ifs.component.html',
  styleUrl: './ifs.component.css'
})
export class IfsComponent {

  person: IPerson = {
    name: "Ikasle 1",
    age: 20
  }
}
