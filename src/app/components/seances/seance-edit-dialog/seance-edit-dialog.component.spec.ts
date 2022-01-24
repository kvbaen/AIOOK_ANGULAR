import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeanceEditDialogComponent } from './seance-edit-dialog.component';

describe('SeanceEditDialogComponent', () => {
  let component: SeanceEditDialogComponent;
  let fixture: ComponentFixture<SeanceEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeanceEditDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeanceEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
