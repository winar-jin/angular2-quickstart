import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Post } from './post';
// import 'rxjs/Rx';
// import 'rxjs/add/opeartor/map'
@Injectable()
export class MyPostService{
    private posts:any[];
    private url:string = 'http://jsonplaceholder.typicode.com/posts/';
    constructor(
        private _http:Http
    ){
        // this.post = [{
        //     title: 'post1',
        //     content: 'This is post1 content'
        // },
        // {
        //     title: 'post2',
        //     content: 'This is post2 content'
        // },
        // {
        //     title: 'post3',
        //     content: 'This is post3 content'
        // },
        // {
        //     title: 'post4',
        //     content: 'This is post4 content'
        // }];
        
    }
    
    // public get postInfo() : object[] {
    //     return this.post;
    // }
    
   
   postInfo(){
    //    console.log("sf");
    //    return this._http.get(this.url)
    //         .map(res => res.json);
   }
   
    
    
    public set newPost(newpost : any) {
        // this.post.push(newpost);
        console.log("Invoke from setter");
    }
    addPost(newpost:any){
        // this.post.push(newpost);
    }
    
}