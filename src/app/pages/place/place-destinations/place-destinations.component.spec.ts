import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceDestinationsComponent } from './place-destinations.component';

describe('PlaceDestinationsComponent', () => {
  let component: PlaceDestinationsComponent;
  let fixture: ComponentFixture<PlaceDestinationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceDestinationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceDestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
