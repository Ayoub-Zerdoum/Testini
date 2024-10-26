import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

interface Assignment {
  StudentEmails: string[]; // Assuming StudentEmails is an array of strings
  Title: string;
  Classroom: string;
  sessionStart: string; // Use appropriate type, like Date, if applicable
  sessionEnd: string;   // Use appropriate type, like Date, if applicable
  creationDate: string; // Use appropriate type, like Date, if applicable
  status: string;       // Adjust the type as needed
}

@Component({
  selector: 'app-assignements',
  templateUrl: './assignements.component.html',
  styleUrl: './assignements.component.scss'
})
export class AssignementsComponent{

    value: string = 'name';

    stateOptions: any[] = [
        { label: 'Title', value: 'Title' },
        { label: 'Classroom', value: 'classroom' },
    ];



  menuItems: string[] = ['Newest', 'ALL', 'OPEN','CLOSED'];
  selectedItem: string | null = 'Newest';

  selectMenu(item: string) {
    this.selectedItem = item; // Set the selected item
  }


}
