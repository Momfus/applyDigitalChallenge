import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './shared/angular.material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { PostListsComponent } from './pages/post-lists/post-lists.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PostCardComponent } from './shared/post-card/post-card.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { SpinnerInterceptor } from './interceptors/spinner.interceptor';
import { FormsModule } from '@angular/forms';
import { ToggleAllFavsComponent } from './shared/toggle-all-favs/toggle-all-favs.component';
import { TechTypeSelectComponent } from './pages/post-lists/tech-type-select/tech-type-select.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostListsComponent,
    NotFoundComponent,
    PostCardComponent,
    SpinnerComponent,
    ToggleAllFavsComponent,
    TechTypeSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    InfiniteScrollModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
