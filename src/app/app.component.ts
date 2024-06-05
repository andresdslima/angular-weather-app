import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) { }

  location: string = 'Miami';
  weatherData?: WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.location);
    this.location = '';
  }

  onSubmit() {
    this.getWeatherData(this.location);
    this.location = '';
  }

  private getWeatherData(location: string) {
    this.weatherService.getWeatherData(location).subscribe({
      next: (response) => {
        const data: WeatherData = Object.values(response.locations)[0];
        this.weatherData = data;
      },
    });
  }
}
