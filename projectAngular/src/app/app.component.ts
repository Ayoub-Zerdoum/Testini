import { Component } from '@angular/core';

interface Country {
  cname: string;
  states: { name: string, cities: { name: string }[] }[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  // Ensure correct property name styleUrls
})
export class AppComponent {
  title = 'projectAngular';
  selectedCity: any; // Assuming 'selectedCity' will hold the selected city object
  countries: any[] = []; // Assuming 'countries' is an array of country objects

  constructor() {
    // Initialize your countries array with data, assuming you have a structure like:
    this.countries = [
      {
        name: 'Country 1',
        states: [
          {
            name: 'State 1',
            cities: [
              { cname: 'City 1' },
              { cname: 'City 2' }
              // Add more cities as needed
            ]
          },
          // Add more states as needed
        ]
      },
      {
        name: 'Country 2',
        states: [
          {
            name: 'State 2',
            cities: [
              { cname: 'City 3' },
              { cname: 'City 4' }
              // Add more cities as needed
            ]
          },
          // Add more states as needed
        ]
      }
      // Add more countries as needed
    ];
  }
}
