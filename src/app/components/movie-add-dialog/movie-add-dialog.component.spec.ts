import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieAddDialogComponent } from './movie-add-dialog.component';

describe('MovieAddDialogComponent', () => {
  let component: MovieAddDialogComponent;
  let fixture: ComponentFixture<MovieAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieAddDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
