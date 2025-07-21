import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.services';
import { GenresService } from './services/genres.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  usersList: any = [];
  genresList: any = [];

  constructor(
    private readonly _usersService: UsersService,
    private readonly _genresService: GenresService
  ){}

  ngOnInit() {
    this.getUsers();
    this.getGenres();
  }
  private getUsers() {
    this._usersService.getUsers().subscribe((usersListResponse) => {
      this.usersList = usersListResponse;
      console.log(this.usersList);
    });
  }

  private getGenres() {
    this._genresService.getGenres().subscribe((genresListResponse) => {
      this.genresList = genresListResponse;
      console.log(this.genresList);
    });
  }
}
