import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {

  isExpanded: boolean = true; // Initial state set to expanded

  @Output() sidebarToggle: EventEmitter<boolean> = new EventEmitter();

  toggleSidebar() {
    this.isExpanded = !this.isExpanded; // Toggle state
    this.sidebarToggle.emit(this.isExpanded); // Notify parent component
  }

  constructor(public router: Router) { }

  // Function to check if the current route matches the provided route
  isActive(route: string): boolean {
    return this.router.url === route;
  }

}






