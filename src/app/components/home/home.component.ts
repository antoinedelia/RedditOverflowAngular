import { Component, OnInit } from '@angular/core';
import { SubredditService } from 'src/app/services/subreddit.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-home',
  host: {'[id]': "'content'"},
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: Post[];

  constructor(private subredditService: SubredditService) { }

  ngOnInit() {
    this.subredditService.getFrontPage().subscribe(result => {
      this.posts = result;
    });
  }

}
