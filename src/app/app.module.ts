import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MyPipeComponent } from './my-pipe.component';
import { MyPostComponent } from './my-post.coponent';

import { AppComponent }  from './app.component';
import { MyComponent } from './my-component.component';
import { MyFormComponent } from './my-form.component';
import { MyDirectivesComponent } from './my-directives.component';

@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent,MyComponent,MyFormComponent,MyDirectivesComponent,MyPipeComponent,MyPostComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
