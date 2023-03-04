import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListsComponent } from './pages/post-lists/post-lists.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/post-list', pathMatch: 'full' },
  { path: 'post-list', component: PostListsComponent },
  {
    path: 'not-found',
    component: NotFoundComponent,
    data: { message: 'Page not found' },
  },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
