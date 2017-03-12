import { Component } from '@angular/core';
import { MyPostService } from './post.service';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';
import { Post } from './post'; 
@Component({
    selector: 'my-post',
    providers: [MyPostService],
    template: `
        <h1>Post service</h1>
        <form (submit)="addPost()">
            <label>Title</label>
            <input type="text" placeholder="please enter the post's title" [(ngModel)]="title" name="title">
            {{title}}
            <br>
            <label>Content</label>
            <input type="text" placeholder="please enter the post's Content" [(ngModel)]="content" name="content">
            {{content}}
            <br>
            <button type="submit">Submit</button>
        </form>
        <ul *ngFor="let post of posts">
            <li>{{post.title}}</li>
            <li>{{post.content}}</li>
        </ul>
    `
})
export class MyPostComponent{
    private posts: any;
    private title:string;
    private content:string;
    private newPost:object;
    constructor(
        private _postservice : MyPostService,
        private _http : Http
    ){
        // this.posts = this._postservice.postInfo;
        this._postservice.postInfo().subscribe(
            res => {
                this.posts = res;
            }
        );
    }
    addPost(){
        this.newPost = {
            title: this.title,
            content: this.content
        }
        this._postservice.newPost = this.newPost;
        // this._postservice.addPost(this.newPost);
    }
}