
import { Component, OnInit } from '@angular/core';
import { Session } from '../entities/Session';
import { Result } from '../entities/Result';

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.scss']
})
export class ReportCardComponent implements OnInit {
  breadcrumbItems!: any[];
  sessions!: Session[];
  students!: { email: string;[sessionTitle: string]: number | string }[];
  displayDialog: boolean = false;
  selectedResult: { id: number; email: string } | null = null;
  mergeSessionsDialog: boolean = false;
  selectedSessions: Session[] = [];
  selectedNames: string[] = [];
  selectedOperation: string = '';
  coefficients: { [sessionTitle: string]: number } = {}; // Coefficient input values for each session
  sessionSuggestions: string[] = []; // Suggestions for autocomplete
  operationOptions: string[] = ['Max', 'Avg', 'Coef Special'];

  ngOnInit() {
    this.breadcrumbItems = [
      { label: 'Tableau de bord' },
      { label: 'Récapitulatif des scores' },
      { label: 'MS - Mathématiques - 2ème Période' }
    ];

    this.sessions = [
      { id: 1, title: 'Session 1 - Algebra', results: [{ id: 1, studentEmail: 'avent.auger@example.com', score: 17 }, { id: 2, studentEmail: 'mila.payan@example.com', score: 11 }, { id: 3, studentEmail: 'dali@example.com', score: 20 }] },
      { id: 2, title: 'Session 2 - Geometry', results: [{ id: 1, studentEmail: 'avent.auger@example.com', score: 15 }, { id: 2, studentEmail: 'mila.payan@example.com', score: 12 }, { id: 4, studentEmail: 'munir@example.com', score: -1 }] }
    ];

    this.sessionSuggestions = this.sessions.map(session => session.title);

    const allStudentEmails = new Set<string>();
    this.sessions.forEach(session => session.results.forEach(result => allStudentEmails.add(result.studentEmail)));
    this.students = Array.from(allStudentEmails).map(email => {
      const studentData: { email: string;[sessionTitle: string]: number | string } = { email };
      this.sessions.forEach(session => {
        const result = session.results.find(r => r.studentEmail === email);
        studentData[session.title] = result ? result.score : 'Absent';
      });
      return studentData;
    });
  }

  openMergeDialog() {
    this.mergeSessionsDialog = true;
    this.selectedSessions = [];
    this.selectedNames = [];
    this.selectedOperation = '';
    this.coefficients = {};
  }

  onSessionSelected() {
    this.selectedSessions = this.sessions.filter(session =>
      this.selectedNames.includes(session.title)
    );
  }
  logSelectedOptions() {
    const selectedSessionIds = this.selectedSessions.map(session => session.id);
    console.log('Selected Names:', this.selectedNames);
    console.log('Selected Sessions:', selectedSessionIds);
    console.log('Operation:', this.selectedOperation);
    console.log('Coefficients:', this.coefficients);
    this.mergeSessionsDialog = false; // Close dialog after logging
  }

  search(event: { query: string }) {
    const query = event.query.toLowerCase();
    this.sessionSuggestions = this.sessions
      .map(session => session.title)
      .filter(title => title.toLowerCase().includes(query));
  }


  openDialogByEmail(session: Session, studentEmail: string) {
    const result = session.results.find((r) => r.studentEmail === studentEmail);
    if (result) {
      this.selectedResult = { id: result.id, email: result.studentEmail };
      this.displayDialog = true;
    }
  }
}

