import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileInputsComponent } from './user-profile-inputs.component';

describe('UserProfileInputsComponent', () => {
  let component: UserProfileInputsComponent;
  let fixture: ComponentFixture<UserProfileInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
