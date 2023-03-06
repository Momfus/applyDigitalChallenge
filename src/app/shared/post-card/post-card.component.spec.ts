import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { PostCardComponent } from './post-card.component';
import { Post } from '../../models/post.model';

describe('PostCardComponent', () => {
  let component: PostCardComponent;
  let fixture: ComponentFixture<PostCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostCardComponent],
      imports: [MatIconModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PostCardComponent);
    component = fixture.componentInstance;

    const post: Post = {
      objectID: '123',
      title: 'Test Post',
      author: 'John Doe',
      created_at: '2022-03-06T12:00:00.000Z',
      story_title: 'Test Story Title',
      story_url: 'http://test.com',
      url: '',
      points: 10,
      num_comments: 5,
      parent_id: null,
      story_id: null,
      comment_text: null,
      story_text: null,
      created_at_i: '',
      _tags: ['story'],
      _highlightResult: {
        title: {
          value: 'exampleValue',
          matchLevel: 'complete',
          matchedWords: ['example', 'value']
        },
        url: {
          value: 'exampleUrl',
          matchLevel: 'complete',
          matchedWords: ['example', 'url']
        },
        author: {
          value: 'exampleAuthor',
          matchLevel: 'complete',
          matchedWords: ['example', 'author']
        }
      },
      relevancy_score: 0,
      liked: false,
    };

    component.post = post;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
