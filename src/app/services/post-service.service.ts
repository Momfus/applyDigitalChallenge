import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hit } from '../models/post.model';
import { map, Observable } from 'rxjs';
import { PostResultsSearch } from '../models/post-results.model';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  // More info about the API: https://hn.algolia.com/api
  private baseUrl: string = 'https://hn.algolia.com/api/v1/' // Default: by revelance, then points, then number of comments.

  private perPage: number = 6;
  private page: number = 0;

  private query: string = '';
  private searchtype: string = 'search'

  private postHits: Hit[] = [];

  constructor(
    private http: HttpClient
  ) {}

  public getPosts(): Observable<PostResultsSearch> {

    const url = `${this.baseUrl}/${this.searchtype}?query=&page${this.page}&hitsPerPage=${this.perPage}`;

    return this.http.get<PostResultsSearch>(url).pipe(
      map( res => {

        return res;

      })
    )

  }

  public getFavs(): Hit[] {

    // TODO: implement with local storage
    return [];

  }

  public setQuerySearch(query: string): void {
    this.query = query;

  }

}
