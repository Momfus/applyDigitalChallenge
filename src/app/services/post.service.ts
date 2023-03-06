import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams  } from '@angular/common/http';
import { Post } from '../models/post.model';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { PostResultsSearch } from '../models/post-results.model';
import { TechTypeOption } from '../models/tech-type-option.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  // More info about the API: https://hn.algolia.com/api
  private baseUrl: string = 'https://hn.algolia.com/api/v1' // Default: by revelance, then points, then number of comments.
  private page: number = 0;
  private postsHR: Post[] = [];

  private searchtype: string = 'search_by_date'

  constructor(
    private http: HttpClient
  ) {}

  public getPosts(perPage: number, technologyType=''): Observable<Post[]> {

    const url = `${this.baseUrl}/${this.searchtype}?query=${technologyType}&page=${this.page}&hitsPerPage=${perPage}`;

    return this.http.get<PostResultsSearch>(url).pipe(
      map( resSearch => {

        // The attributes to use for the post UI are author, story_title, story_url, created_at (the API manual don't give any information how to filter the null values)
        resSearch.hits = resSearch.hits.filter(post => post.author && post.story_title && post.story_url && post.created_at);
        resSearch.hits =  resSearch.hits.map(post => {
          const liked = this.checkLikedPost(post.objectID);
          return { ...post, liked };
        });

        this.postsHR = this.postsHR.concat(resSearch.hits);

        this.page++;
        return this.postsHR;

      }),
      catchError( (error: HttpErrorResponse) => {
        console.error(error);
        return throwError(() => new Error('Error getting data'));
      })
    )

  }

  private checkLikedPost(postId: string): boolean {

    //localStorage.getItem('postFavsList')
    const postFavsList = JSON.parse(localStorage.getItem('postFavsList') || '[]');
    const postLiked = postFavsList.find((post: any) => post.objectID === postId);
    return !!postLiked;


  }

  public resetSerch() {
    this.page = 0;
    this.postsHR = [];
  }

  public get postsList(): Post[] {
    return this.postsHR;
  }

  public get postsListLength(): number {
    return this.postsHR.length;
  }

  saveFilterTechnologySearch( techType: TechTypeOption ) {

    localStorage.setItem('selectedTechType', JSON.stringify(techType));

  }

  loadFilterTechnologySearch( defaultValue: TechTypeOption): TechTypeOption {

    let techTypeJson = localStorage.getItem('selectedTechType');
    if (!techTypeJson) {
      return defaultValue;
    } else {

      try {
        return JSON.parse(techTypeJson);
      } catch(error) {
        console.error('Error parsing selectedTechType from local storage', error);
        return defaultValue
      }

    }

  }

}
