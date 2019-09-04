import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { UserGroupComponent } from './user-group.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

describe('UserGroupComponent', () => {
  let component: UserGroupComponent;
  let fixture: ComponentFixture<UserGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      declarations: [
        UserGroupComponent
      ],
      imports: [
        FormsModule,
        MaterialModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
