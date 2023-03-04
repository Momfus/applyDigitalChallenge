import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../../services/post-service.service';

@Component({
  selector: 'app-post-lists',
  templateUrl: './post-lists.component.html',
  styleUrls: ['./post-lists.component.css']
})
export class PostListsComponent implements OnInit {

  constructor(
    private postService: PostServiceService
  ) {}

  ngOnInit(): void {


    this.postService.getPosts().subscribe( x => {

      console.log(x)

    })


  }

}
