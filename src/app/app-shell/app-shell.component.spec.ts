import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppShellComponent } from './app-shell.component';
import { MaterialModule } from 'src/app/material/material.module';

describe('AppShellComponent', () => {
  let component: AppShellComponent;
  let fixture: ComponentFixture<AppShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppShellComponent
      ],
      imports: [
        MaterialModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
