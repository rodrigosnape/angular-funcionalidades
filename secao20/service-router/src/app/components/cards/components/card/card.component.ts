import { Component, inject, Input } from '@angular/core';
import { ICard, UserCardsListService } from '../../../../services/user-cards-list.service';
import { Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  userCard$: Observable<ICard | undefined> = of({} as ICard)

  @Input() set cardId(value: string) {
    this.userCard$ = this._userCardsListService.getUserCardById(+value);
  }

  private readonly _userCardsListService = inject(UserCardsListService);

}
