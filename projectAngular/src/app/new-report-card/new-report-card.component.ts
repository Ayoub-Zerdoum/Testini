import { Component, OnInit } from '@angular/core';
import { SessionDTO } from '../entities/Session';
import { SessionService } from '../services/session.service';
import { MergeDTO, OperationM } from '../entities/MergeDTO';
import { MergeService } from '../services/merge.service';

@Component({
  selector: 'app-new-report-card',
  templateUrl: './new-report-card.component.html',
  styleUrls: ['./new-report-card.component.scss']
})
export class NewReportCardComponent implements OnInit {
  breadcrumbItems!: any[];
  sessions!: SessionDTO[];
  mergeSessionsDialog: boolean = false;
  selectedSessions: SessionDTO[] = [];
  selectedNames: string[] = [];

  selectedOperation: string = '';
  coefficients: { [sessionTitle: string]: number } = {}; // Coefficient input values for each session
  sessionSuggestions: string[] = []; // Suggestions for autocomplete
  operationOptions: { label: string, value: string }[] = [
    { label: 'Maximum Score', value: OperationM.MAX },
    { label: 'Average Score', value: OperationM.AVG },
    { label: 'Custom Coefficients', value: OperationM.COEFS }
  ]; // Descriptive options for dropdown
  mergeTitle: string = '';

  mergeDtos!: MergeDTO[];

  OperationM = OperationM; // Exposing OperationM enum to the template
  iDSessions: any;

  constructor(private sessionService: SessionService, private mergeService: MergeService) { }

  ngOnInit() {
    this.breadcrumbItems = [
      { label: 'Tableau de bord' },
      { label: 'Récapitulatif des scores' },
      { label: 'MS - Mathématiques - 2ème Période' }
    ];

    //this.updateSessions();

  }

  updateSessions(sessions: SessionDTO[]) {
    this.sessions = sessions;
  }
  /*
    loadSessions() {
      this.sessionService.getAllSessions().subscribe(
        (sessions: SessionDTO[]) => {
          this.sessions = sessions;
  
          console.log(this.sessions)
          this.sessionSuggestions = sessions.map(session => session.title);
  
        },
        error => console.error('Error loading sessions:', error)
      );
    }
  */
  openMergeDialog() {
    this.mergeSessionsDialog = true;
    this.selectedSessions = [];
    this.selectedNames = [];
    this.selectedOperation = '';
    this.coefficients = {};
    this.mergeTitle = '';
  }

  onSessionSelected() {

    this.selectedSessions = this.sessions.filter(session =>
      this.selectedNames.includes(session.title)
    );
  }

  search(event: { query: string }) {
    const query = event.query.toLowerCase();
    this.sessionSuggestions = this.sessions
      .map(session => session.title)
      .filter(title => title.toLowerCase().includes(query));
  }

  saveMerge() {



    const mergeDTO: MergeDTO = {
      id: 0, // Default ID (the backend might auto-generate this)
      title: this.mergeTitle,
      operation: this.selectedOperation as OperationM, // Cast to OperationM enum
      idSessions: this.selectedSessions.map(session => session.id),

      coefSessions: this.selectedOperation === OperationM.COEFS
        ? this.selectedSessions.map(session => this.coefficients[session.title] || 1)
        : []
    };


    const classroomId = 1; // Replace with the actual classroom ID if needed
    this.mergeService.createMerge(mergeDTO, classroomId).subscribe(
      (response: MergeDTO) => {
        console.log('Merge saved successfully:', response);
        this.mergeSessionsDialog = false; // Close the dialog on success
      },
      error => console.error('Error saving merge:', error)
    );
  }
}
