import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardsList, ICard, UserCardsListService } from '../../../../services/user-cards-list.service';
import { Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-debit',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './debit.component.html',
  styleUrl: './debit.component.scss'
})
export class DebitComponent {

  userDebitCardsList$: Observable<CardsList> = of([]);

  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _router = inject(Router);
  private readonly _userCardsListService = inject(UserCardsListService);

  ngOnInit(){
    this.userDebitCardsList$ = this._userCardsListService.getUserCardsByType('debito');
  }

  navigateToCard(card: ICard) {
    this._router.navigate(['../',card.id], {relativeTo: this._activatedRoute});
  }

  redirectToCredit() {
    //Absoluto
    /* this._router.navigate(['cards', 'credit']); */
    
    //Relativo
    this._router.navigate(['../credit'], {relativeTo: this._activatedRoute});
  }
}
