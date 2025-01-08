import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApixuService {
  private apiKey = '2e22fad0f384471799d93506250601'; // Replace with your actual API key
  private apiBaseUrl = 'https://api.weatherapi.com/v1';

  constructor(private http: HttpClient) {}

  // Method for getting both current and 3-day forecast data
  getWeather(location: string): Observable<any> {
    return this.http.get(
      `${this.apiBaseUrl}/forecast.json?key=${this.apiKey}&q=${location}&days=3`
    );
  }

  // Method for getting only current weather data
  getCurrentWeather(location: string): Observable<any> {
    return this.http.get(
      `${this.apiBaseUrl}/current.json?key=${this.apiKey}&q=${location}`
    );
  }
}
