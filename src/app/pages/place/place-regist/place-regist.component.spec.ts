import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceRegistComponent } from './place-regist.component';

describe('PlaceRegistComponent', () => {
  let component: PlaceRegistComponent;
  let fixture: ComponentFixture<PlaceRegistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlaceRegistComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceRegistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
