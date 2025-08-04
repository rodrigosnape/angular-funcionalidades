/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserCardsListService } from './user-cards-list.service';

describe('Service: UserCardsList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserCardsListService]
    });
  });

  it('should ...', inject([UserCardsListService], (service: UserCardsListService) => {
    expect(service).toBeTruthy();
  }));
});
