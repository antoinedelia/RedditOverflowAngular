import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  host: {'[id]': "'content'"},
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
