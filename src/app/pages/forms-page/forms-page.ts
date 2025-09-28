import { Component } from '@angular/core';
import { SimpleForm } from '../../demo/forms/simple-form/simple-form';
import { ObjectForm } from '../../demo/forms/object-form/object-form';

@Component({
  selector: 'app-forms-page',
  imports: [SimpleForm, ObjectForm],
  templateUrl: './forms-page.html',
  styleUrl: './forms-page.css'
})
export class FormsPage {

}
