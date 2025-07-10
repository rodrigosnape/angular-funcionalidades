import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.scss']
})
export class ClientCardComponent implements OnInit {
  headerColor:string = 'blue';

  ngOnInit() {
    setTimeout(() => {
      this.headerColor = 'red';
    }, 3000)
  }
}
