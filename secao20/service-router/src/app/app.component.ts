import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly _router = inject(Router);

  navigateToCards() {
    this._router.navigate(['cards']);
  }
  navigateToInformations() {
    this._router.navigate(['informations'],{
      queryParams: {
        nome: 'Rodrigo',
        idade: 44,
      }
    });
  }
  navigateToContacts() {
    this._router.navigate(['contacts']);
  }
  navigateToInitial() {
    this._router.navigate(['initial'], {
      queryParams: {
        isActive: true,
        isAdmin: false,
      }
    });
  }
}
