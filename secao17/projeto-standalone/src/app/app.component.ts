import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Comp1Component } from './components/comp1/comp1.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AngularMaterialModule } from './angular-material/angular-material.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    Comp1Component,
    FormsModule, 
/*     MatFormFieldModule, 
    MatInputModule, */
    AngularMaterialModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  nomeControl = new FormControl('Rodrigo', Validators.required);
}
