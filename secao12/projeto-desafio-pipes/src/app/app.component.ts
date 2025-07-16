import { Component, OnInit } from '@angular/core';
import { OperationsService } from './services/operations.service';
import { OperationsListResponse } from './types/operations-list-response.type';
import { take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  searchTerm: string = '';
  operationsList: OperationsListResponse = [];

  constructor(
    private readonly _operationsService: OperationsService
  ) {}

  ngOnInit() {
    this.getOperations();
  }

  getOperations() {
    this._operationsService.getOperations()
      .pipe(take(1))
      .subscribe((operationsListResponse) => {
        this.operationsList = operationsListResponse;
      });
  }
}
