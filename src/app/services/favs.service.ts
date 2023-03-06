import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class FavsService {

  postFavsList: Post[] = []

  constructor() {
    this.postFavsList = this.getFavs();
  }

  getFavs(): Post[] {

    const favsJson = localStorage.getItem('favs');

    if (favsJson) {
      return JSON.parse(favsJson);
    } else {
      return [];
    }

  }

  addPostToFavs(post: Post) {

    // Just in case the post was already added
    const isPostExists = this.postFavsList.findIndex(p => p.objectID === post.objectID);
    if (isPostExists !== -1) {
      return
    }

    this.postFavsList.push(post);
    localStorage.setItem('postFavsList', JSON.stringify(this.postFavsList));

  }

  removePostFromFavs( objectID: string ) {

    const postIndex = this.postFavsList.findIndex(p => p.objectID === objectID);
    if( postIndex !== -1 ) {

      this.postFavsList.splice(postIndex, 1);
      localStorage.setItem('postFavsList', JSON.stringify(this.postFavsList));

    }

  }

}
