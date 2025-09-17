import { Component } from '@angular/core';
import { ClassExampleComponent } from '../../demo/class-example/class-example.component';

@Component({
  selector: 'app-class-page',
  imports: [ClassExampleComponent],
  templateUrl: './class-page.component.html',
  styleUrl: './class-page.component.css'
})
export class ClassPageComponent {

}
