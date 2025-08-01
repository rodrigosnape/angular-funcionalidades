import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro',
  standalone: true,
  imports: [],
  templateUrl: './primeiro.component.html',
  styleUrl: './primeiro.component.scss'
})
export class PrimeiroComponent implements OnInit{
  ngOnInit() {
    console.log('PrimeiroComponent');
  }

}
