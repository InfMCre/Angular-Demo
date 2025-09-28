import { FormControl } from "@angular/forms"
export interface IPersonForm {
    name: FormControl<String|null>,
    age: FormControl<number|null>
}

// interface IPerson {
//     name: String,
//     age: number
// }
