import { Component, output } from '@angular/core';

@Component({
  selector: 'app-simple-output',
  imports: [],
  templateUrl: './simple-output.html',
  styleUrl: './simple-output.css'
})
export class SimpleOutput {

  divClicked = output<void>();


  onDivClick() {
    console.log("onDivClick...");
    this.divClicked.emit();
  }
}
