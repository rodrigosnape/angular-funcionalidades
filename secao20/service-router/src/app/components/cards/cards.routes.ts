import { Routes } from "@angular/router";
import { CardsComponent } from "./cards.component";
import { DebitComponent } from "./components/debit/debit.component";
import { CreditComponent } from "./components/credit/credit.component";

export const CardsRoutes: Routes = [
    { 
        path: '', 
        component: CardsComponent,
        children: [
            { path: '', redirectTo: 'debit', pathMatch: 'full'},
            { path: 'debit', component: DebitComponent},
            { path: 'credit', component: CreditComponent},
        ]
    },
];