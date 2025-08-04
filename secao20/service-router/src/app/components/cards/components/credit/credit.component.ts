import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CardsList, ICard, UserCardsListService } from '../../../../services/user-cards-list.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-credit',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './credit.component.html',
  styleUrl: './credit.component.scss'
})
export class CreditComponent {
  userCreditCardsList$: Observable<CardsList> = of([]);

  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _router = inject(Router);
  private readonly _userCardsListService = inject(UserCardsListService);

  ngOnInit(){
    this.userCreditCardsList$ = this._userCardsListService.getUserCardsByType('credito');
  }

  navigateToCard(card: ICard) {
    this._router.navigate(['../',card.id], {relativeTo: this._activatedRoute});
  }

  redirectToDebit() {
    /* this._router.navigate(['cards', 'credit']); */
    this._router.navigate(['../debit'], {relativeTo: this._activatedRoute});
  }
}
