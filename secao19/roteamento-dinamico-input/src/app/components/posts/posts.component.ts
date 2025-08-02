import { AsyncPipe } from '@angular/common';
import { IPost } from './../../services/posts.service';
import { Component, inject, Input, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Observable, of } from 'rxjs';

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

  private readonly _postsService = inject(PostsService);

  @Input() userId: string = '';

  postsList$: Observable<IPost[]> = of([]);

  ngOnInit() {
    console.log(this.userId);
    this.postsList$ = this._postsService.getUserPosts(this.userId);
  }
}