import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceRandomComponent } from './place-random.component';

describe('PlaceRandomComponent', () => {
  let component: PlaceRandomComponent;
  let fixture: ComponentFixture<PlaceRandomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlaceRandomComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
