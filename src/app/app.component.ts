import { Component } from '@angular/core';
import { User } from './user'

@Component({
  selector: 'my-app',
  template: `<my-form></my-form>
             <h1>Hello {{name}}</h1>
             <my-component></my-component>
             <my-directives></my-directives>
             <my-pipe></my-pipe>
             
             `
})
export class AppComponent  { 
  
  name = 'Angular'; 
}
