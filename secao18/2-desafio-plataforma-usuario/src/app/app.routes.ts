import { Routes } from '@angular/router';
import { InitialComponent } from './components/initial/initial.component';
import { GeneralComponent } from './components/general/general.component';
import { BasicComponent } from './components/general/components/basic/basic.component';
import { AddressComponent } from './components/general/components/address/address.component';
import { ContactComponent } from './components/general/components/contact/contact.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { CreditComponent } from './components/transactions/components/credit/credit.component';
import { DebitComponent } from './components/transactions/components/debit/debit.component';

export const routes: Routes = [
    {
        path: '',
        component: InitialComponent,
    },
    {
        path: 'general',
        component: GeneralComponent,
        children: [
            {
                path: '',
                redirectTo:'basic',
                pathMatch: 'full',
            },
            {
                path: 'basic',
                component: BasicComponent
            },
            {
                path: 'contact',
                component: ContactComponent,
            },
            {
                path: 'address',
                component: AddressComponent,
            }
        ],
    },
    {
        path: 'transactions',
        component: TransactionsComponent,
        children:[
            {
                path: '',
                redirectTo: 'credit',
                pathMatch: 'full'
            },
            {
                path: 'credit',
                component: CreditComponent,
            },
            {
                path: 'debit',
                component: DebitComponent,
            }
        ]
    }
];
