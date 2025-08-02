import { Routes } from '@angular/router';
import { InitialComponent } from './components/initial/initial.component';
import { GeneralComponent } from './components/general/general.component';
import { BasicComponent } from './components/general/components/basic/basic.component';
import { AddressComponent } from './components/general/components/address/address.component';
import { ContactComponent } from './components/general/components/contact/contact.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { CreditComponent } from './components/transactions/components/credit/credit.component';
import { DebitComponent } from './components/transactions/components/debit/debit.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Início',
        component: InitialComponent,
    },
    {
        path: 'general',
        title: 'Geral',
        loadChildren: () => import('./components/general/general.routes').then(m => m.GeneralRoutes),
    },
    {
        path: 'transactions',
        title: 'Transações',
        component: TransactionsComponent,
        children:[
            {
                path: '',
                redirectTo: 'credit',
                pathMatch: 'full'
            },
            {
                path: 'credit',
                title: 'Crédito',
                component: CreditComponent,
            },
            {
                path: 'debit',
                title: 'Débito',
                component: DebitComponent,
            }
        ]
    },
    {
        path: '**',
        title: 'Página não encontrada',
        component: NotFoundComponent,
    }
];
