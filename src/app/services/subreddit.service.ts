import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubredditService {

  apiUrl = 'https://www.reddit.com/';
  previousPage: string; // string used to get previous page in url (?before=XXX)
  nextPage: string; // string used to get next page in url (?after=XXX)
  limit: number; // how many post we want to receive (?limit=XXX) MAX = 100
  sort: string; // might be top, new, controversial...

  constructor(private http: HttpClient) { }

  getFrontPage(): Observable<Post[]> {
    return this.http.get<any>(this.apiUrl + "hot.json").pipe(
      tap(o => {
        this.previousPage = o.data.before;
        this.nextPage = o.data.after;
      }),
      map(o => {
        const posts = o.data.children.map(c => c.data) as Post[];
        posts.forEach(element => {
          let d = new Date(0); // The 0 there is the key, which sets the date to the epoch
          d.setUTCSeconds(element.created_utc);
          element.created = d;
        });
        return posts;
      })
    );
  }

  getSubredditPosts(subreddit: string): Observable<Post[]> {
    return this.http.get<any>(this.apiUrl + "r/" + subreddit + ".json").pipe(
      tap(o => {
        this.previousPage = o.data.before;
        this.nextPage = o.data.after;
      }),
      map(o => {
        const posts = o.data.children.map(c => c.data);
        posts.forEach(element => {
          let d = new Date(0); // The 0 there is the key, which sets the date to the epoch
          d.setUTCSeconds(element.created_utc);
          element.created = d;
        });
        return posts;
      })
    );
  }

}
