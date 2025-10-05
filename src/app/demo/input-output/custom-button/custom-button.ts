import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  imports: [],
  templateUrl: './custom-button.html',
  styleUrl: './custom-button.css'
})
export class CustomButton {

  label = input<string>()

  //
  onClick = output<void>();


  onButtonClick() {
    console.log("onClick...");
    this.onClick.emit();
  }

}
