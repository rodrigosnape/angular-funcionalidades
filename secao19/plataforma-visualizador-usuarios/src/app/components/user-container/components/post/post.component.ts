import { Component, inject, Input } from '@angular/core';
import { IPost } from '../../../../interfaces/post.interface';
import { Observable, of } from 'rxjs';
import { PostsListService } from '../../../../services/posts-list.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    AsyncPipe,
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  post$: Observable<IPost> = of({} as IPost);

  private readonly _postsListService = inject(PostsListService);

  @Input() set postId(value: string) {
    this.post$ = this._postsListService.getPost(value);
  }
}
