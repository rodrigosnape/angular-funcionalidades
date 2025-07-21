import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GenresListResponse } from '../../types/genres-list-response';
import { StatesListResponse } from '../../types/states-list-response';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnInit, OnChanges{
  @Input() genresList: GenresListResponse = [];
  @Input() statesList: StatesListResponse = [];
  @Input() userSelected: IUser = {} as IUser;

  ngOnInit() {
/*     console.log('ngOnInit');
    console.log(this.genresList);
    console.log(this.statesList);
    console.log(this.userSelected); */
  }

  ngOnChanges(changes: SimpleChanges) {
     console.log('ngOnChanges');
     console.log('changes', changes);
/*     console.log(this.genresList);
    console.log(this.statesList);
    console.log(this.userSelected); */
  }
}
