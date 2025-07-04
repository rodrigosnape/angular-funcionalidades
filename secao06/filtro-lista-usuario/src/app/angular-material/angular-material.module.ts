import { NgModule } from "@angular/core";

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatDividerModule,
        MatFormFieldModule, 
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        MatTableModule
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatDividerModule,
        MatFormFieldModule, 
        MatInputModule,
        MatFormFieldModule, 
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        MatTableModule
    ],
})
export class AngularMaterialModule{

}