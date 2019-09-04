import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectGroupComponent } from './select-group.component';
import { MaterialModule } from 'src/app/material/material.module';

describe('SelectGroupComponent', () => {
  let component: SelectGroupComponent;
  let fixture: ComponentFixture<SelectGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SelectGroupComponent
      ],
      imports: [
        MaterialModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
