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
  currentPage: number = 0;

  constructor(
    private postService: PostService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {

    this.loadPosts();

  }

  loadPosts() {
    this.postService.getPosts().subscribe(
      {

        next: ( (res: PostResultsSearch) => {
          this.posts = [...this.posts, ...res.hits];
          console.log(this.posts);
        }),
        error: (error: string) => {
          this.showErrorSnackBar(error);
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

  onScroll(ev: any) {
    // this.loadPosts();
    console.log('scroll')
    console.log(ev)
  }

}
