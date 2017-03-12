import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
             <my-component></my-component>
             <my-directives></my-directives>
             <my-pipe></my-pipe>
             <my-post></my-post>
             `
})
export class AppComponent  { name = 'Angular'; }
