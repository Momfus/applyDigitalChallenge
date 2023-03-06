import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { TechTypeSelectComponent } from './tech-type-select.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TechTypeSelectComponent', () => {
  let component: TechTypeSelectComponent;
  let fixture: ComponentFixture<TechTypeSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechTypeSelectComponent],
      imports: [
        HttpClientModule,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TechTypeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
