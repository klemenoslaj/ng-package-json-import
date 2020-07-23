import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { numbers } from 'library';

import { AppComponent } from './app.component';

console.log(numbers)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
