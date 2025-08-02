import { AsyncPipe } from '@angular/common';
import { IPost } from './../../services/posts.service';
import { Component, inject, Input, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Observable, of } from 'rxjs';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit {

  private readonly _postsService = inject(PostsService);

  private _userId: string = ''; 

  /* @Input() userId: string = ''; */
  @Input() set userId(value:string) {
    console.log(value);

    this._userId = value;

    this.postsList$ = this._postsService.getUserPosts(value);
  }

  postsList$: Observable<IPost[]> = of([]);

  ngOnInit() {
    console.log('ngOnInit',this.userId);
    /* this.postsList$ = this._postsService.getUserPosts(this.userId); */
  }

  getUserId() {
    console.log(this._userId);
  }
}