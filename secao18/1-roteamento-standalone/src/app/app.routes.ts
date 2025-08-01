import { Routes } from '@angular/router';
import { PrimeiroComponent } from './components/primeiro/primeiro.component';
import { SegundoComponent } from './components/segundo/segundo.component';
import { BaseComponent } from './components/base/base.component';
import { InicialComponent } from './components/inicial/inicial.component';

/* export const routes: Routes = [
    { path: 'primeiro', component: PrimeiroComponent},
    { path: 'segundo', component: SegundoComponent},
]; */
/* export const routes: Routes = [
    { path: 'componentes', component: BaseComponent},
    { path: 'componentes/primeiro', component: PrimeiroComponent},
    { path: 'componentes/segundo', component: SegundoComponent},
]; */
export const routes: Routes = [
    { path: '',
        component: InicialComponent        
    },
    { path: 'componentes', 
        loadComponent: () => import('./components/base/base.component').then(m => m.BaseComponent)},
    { path: 'componentes/primeiro', 
        loadComponent: () => import('./components/primeiro/primeiro.component').then(m => m.PrimeiroComponent)},
    { path: 'componentes/segundo', 
        loadComponent: () => import('./components/segundo/segundo.component').then(m => m.SegundoComponent)},
];
