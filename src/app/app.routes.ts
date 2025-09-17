import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { IfPageComponent } from './pages/if-page/if-page.component';
import { ForPageComponent } from './pages/for-page/for-page.component';
import { ClassPageComponent } from './pages/class-page/class-page.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'if-adibidea', component: IfPageComponent },
    { path: 'for-adibidea', component: ForPageComponent },
    { path: 'class-adibidea', component: ClassPageComponent }
];
