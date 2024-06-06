import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) { }

  getWeatherData(location: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(
      'https://visual-crossing-weather.p.rapidapi.com/forecast',
      {
        headers: new HttpHeaders()
          .set('X-RapidAPI-Host', 'visual-crossing-weather.p.rapidapi.com')
          .set(
            'X-RapidAPI-Key',
            '5386461ca6mshe69b4439791582fp1f79a9jsn1d9908b80f31'
          ),
        params: new HttpParams()
          .set('location', location)
          .set('aggregateHours', 24)
          .set('unitGroup', 'metric')
          .set('contentType', 'json'),
      }
    );
  }
}
