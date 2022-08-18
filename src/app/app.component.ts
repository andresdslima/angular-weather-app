import { WeatherData } from './models/weather.model';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

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
        const data: any = Object.values(response.locations)[0];
        this.weatherData = data;
      },
    });
  }
}
