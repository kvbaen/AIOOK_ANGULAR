import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomAddDialogComponent } from './room-add-dialog.component';

describe('RoomAddDialogComponent', () => {
  let component: RoomAddDialogComponent;
  let fixture: ComponentFixture<RoomAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomAddDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
