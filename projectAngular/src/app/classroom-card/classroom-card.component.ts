import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-classroom-card',
  templateUrl: './classroom-card.component.html',
  styleUrl: './classroom-card.component.scss'
})
export class ClassroomCardComponent {
  @Input() title: string = 'Classroom Title'; // Title of the card
  @Input() studentCount: number = 0;         // Number of students
  @Input() assignmentCount: number = 0;      // Number of assignments
  @Input() creationDate: string = '2024-10-26'; // Creation date
  @Input() nextTestDate: string = '----------'; // Date for the next test
  @Input() testTitle: string = 'No futur tests are scheduled';   // Title of the test
  @Input() titleColor: string = '#ccc';    // Default title color
}
