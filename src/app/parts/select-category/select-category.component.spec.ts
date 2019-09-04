import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCategoryComponent } from './select-category.component';
import { MaterialModule } from 'src/app/material/material.module';

describe('SelectCategoryComponent', () => {
  let component: SelectCategoryComponent;
  let fixture: ComponentFixture<SelectCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SelectCategoryComponent
      ],
      imports: [
        MaterialModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
