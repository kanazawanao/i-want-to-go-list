import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Weather } from '../models/weather';
import { tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private weatherApiUrl = environment.weatherNewsUrl;

  constructor(private http: HttpClient) {}

  getWeatherByLatLng(lat: number, lng: number): Observable<any> {
    const targetUrl = this.weatherApiUrl + `?lat=${lat}&lng=${lng}`;
    console.log(targetUrl);
    return this.http.get(targetUrl, this.httpOptions).pipe(
      tap(weather => console.log(weather)),
      catchError(this.handleError<any>('getWeatherByCityId'))
    );
    // get<any>(this.weatherApiUrl + cityId).pipe(
    //   tap(weather =>console.log(weather)),
    //   catchError(this.handleError<any>('getWeatherByCityId'))
    // );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: リモート上のロギング基盤にエラーを送信する
      console.error(error); // かわりにconsoleに出力
      console.log(operation);
      // 空の結果を返して、アプリを持続可能にする
      return of(result as T);
    };
  }
}
