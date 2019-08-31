import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-news',
  templateUrl: './weather-news.component.html',
  styleUrls: ['./weather-news.component.scss']
})
export class WeatherNewsComponent implements OnInit {
  tokyo$?: Observable<any>;
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.tokyo$ = this.weatherService.getWeatherByLatLng(37.8267, -122.4233);
  }
  getWeatherByLatLng(lat: number, lng: number) {
    this.tokyo$ = this.weatherService.getWeatherByLatLng(lat, lng);
  }
}
