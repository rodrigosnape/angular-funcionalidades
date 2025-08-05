import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ObservableSimplesComponent } from './components/observable-simples/observable-simples.component';
import { SubjectComponent } from "./components/observable-simples/subject/subject.component";
import { PromisesComponent } from "./components/promises/promises.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ObservableSimplesComponent, SubjectComponent, PromisesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
