import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListsComponent } from './post-lists.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ToggleAllFavsComponent } from '../../shared/toggle-all-favs/toggle-all-favs.component';
import { TechTypeSelectComponent } from './tech-type-select/tech-type-select.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('PostListsComponent', () => {
  let component: PostListsComponent;
  let fixture: ComponentFixture<PostListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PostListsComponent,
        ToggleAllFavsComponent,
        TechTypeSelectComponent,
      ],
      imports: [
        HttpClientModule,
        MatSnackBarModule,
        MatFormFieldModule,
        MatSelectModule,
        InfiniteScrollModule,
        FormsModule,
        BrowserAnimationsModule
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PostListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
