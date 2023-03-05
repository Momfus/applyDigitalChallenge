import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Hit } from '../models/post.model';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { PostResultsSearch } from '../models/post-results.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  // More info about the API: https://hn.algolia.com/api
  private baseUrl: string = 'https://hn.algolia.com/api/v1/' // Default: by revelance, then points, then number of comments.

  private page: number = 0;

  private searchtype: string = 'search'

  constructor(
    private http: HttpClient
  ) {}

  public getPosts(perPage: number): Observable<PostResultsSearch> {

    const url = `${this.baseUrl}/${this.searchtype}?query=&page=${this.page}&hitsPerPage=${perPage}`;

    return this.http.get<PostResultsSearch>(url).pipe(
      map( res => {

        this.page++;
        return res;

      }),
      catchError( (error: HttpErrorResponse) => {
        console.error(error);
        return throwError(() => new Error('Error getting data'));
      })
    )

  }

  public getFavs(): Hit[] {

    // TODO: implement with local storage
    return [];

  }

  public resetSerch() {
    this.page = 0;
    this.searchtype = 'search'
  }

}
