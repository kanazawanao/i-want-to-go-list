import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherNewsComponent } from './weather-news.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('WeatherNewsComponent', () => {
  let component: WeatherNewsComponent;
  let fixture: ComponentFixture<WeatherNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WeatherNewsComponent
      ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
