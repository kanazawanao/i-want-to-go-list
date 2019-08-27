import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPrefectureComponent } from './search-prefecture.component';

describe('SearchPrefectureComponent', () => {
  let component: SearchPrefectureComponent;
  let fixture: ComponentFixture<SearchPrefectureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPrefectureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPrefectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
