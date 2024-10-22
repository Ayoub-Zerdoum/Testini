import { Component } from '@angular/core';

@Component({
  selector: 'app-template-gallery',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {
  types = [
    { label: 'Quiz', value: 'quiz' },
    { label: 'Game', value: 'game' },
    { label: 'Survey', value: 'survey' }
  ];

  levels = [
    { label: 'Kids', value: 'kids' },
    { label: 'Teens', value: 'teens' },
    { label: 'Adults', value: 'adults' }
  ];

  sortOptions = [
    { label: 'Newest', value: 'newest' },
    { label: 'Oldest', value: 'oldest' },
    { label: 'Most Popular', value: 'popular' }
  ];

  selectedType: string = 'quiz';
  selectedLevel: string = 'kids';
  selectedSort: string = 'newest';
  isTimeLimited: boolean = true;
  sortOrder: string = 'desc';
  displayMode: string = 'A';
}
