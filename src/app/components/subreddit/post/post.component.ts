import { Component, OnInit } from '@angular/core';
import { SubredditService } from 'src/app/services/subreddit.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post',
  host: {'[id]': "'content'"},
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  subreddit: string;
  postId: string;
  post: Post;
  isLoaded = false;

  constructor(private subredditService: SubredditService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.subreddit = params['subreddit'];
      this.postId = params['id'];
      this.subredditService.getPostComments(this.postId).subscribe(result => {
        this.post = result;
        this.isLoaded = true;
      });
    });
  }

}
