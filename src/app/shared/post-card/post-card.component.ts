import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  @Input() post!: Post;
  @Output() postLikedChange = new EventEmitter();

  timeLapseText: string = ''

  ngOnInit() {

    this.timeLapseText = (this.post?.created_at) ? this.getElapseTime( this.post.created_at): 'There isn\'t information when was created';

  }

  getElapseTime( created_at: string ): string {

    // Just in case, if the author exists (double check)
    const author = (this.post?.author) ? `by ${this.post.author}`: '';

    // Time calculation
    const dateNow = new Date();
    const dateCreation = new Date(created_at);

    const diffDate = Math.abs(dateNow.getTime() - dateCreation.getTime() );
    const diffDays = Math.floor(diffDate / (1000 * 3600 * 24));
    const diffHours = Math.floor((diffDate / (1000 * 3600)) % 24);
    const diffMinutes = Math.floor((diffDate / (1000 * 60)) % 60);


    // Message creation
    if (diffDays > 365) {
      return `More than ${Math.floor(diffDays / 365)} year(s) ago ${author}`;
    } else if (diffDays > 30) {
      return `More than ${Math.floor(diffDays / 30)} month(s) ago ${author}`;
    } else if (diffDays > 0) {
      return `${diffDays} day(s) ago ${author}`;
    } else if (diffHours > 0) {
      return `${diffHours} hour(s) ago ${author}`;
    } else if (diffMinutes > 30) {
      return `${diffMinutes} minute(s) ago ${author}`;
    } else {
      return `Recently ${author}`;
    }

  }

  onFavsChange(event: Event) {

    event.stopPropagation();

    if( this.post ) {

      this.post.liked = !this.post.liked;
      this.postLikedChange.emit();
    }

  }

  onOpenStoryLink() {

    if (this.post.story_url) {
      window.open(this.post.story_url, '_blank');
    }

  }

}
