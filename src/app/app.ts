import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IfsComponent } from './demo/ifs/ifs.component';
import { ForComponent } from './demo/for/for.component';
import { ClassExampleComponent } from './demo/class-example/class-example.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    IfsComponent, 
    ForComponent, 
    ClassExampleComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demo-project');
}
