import { Component } from '@angular/core';

@Component({
  selector: 'app-classroom-display',
  templateUrl: './classroom-display.component.html',
  styleUrl: './classroom-display.component.scss'
})
export class ClassroomDisplayComponent {
  menuItems: string[] = ['All', 'Newest', 'Closest Test'];
  selectedItem: string | null = 'All';

  selectMenu(item: string) {
    this.selectedItem = item; // Set the selected item
  }
}
