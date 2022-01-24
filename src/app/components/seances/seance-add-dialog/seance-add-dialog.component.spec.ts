import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeanceAddDialogComponent } from './seance-add-dialog.component';

describe('SeanceAddDialogComponent', () => {
  let component: SeanceAddDialogComponent;
  let fixture: ComponentFixture<SeanceAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeanceAddDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeanceAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
