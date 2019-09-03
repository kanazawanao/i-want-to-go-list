import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from 'src/app/pages/place/material/material.module';

import { SelectPrefecturesComponent } from './select-prefectures.component';

describe('SelectPrefecturesComponent', () => {
  let component: SelectPrefecturesComponent;
  let fixture: ComponentFixture<SelectPrefecturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SelectPrefecturesComponent,
      ],
      imports: [
        MaterialModule,
      ]
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
