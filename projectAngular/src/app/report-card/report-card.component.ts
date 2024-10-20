import { Component, OnInit } from '@angular/core';

interface Student {
  name: string;
  note: number;
  rg: number;
}

interface Test {
  testName: string;
  coefficient: number;
  students: Student[];
}

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.scss']
})
export class ReportCardComponent implements OnInit {

  breadcrumbItems!: any[];
  tests!: Test[]; // Define the type for the tests array
  students!: any[];

  ngOnInit() {
    this.breadcrumbItems = [
      { label: 'Tableau de bord' },
      { label: 'Récapitulatif des notes' },
      { label: 'MS - Mathématiques - 2ème Période' }
    ];

    // Example of test structure
    this.tests = [
      {
        testName: 'Test 1 - Algebra',
        coefficient: 2,
        students: [
          { name: 'AUGER Avent', note: 17.00, rg: 1 },
          { name: 'PAYAN Mila', note: 11.00, rg: 2 },
          { name: 'Dali', note: 20, rg: 1 },
        ]
      },
      {
        testName: 'Test 2 - Geometry',
        coefficient: 3,
        students: [
          { name: 'AUGER Avent', note: 15.00, rg: 1 },
          { name: 'PAYAN Mila', note: 12.00, rg: 2 },
          { name: ' Mila', note: 12.00, rg: 2 },
          { name: 'Dali', note: 20, rg: 1 },
        ]
      },
      {
        testName: 'Test 2 - Geometry',
        coefficient: 3,
        students: [
          { name: 'AUGER Avent', note: 15.00, rg: 1 },
          { name: 'PAYAN Mila', note: 12.00, rg: 2 },
          { name: ' Mila', note: 12.00, rg: 2 },
          { name: 'Dali', note: 20, rg: 1 },
        ]
      },
      {
        testName: 'Test 4 - Geometry',
        coefficient: 3,
        students: [
          { name: 'Dali', note: 20, rg: 1 },
          { name: 'Munir', note: -1, rg: 2 },
          { name: 'Mejdi', note: 2.00, rg: 2 }
        ]
      }
    ];

    // Step 1: Extract all unique students from all tests
    const allStudentsSet = new Set<string>();
    this.tests.forEach((test: Test) => {
      test.students.forEach((student: Student) => {
        allStudentsSet.add(student.name);
      });
    });

    // Convert the set to an array of unique students
    this.students = Array.from(allStudentsSet).map(name => ({ name }));

    // Step 2: For each student, we'll check whether they passed each test and add the result
    this.students.forEach(student => {
      this.tests.forEach((test: Test) => {
        const testResult = test.students.find((s: Student) => s.name === student.name);
        student[test.testName] = testResult ? testResult.note : 'Absent'; // Add 'Absent' if the student didn't take the test
      });
    });
  }
}
