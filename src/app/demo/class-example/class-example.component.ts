import { Component } from '@angular/core';

@Component({
  selector: 'app-class-example',
  imports: [],
  templateUrl: './class-example.component.html',
  styleUrl: './class-example.component.css'
})
export class ClassExampleComponent {

  newPerson: IPerson = {
    name: "Pertsona berria",
    age: 20
  }
  
  people: IPerson[] = [
    {
      name: "Ikasle 1",
      age: 16
    },{
      name: "Ikasle 2",
      age: 18
    },{
      name: "Ikasle 3",
      age: 20
    },{
      name: "Ikasle 4",
      age: 21
    },{
      name: "Ikasle 5",
      age: 22
    },
  ]
}
