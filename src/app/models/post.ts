export class Post {
    id: string;
    title: string;
    selftext: string;
    author: string;
    created: Date;
    created_utc: number;
    subreddit: string;
    score: number;
    permalink: string;
    url: string;
    num_comments: number;
    comments: Comment[];
}
