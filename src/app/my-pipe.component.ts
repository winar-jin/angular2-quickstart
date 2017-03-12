import { Component } from '@angular/core';
import { Pipe,PipeTransform } from '@angular/core';
@Component({
    selector: 'my-pipe',
    template: `
        <h1>Pipe</h1>
        <h2>{{name | uppercase}}</h2>
        <h2>{{name | lowercase}}</h2>
        <h2>{{price | currency:'USD':false}}</h2>
        <h2>{{price | currency:'USD':true}}</h2>
    `
})
export class MyPipeComponent{
    private name:string;
    private birthday:Date;
    private price:number;
    constructor(){
        this.name = 'Mickeal Jordan';
        this.birthday = new Date(1994,09,2,11,11,11);
        this.price = 500;
    }
}