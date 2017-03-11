import { Component } from '@angular/core';
let nextId = 1;

@Component({
    selector: 'my-component',
    template: `
        <h1>My {{title}}</h1>
        <img bind-src="imgUrl" bind-id="id">
        <hr>
        <button (click)="runclick()">Click Me</button>
        <hr>
        <input type="text" #name [(ngModel)]="note" (keyup.enter)="saySomething($event)" (blur)="outofFocus(name.value)">
        <p>{{note}}</p>
        `
})

export class MyComponent{
    private title:string;
    private imgUrl:string;
    private id:number;
    private note:string;
    constructor(){
        this.title = 'First angular2 app';
        this.imgUrl = 'http://lorempixel.com/400/200';
        this.id = ++nextId;
        this.note;
    }
    runclick(){
        console.log('I was clicked');
    }
    saySomething($event:any){
        console.log($event.target.value);
    }
    outofFocus(name:string){
        console.log('Hello , you are in ' + name);
    }
}