import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsListResponse } from '../../../../types/posts-list-response';
import { Observable, of } from 'rxjs';
import { PostsListService } from '../../../../services/posts-list.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit {

  postsList$: Observable<PostsListResponse> = of([]);

  private readonly _postsListService = inject(PostsListService);
  private readonly _activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this._activatedRoute.parent?.params.subscribe(
      (params) => this.postsList$ = this._postsListService.getUserPosts(params['userId']),
    )
  }
}
