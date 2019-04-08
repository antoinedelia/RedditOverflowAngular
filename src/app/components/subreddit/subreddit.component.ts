import { Component, OnInit } from '@angular/core';
import { SubredditService } from 'src/app/services/subreddit.service';

@Component({
  selector: 'app-subreddit',
  templateUrl: './subreddit.component.html',
  styleUrls: ['./subreddit.component.scss']
})
export class SubredditComponent implements OnInit {

  // TODO get param from url to detect which subreddit it is
  subreddit: string;

  constructor(private subredditService: SubredditService) { }

  ngOnInit() {
    this.subredditService.getSubredditPosts(this.subreddit).subscribe(result => {
      console.log(result[0].title);
      console.log(result);
      console.log(this.subredditService.nextPage);
    });
  }

}
