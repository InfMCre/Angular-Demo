import { FormArray, FormControl } from "@angular/forms"
export interface IPersonWithTelephone {
    name: FormControl<String|null>;
    age: FormControl<number|null>;
    telephones: FormArray<FormControl<number|null>>;
}