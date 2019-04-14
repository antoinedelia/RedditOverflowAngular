import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/subreddit/post/post.component';
import { SubredditComponent } from './components/subreddit/subreddit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'post', component: PostComponent },
  { path: 'r/:subreddit', component: SubredditComponent },
  { path: 'r/:subreddit/comments/:id/:name', component: PostComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
