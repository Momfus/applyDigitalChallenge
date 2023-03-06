import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleAllFavsComponent } from './toggle-all-favs.component';

describe('ToggleAllFavsComponent', () => {
  let component: ToggleAllFavsComponent;
  let fixture: ComponentFixture<ToggleAllFavsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleAllFavsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleAllFavsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
