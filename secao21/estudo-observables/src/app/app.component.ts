import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ObservableSimplesComponent } from './components/observable-simples/observable-simples.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ObservableSimplesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
