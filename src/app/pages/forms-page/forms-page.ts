import { Component } from '@angular/core';
import { SimpleForm } from '../../demo/forms/simple-form/simple-form';
import { ObjectForm } from '../../demo/forms/object-form/object-form';
import { ArrayFormSimple } from '../../demo/forms/array-form-simple/array-form-simple';

@Component({
  selector: 'app-forms-page',
  imports: [SimpleForm, ObjectForm, ArrayFormSimple],
  templateUrl: './forms-page.html',
  styleUrl: './forms-page.css'
})
export class FormsPage {

}
