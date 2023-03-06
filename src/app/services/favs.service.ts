import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavsService {

  private _postFavsList: Post[] = []

  postFavoritesList$: Subject<Post[]> = new Subject<Post[]>();

  constructor() {
    this._postFavsList = this.getFavs();
    this.postFavoritesList$.next(this._postFavsList);
  }

  public getFavs(): Post[] {

    const favsJson = localStorage.getItem('postFavsList');

    if (favsJson) {
      return JSON.parse(favsJson);
    } else {
      return [];
    }

  }

  addPostToFavs(post: Post) {

    // Just in case the post was already added
    const isPostExists = this._postFavsList.findIndex(p => p.objectID === post.objectID);
    if (isPostExists !== -1) {
      return
    }

    this._postFavsList.push(post);
    localStorage.setItem('postFavsList', JSON.stringify(this._postFavsList));

    this.postFavoritesList$.next(this._postFavsList);

  }

  removePostFromFavs( objectID: string ) {

    const postIndex = this._postFavsList.findIndex(p => p.objectID === objectID);
    if( postIndex !== -1 ) {

      this._postFavsList.splice(postIndex, 1);
      localStorage.setItem('postFavsList', JSON.stringify(this._postFavsList));

      this.postFavoritesList$.next(this._postFavsList);

    }

  }

}
