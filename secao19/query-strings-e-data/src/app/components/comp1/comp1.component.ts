import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.scss'
})
export class Comp1Component implements OnInit{
  ngOnInit() {
    console.log('ngOnInit Comp1Component');
  }
}
