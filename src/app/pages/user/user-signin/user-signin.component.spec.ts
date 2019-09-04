import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from "@angular/router/testing";

import { UserSigninComponent } from './user-signin.component';
import { MaterialModule } from 'src/app/material/material.module';

describe('UserSigninComponent', () => {
  let component: UserSigninComponent;
  let fixture: ComponentFixture<UserSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      declarations: [
        UserSigninComponent
      ],
      imports: [
        RouterTestingModule,
        FormsModule,
        MaterialModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
