import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  imports: [],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {

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
