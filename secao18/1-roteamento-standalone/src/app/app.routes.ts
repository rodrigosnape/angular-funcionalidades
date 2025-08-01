import { Routes } from '@angular/router';
import { PrimeiroComponent } from './components/primeiro/primeiro.component';
import { SegundoComponent } from './components/segundo/segundo.component';
import { BaseComponent } from './components/base/base.component';
import { InicialComponent } from './components/inicial/inicial.component';
import { PaginaNaoEncontradaComponent } from './components/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { FilhoAComponent } from './components/primeiro/components/filho-a/filho-a.component';
import { FilhoBComponent } from './components/primeiro/components/filho-b/filho-b.component';

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
/*     { path: '',
        title: 'Inicial',
        component: InicialComponent        
    }, */
    {
        path: '',
        redirectTo: 'componentes',
        /* redirectTo: '/componentes', funciona tb*/
        pathMatch: 'full' //QUANDO O PATH FOR VAZIO
    },
    { path: 'componentes', 
        title: 'Componentes',
        loadComponent: () => import('./components/base/base.component').then(m => m.BaseComponent)},
    { path: 'componentes/primeiro', 
        title: 'Primeiro',
        loadChildren: () => import('./components/primeiro/primeiro.routes').then(m => m.PrimeiroRoutes),
    },
    { path: 'componentes/segundo', 
        title: 'Segundo',
        loadComponent: () => import('./components/segundo/segundo.component').then(m => m.SegundoComponent)},
    { path: '**', //Tem que estar no final
        title: 'Página não encontrada',
         component: PaginaNaoEncontradaComponent        
    }
];
