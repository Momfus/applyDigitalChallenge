import { Component, OnInit, ViewChild } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Hit } from '../../models/post.model';
import { PostResultsSearch } from '../../models/post-results.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TechTypeOption, SearchType } from '../../models/tech-type-option.model';

@Component({
  selector: 'app-post-lists',
  templateUrl: './post-lists.component.html',
  styleUrls: ['./post-lists.component.css']
})
export class PostListsComponent implements OnInit {

  posts: Hit[] = [];
  isLoadingScrolling: boolean = false; // Extra helper for the infinite scroller trigger event


  technologyTypes: TechTypeOption[] = [
    {value: '', viewValue: 'Any', icon: ''},
    {value: 'angular', viewValue: 'Angular', icon: 'assets/logos/angular-logo.png'},
    {value: 'reactjs', viewValue: 'ReactJs', icon: 'assets/logos/react-logo.png'},
    {value: 'vuejs', viewValue: 'VueJs', icon: 'assets/logos/vue-logo.png'}
  ]

  selectedTechType: TechTypeOption = this.technologyTypes[0];

  searchType: SearchType['postFavs'] = 'all';

  constructor(
    private postService: PostService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {

    const savedSelectedType = this.postService.loadFilterTechnologySearch(this.selectedTechType);
    const techType = this.technologyTypes.find(type => type.value === savedSelectedType.value);
    this.selectedTechType = techType || this.selectedTechType;

    this.loadPostsFromApi(true, 20);

  }

  ngAfterViewInit( ) {

  }

  loadPostsFromApi( isNewData: boolean = true, perPage: number = 10, technologyFilter: string='') {

    if( !isNewData && this.postService.postsListLength > 0 ) {

      this.posts = this.postService.postsList;

    } else {

      this.isLoadingScrolling = true;
      this.postService.getPosts(perPage,technologyFilter).subscribe(
        {

          next: ( (res: Hit[]) => {
            this.posts = res;
          }),
          error: (error: string) => {
            this.showErrorSnackBar(error);
          },
          complete: () => {
            this.isLoadingScrolling = false;
          }

        })

    }

  }

  loadPostsFromLocalStorage(perPage: number = 10) {

    // TODO: load from local storageservice

  }


  showErrorSnackBar(msg: string) {
    this.snackBar.open(msg, 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  onScroll() {
    if( !this.isLoadingScrolling ) {
      this.loadPostsFromApi(true);
    }
  }

  onFilterTechnologyChange() {

    this.postService.saveFilterTechnologySearch(this.selectedTechType);

    this.posts = [];
    this.postService.resetSerch();
    this.loadPostsFromApi(true, 20, this.selectedTechType.value);

  }

  onToggleSearchType(value: SearchType['postFavs']) {

    console.log(value);
    if( value === 'all') {
      this.loadPostsFromApi(false);

    } else {

      this.loadPostsFromLocalStorage();

    }

  }

}
