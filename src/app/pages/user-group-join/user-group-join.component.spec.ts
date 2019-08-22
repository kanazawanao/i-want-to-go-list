import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGroupJoinComponent } from './user-group-join.component';

describe('UserGroupJoinComponent', () => {
  let component: UserGroupJoinComponent;
  let fixture: ComponentFixture<UserGroupJoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGroupJoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGroupJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});