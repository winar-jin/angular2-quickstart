import { Component } from '@angular/core';

@Component({
    selector: 'my-directives',
    template: `
        <p *ngIf="showMessage">I am in directives Component, and i am showing!</p>
        <p *ngIf="!showMessage">I am in directives Component, but i am not showing!</p>
        <p *ngIf="showfun()">I am in directives Component, and can capture the function return value!</p>
        <p *ngIf="!showfun()">I am in directives Component, but i can't capture the function return value!</p>
        <hr>
        <span [ngSwitch]="name">
            <span *ngSwitchCase="'Mike'">Mike</span>
            <span *ngSwitchCase="'Jemmy'">Jemmy</span>
            <span *ngSwitchCase="'John'">John</span>
            <span *ngSwitchDefault>Name not define</span>
        </span>
        <hr>
        <ul>
            <li *ngFor="let color of colors">{{color}}</li>
        </ul>
    `
})

export class MyDirectivesComponent {
    private showMessage:boolean;
    private name:string;
    private colors:string[];
    constructor(){
        this.showMessage = false;
        this.name = 'Jin';
        this.colors = ['red','blue','green'];
    }
    showfun(){
        return false;
    }
}