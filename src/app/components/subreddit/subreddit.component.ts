import { Component, OnInit } from '@angular/core';
import { SubredditService } from 'src/app/services/subreddit.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-subreddit',
  host: {'[id]': "'content'"},
  templateUrl: '../home/home.component.html'
})
export class SubredditComponent implements OnInit {

  // TODO get param from url to detect which subreddit it is
  subreddit: string;
  posts: Post[];

  constructor(private subredditService: SubredditService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.subreddit = params['subreddit'];
      this.subredditService.getSubredditPosts(this.subreddit).subscribe(result => {
        this.posts = result;
      });
    });
  }

}
