# DemoProject

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.2.2.


## Important Information

### Typescript Data Types
* [Basic Types](https://www.typescriptlang.org/docs/handbook/basic-types.html)
* [The Basics](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)
* [Interfaces](https://www.typescriptlang.org/docs/handbook/2/objects.html)
* [Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)

### Installed Extensions on VSCode
Later we may install more Extensions. At the moment:
* Angular Language Service (Angular)
* Markdown All in One (Extension for .md files)

### Docs

* [Angular Website](https://angular.dev/)
  * [Angular CLI Reference](https://angular.dev/cli) Angular Cli Commands
  * [Angular API Reference](https://angular.dev/api) 
  * [Angular Docs](https://angular.dev/overview)

## Examples

### Conditionals
Show or hide html content depending on variables
* [@if Docs](https://angular.dev/api/core/@if)
* Example
  * [Code](https://github.com/InfMCre/Angular-Demo/tree/master/src/app/demo/ifs): `/src/demo/ifs`
  * [Commit](https://github.com/InfMCre/Angular-Demo/commit/366351b16c7e5383fd15a43ffce404c869fd880c): `ifs`

``` html
<p>{{person.name}} || ADINA: {{person.age}}</p>
@if (person.age > 20) {
    <p>20 urte baino gehiago ditu</p>
} @else if (person.age < 20) {
    <p>20 urte baino gutxiago ditu</p>
} @else {
    <p>20 urte ditu</p>
}
```

### Loops
Show a list of elements. `Track` is mandatory (check Docs below)
* [@for Docs](https://angular.dev/api/core/@for)
* Example
  * [Code](https://github.com/InfMCre/Angular-Demo/tree/master/src/app/demo/for): `/src/demo/for`
  * [Commit](https://github.com/InfMCre/Angular-Demo/commit/bba3c2bb7ceea14cabaf843197254be7ab8b8abb): `for component`

``` html
<!-- We will try to use ID or something unique for the track value later. -->
@for (person of people; track person.name) {
    <p>{{person.name}} || ADINA: {{person.age}}</p>
}
```

### Conditional classes to HTML elements
Append class to an HTML element depending on variables. Both options can be used (Class or ngClass). We will try to use class only
#### Class
* [ngClass Docs](https://angular.dev/api/common/NgClass#usage-notes)
* Example
  * [Code](https://github.com/InfMCre/Angular-Demo/tree/master/src/app/demo/class-example): `/src/demo/class-example`
  * [Commit](https://github.com/InfMCre/Angular-Demo/commit/8d28e0445b8ab3cc0a077529be52d14bdf339425): `ngClass example`

``` html
<!-- ONLY ONE conditional class for the element (JSON object)-->

<!-- Syntax: {'class': condition}" -->
<p [class]="{'more-than-18': person.age > 18}">{{person.name}} || ADINA: {{person.age}}</p>

<!-- MORE THAN ONE conditional class for the element. Separated by "," -->

<p [class]="
  {
    'more-than-18': person.age > 18,
    'less-than-18': person.age < 18,
    'equal-than-18': person.age == 18,
  }
">{{person.name}} || ADINA: {{person.age}}</p>
```

#### ngClass
* [ngClass Docs](https://angular.dev/api/common/NgClass)

### Routes

In angular all the routes must be configured into `/src/app/app.routes.ts`
``` typescript
import { Routes } from '@angular/router';
// page import
import { HomePageComponent } from './pages/home-page/home-page.component';
// page import
import { IfPageComponent } from './pages/if-page/if-page.component';

export const routes: Routes = [
  // URL PATH: http://localhost:4200/
  { path: '', component: HomePageComponent },
  // URL PATH: http://localhost:4200/lehenengo-adibidea
  { path: 'lehenengo-adibidea', component: IfPageComponent }
];
```

This components will be loaded into `<router-outlet />`. In this case into `app.html` file.


To use Links into the app, we will use anchor with routerLink property
``` html
<a routerLink="/route-name">Link Label</a>
<!-- for "/" route (HomePageComponent) -->
<a routerLink="/">Home</a>
<!-- for "/lehenengo-adibidea" route (IfPageComponent) -->
 <a routerLink="/lehenengo-adibidea">Lehenengo adibidea</a>
```
We will need to import
``` typescript
import { 
  RouterOutlet, // if we have router outlet into html
  RouterLink 
} from '@angular/router';

// and in the component import append... EXAMPLE:
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, // if we have router outlet into html
    // NEXT LINE
    RouterLink
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
```



## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.
