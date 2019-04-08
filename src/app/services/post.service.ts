import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  apiUrl = 'https://www.reddit.com/';
  sort: string; // Might be top, new, controversial...

  constructor(private http: HttpClient) { }

  getCommentsFromPost(postId: string): Observable<Comment[]> {
    return this.http.get<any>(this.apiUrl + postId + ".json").pipe(
      tap(o => {
        
      }),
      map(o => {
        const comments = o[1].data.children.map(c => c.data) as Comment[];
        return comments;
      })
    );
  }

}
