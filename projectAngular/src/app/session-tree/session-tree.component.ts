import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { SessionService } from '../services/session.service';
import { SessionNodeDto } from '../entities/SessionNodeDto';

@Component({
  selector: 'app-session-tree',
  templateUrl: './session-tree.component.html',
  styleUrls: ['./session-tree.component.scss']
})
export class SessionTreeComponent implements OnInit {
  files: TreeNode[] = [];
  cols: any[] = [];
  selectedId: number | null = null; // ID of the student to display in the dialog
  displayDialog: boolean = false; // Control dialog visibility

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
    this.loadTreeData();
  }

  loadTreeData() {
    this.sessionService.treenizationSessionByClassroomId(1).subscribe((data: SessionNodeDto[]) => {
      const emails = new Set<string>();

      // Transform data and collect emails
      this.files = this.transformToTreeNodes(data, emails);

      // Generate columns dynamically from email list
      this.cols = [{ field: 'name', header: 'Session Title' }, ...Array.from(emails).map(email => ({ field: email, header: email }))];
    });
  }

  transformToTreeNodes(data: SessionNodeDto[], emails: Set<string>): TreeNode[] {
    return data.map(node => {
      // Collect emails for dynamic columns
      Object.keys(node.data.students).forEach(email => emails.add(email));

      // Map students to individual scores or dashes
      const studentScores = Object.keys(node.data.students).reduce((acc, email) => {
        acc[email] = node.data.students[email]?.score ?? '-'; // Use score if available, else '-'
        return acc;
      }, {} as any);

      return {
        data: {
          name: node.data.title,
          ...studentScores, // Flatten students to the data object
          studentDetails: node.data.students // Store the full students object for interaction
        },
        children: node.children ? this.transformToTreeNodes(node.children, emails) : []
      };
    });
  }


  onCellClick(email: string, rowData: any) {
    const student = rowData.studentDetails[email];
    if (student?.id) {
      this.selectedId = student.id;
      this.displayDialog = true;
    }
  }
}
