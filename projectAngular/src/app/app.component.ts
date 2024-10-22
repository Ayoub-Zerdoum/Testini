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

  sidebarExpanded: boolean = true;

  onSidebarToggle(expanded: boolean) {
    this.sidebarExpanded = expanded; // Update state based on sidebar toggle
  }
}
