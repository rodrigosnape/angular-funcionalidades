import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UsersListResponse } from '../../types/users-list.response';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent implements OnInit, OnChanges {

  @Input({ required: true }) usersList: UsersListResponse = [];

  ngOnInit() {
    console.log('ngOnInit', this.usersList);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', this.usersList);
    console.log('ngOnChanges', changes);
  }

}
