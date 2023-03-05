import { Component, OnInit, ViewChild } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Hit } from '../../models/post.model';
import { PostResultsSearch } from '../../models/post-results.model';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-post-lists',
  templateUrl: './post-lists.component.html',
  styleUrls: ['./post-lists.component.css']
})
export class PostListsComponent implements OnInit {

  posts: Hit[] = [];
  isLoading: boolean = false;

  constructor(
    private postService: PostService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {

    this.loadPosts(20);

  }

  loadPosts( perPage: number = 10) {
    this.isLoading = true;
    this.postService.getPosts(perPage).subscribe(
      {

        next: ( (res: PostResultsSearch) => {
          this.posts = [...this.posts, ...res.hits];
          console.log(this.posts);
        }),
        error: (error: string) => {
          this.showErrorSnackBar(error);
        },
        complete: () => {
          this.isLoading = false;
        }

      })

  }


  showErrorSnackBar(msg: string) {
    this.snackBar.open(msg, 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  onScroll() {
    if( !this.isLoading ) {
      this.loadPosts();
    }
  }

}
