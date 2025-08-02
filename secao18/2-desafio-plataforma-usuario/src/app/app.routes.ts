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
        component: GeneralComponent,
        children: [
            {
                path: '',
                redirectTo:'basic',
                pathMatch: 'full',
            },
            {
                path: 'basic',
                title: 'Básico',
                component: BasicComponent
            },
            {
                path: 'contact',
                title: 'Contato',
                component: ContactComponent,
            },
            {
                path: 'address',
                title: 'Endereço',
                component: AddressComponent,
            }
        ],
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
