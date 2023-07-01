import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http';;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatgoryListComponent } from './categories/catgory-list/catgory-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CatgoryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
