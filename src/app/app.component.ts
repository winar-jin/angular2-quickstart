import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1><my-component></my-component>`
})
export class AppComponent  { name = 'Angular'; }
