import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from '../apixu.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  public weatherData: any;
  public forecastData: any;

  constructor(
    private formBuilder: FormBuilder,
    private apixuService: ApixuService
  ) {}

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  sendToAPIXU(formValues: any) {
    this.apixuService.getWeather(formValues.location).subscribe(
      (data) => {
        console.log(data);  // Log the entire API response to check the structure
        this.weatherData = data.current.location;  // Store current weather data
        this.forecastData = data.forecast.forecastday;  // Store forecast data
      },
      (error) => {
        console.error('Error fetching weather data:', error);
      }
    );
  }
}
