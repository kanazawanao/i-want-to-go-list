import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPrefecturesComponent } from './select-prefectures.component';

describe('SelectPrefecturesComponent', () => {
  let component: SelectPrefecturesComponent;
  let fixture: ComponentFixture<SelectPrefecturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPrefecturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPrefecturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
