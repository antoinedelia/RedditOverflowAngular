export class Comment {
    id: string;
    title: string;
    body: string;
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
