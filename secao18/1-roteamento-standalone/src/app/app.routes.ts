import { Routes } from '@angular/router';
import { PrimeiroComponent } from './components/primeiro/primeiro.component';
import { SegundoComponent } from './components/segundo/segundo.component';
import { BaseComponent } from './components/base/base.component';

/* export const routes: Routes = [
    { path: 'primeiro', component: PrimeiroComponent},
    { path: 'segundo', component: SegundoComponent},
]; */
export const routes: Routes = [
    { path: 'componentes', component: BaseComponent},
    { path: 'componentes/primeiro', component: PrimeiroComponent},
    { path: 'componentes/segundo', component: SegundoComponent},
];
