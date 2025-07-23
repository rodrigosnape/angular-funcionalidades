import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-validador-assincrono',
  templateUrl: './validador-assincrono.component.html',
  styleUrl: './validador-assincrono.component.scss'
})
export class ValidadorAssincronoComponent {
  nome = new FormControl('');
}
