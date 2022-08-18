export interface WeatherData {
  locations: { [s: string]: unknown } | ArrayLike<unknown>;
  address: string;
  currentConditions: {
    wdir: number;
    temp: number;
    sunrise: string;
    visibility: number;
    wspd: number;
    icon: string;
    stations: string;
    cloudcover: number;
    datetime: string;
    precip: number;
    moonphase: number;
    sealevelpressure: number;
    dew: number;
    sunset: string;
    humidity: number;
  };
  distance: number;
  id: string;
  index: number;
  latitude: number;
  longitude: number;
  name: string;
  time: number;
  tz: string;
}
