import { Component } from '@angular/core';
import { SimpleInput } from '../../demo/input-output/simple-input/simple-input';
import { SimpleOutput } from '../../demo/input-output/simple-output/simple-output';
import { CustomButton } from '../../demo/input-output/custom-button/custom-button';

@Component({
  selector: 'app-input-output-page',
  imports: [SimpleInput, SimpleOutput, CustomButton],
  templateUrl: './input-output-page.html',
  styleUrl: './input-output-page.css'
})
export class InputOutputPage {


  // BUTTON
  button1Text = "Button 1 Text";
  button1Click() {
    console.log("button1Click...");
    alert("Button 1 clicked");
  }

  button2Text = "Button 2 Text";
  button2Click() {
    console.log("button2Click...");
    alert("Button 2 clicked");
  }







  // simpleInput

  username: string = "Mikel";

  username2: string = "Jorge";


  // simpleOutput

  appSimpleOutputClicked() {
    console.log("appSimpleOutputClicked...");
    alert("child clicked");
  }
}
