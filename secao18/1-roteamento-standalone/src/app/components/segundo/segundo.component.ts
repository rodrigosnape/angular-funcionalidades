import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo',
  standalone: true,
  imports: [],
  templateUrl: './segundo.component.html',
  styleUrl: './segundo.component.scss'
})
export class SegundoComponent implements OnInit{
  ngOnInit() {
    console.log('SegundoComponent');
  }
}
