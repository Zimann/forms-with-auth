import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPhotoSectionComponent } from './user-photo-section.component';

describe('UserPhotoSectionComponent', () => {
  let component: UserPhotoSectionComponent;
  let fixture: ComponentFixture<UserPhotoSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPhotoSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPhotoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
