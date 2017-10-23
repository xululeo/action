import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CategoryComponent } from './category.component';

@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CategoryComponent]
})
export class AppModule { }
