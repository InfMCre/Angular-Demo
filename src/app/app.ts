import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IfsComponent } from './demo/ifs/ifs.component';
import { ForComponent } from './demo/for/for.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IfsComponent, ForComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demo-project');
}
