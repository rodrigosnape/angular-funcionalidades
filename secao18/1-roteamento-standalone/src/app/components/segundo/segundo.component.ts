import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo',
  standalone: true,
  imports: [],
  templateUrl: './segundo.component.html',
  styleUrl: './segundo.component.scss'
})
export class SegundoComponent implements OnInit, OnDestroy{
  ngOnDestroy() {
    console.log('SegundoComponent Destroy')
  }
  ngOnInit() {
    console.log('SegundoComponent OnInit');
  }
}
