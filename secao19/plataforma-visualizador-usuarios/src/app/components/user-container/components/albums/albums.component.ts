import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsListServices } from '../../../../services/albums-list.service';
import { Observable, of } from 'rxjs';
import { AlbumsListResponse } from '../../../../types/albums-list-response';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.scss'
})
export class AlbumsComponent implements OnInit{

  albumsList$: Observable<AlbumsListResponse> = of([]);

  private readonly _albumsListService = inject(AlbumsListServices);
  private readonly _activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this._activatedRoute.parent?.params.subscribe(
      (params) => this.albumsList$ = this._albumsListService.getUserAlbums(params['userId']),
    );
  }
}
