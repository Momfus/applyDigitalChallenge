import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams  } from '@angular/common/http';
import { Hit } from '../models/post.model';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { PostResultsSearch } from '../models/post-results.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  // More info about the API: https://hn.algolia.com/api
  private baseUrl: string = 'https://hn.algolia.com/api/v1' // Default: by revelance, then points, then number of comments.

  private page: number = 0;

  private searchtype: string = 'search_by_date'

  constructor(
    private http: HttpClient
  ) {}

  public getPosts(perPage: number, technologyType=''): Observable<PostResultsSearch> {

    const url = `${this.baseUrl}/${this.searchtype}?query=${technologyType}&page=${this.page}&hitsPerPage=${perPage}`;

    return this.http.get<PostResultsSearch>(url).pipe(
      map( resSearch => {

        // The attributes to use for the post UI are author, story_title, story_url, created_at (the API manual don't give any information how to filter the null values)
        resSearch.hits = resSearch.hits.filter(post => post.author && post.story_title && post.story_url && post.created_at);
        resSearch.hits =  resSearch.hits.map(post => {
          const liked = localStorage.getItem(post.objectID) === 'true';
          return { ...post, liked };
        });

        this.page++;
        return resSearch;

      }),
      catchError( (error: HttpErrorResponse) => {
        console.error(error);
        return throwError(() => new Error('Error getting data'));
      })
    )

  }



  public resetSerch() {
    this.page = 0;
  }

}
