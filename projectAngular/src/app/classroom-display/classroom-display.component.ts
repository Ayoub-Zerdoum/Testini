import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classroom-display',
  templateUrl: './classroom-display.component.html',
  styleUrl: './classroom-display.component.scss'
})
export class ClassroomDisplayComponent {
  menuItems: string[] = ['All', 'Newest', 'Closest Test'];
  selectedItem: string | null = 'All';

  constructor(private router: Router) {}

  // Generalized method to navigate to a given route
  navigateTo(route: string) {
    this.router.navigate([route]);
  }
  selectMenu(item: string) {
    this.selectedItem = item; // Set the selected item
  }
}
