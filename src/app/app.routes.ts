import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { IfPageComponent } from './pages/if-page/if-page.component';
import { ForPageComponent } from './pages/for-page/for-page.component';
import { ClassPageComponent } from './pages/class-page/class-page.component';
import { Ariketa2PageComponent } from './pages/ariketa2-page/ariketa2-page.component';
import { FormsPage } from './pages/forms-page/forms-page';
import { InputOutputPage } from './pages/input-output-page/input-output-page';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'if-adibidea', component: IfPageComponent },
    { path: 'for-adibidea', component: ForPageComponent },
    { path: 'class-adibidea', component: ClassPageComponent },
    { path: 'ariketak/ariketa2', component: Ariketa2PageComponent },
    { path: 'forms', component: FormsPage },
    { path: 'component', component: InputOutputPage },
];
