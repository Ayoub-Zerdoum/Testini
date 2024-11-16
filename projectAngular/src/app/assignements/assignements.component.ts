import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { TreeNode } from 'primeng/api/treenode';

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


  ////////////////////////
  files: TreeNode[] = [];
  cols: any[] = [];

  ngOnInit() {
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'size', header: 'Size' },
      { field: 'type', header: 'Type' },
    ];

    this.files = [
      {
        data: { name: 'Documents', size: '75kb', type: 'Folder' },
        children: [
          {
            data: { name: 'Work', size: '55kb', type: 'Folder' },
            children: [
              { data: { name: 'Expenses.doc', size: '30kb', type: 'Document' } },
              { data: { name: 'Resume.doc', size: '25kb', type: 'Document' } },
            ],
          },
          { data: { name: 'Home', size: '20kb', type: 'Folder' } },
        ],
      },
      {
        data: { name: 'Pictures', size: '150kb', type: 'Folder' },
        children: [
          { data: { name: 'Travel.png', size: '100kb', type: 'Image' } },
          { data: { name: 'Family.png', size: '50kb', type: 'Image' } },
        ],
      },
      {
        data: { name: 'Videos', size: '300mb', type: 'Folder' },
        children: [
          { data: { name: 'Movie.mp4', size: '250mb', type: 'Video' } },
          { data: { name: 'Clip.mp4', size: '50mb', type: 'Video' } },
        ],
      },
    ];
  }
}
