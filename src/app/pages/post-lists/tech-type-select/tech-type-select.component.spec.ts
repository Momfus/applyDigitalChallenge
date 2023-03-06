import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechTypeSelectComponent } from './tech-type-select.component';

describe('TechTypeSelectComponent', () => {
  let component: TechTypeSelectComponent;
  let fixture: ComponentFixture<TechTypeSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechTypeSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechTypeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
