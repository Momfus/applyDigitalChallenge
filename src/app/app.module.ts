import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './shared/angular.material.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { PostListsComponent } from './pages/post-lists/post-lists.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PostCardComponent } from './shared/post-card/post-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostListsComponent,
    NotFoundComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
