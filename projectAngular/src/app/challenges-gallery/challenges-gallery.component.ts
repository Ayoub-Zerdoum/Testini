import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import { ChallengeService } from '../services/challenge.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-challenges-gallery',
  templateUrl: './challenges-gallery.component.html',
  styleUrl: './challenges-gallery.component.scss'
})
export class ChallengesGalleryComponent implements OnInit{

  challenges: any[] = []; // Array to store the challenges

  constructor(private router: Router,private challengeService: ChallengeService) {}

  ngOnInit(): void {
    // Assuming the instructor ID is available, for example:
    const instructorId = 1; // Replace with dynamic value if needed

    // Fetch challenges from the backend API
    this.challengeService.getChallengesByInstructor(instructorId).subscribe(
      (data) => {
        this.challenges = data; // Populate the challenges array
        console.log(this.challenges[0])
      },
      (error) => {
        console.error('Error fetching challenges:', error);
      }
    );
  }


  types = [
    { name: 'All', value: 'all' },
    { name: 'Custom', value: 'custom' },
    { name: 'Quiz', value: 'quiz' },
    { name: 'Game', value: 'game' },
    { name: 'Survey', value: 'survey' }
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

  selectedType: string = 'custom';
  selectedLevel: string = 'kids';
  selectedSort: string = 'newest';
  isTimeLimited: boolean = true;
  sortOrder: string = 'desc';
  displayMode: string = 'A';


  menuItems: string[] = ['In progress', 'Published', 'Newest', 'Most Used'];
  selectedItem: string | null = 'Newest';

  selectMenu(item: string): void {
    this.selectedItem = item;
  }

  panels = [
    {
      header: 'Header I',
      content: 'Content I',
      showNext: true,
      showBack: false,
    },
    {
      header: 'Header II',
      content: 'Content II',
      showNext: true,
      showBack: true,
    },
    {
      header: 'Header III',
      content: 'Content III',
      showNext: false,
      showBack: true,
    },
  ];

  ///////////////////////////////////////////////
  /*
  challenges = [
    {
      id: 1,  // Unique identifier for each challenge
      title: 'Math Quiz Challenge',
      numQuestions: 10,
      status: 'PUBLISHED',
      creationDate: '2024-11-01',
      numberOfUses: 50,  // Not displayed in table
      description: 'A challenging math quiz with 10 questions',  // Additional info not displayed
    },
    {
      id: 2,
      title: 'Science Experiment',
      numQuestions: 8,
      status: 'IN-PROGRESS',
      creationDate: '2024-11-02',
      numberOfUses: 10,
      description: 'A science experiment challenge',
    },
    {
      id: 3,
      title: 'Programming Challenge',
      numQuestions: 20,
      status: 'IN-PROGRESS',
      creationDate: '2024-10-25',
      numberOfUses: 100,
      description: 'A programming challenge with coding problems',
    },
    {
      id: 4,
      title: 'History Quiz',
      numQuestions: 15,
      status: 'PUBLISHED',
      creationDate: '2024-10-30',
      numberOfUses: 35,
      description: 'A history quiz challenge with 15 questions',
    }
  ];*/

  getStatusSeverity(status: string) {
      switch (status) {
          case 'IN_PROGRESS':
              return 'info';
          case 'PUBLISHED':
              return 'success';
          default: return 'warning'
      }
  }
  // Action for Edit, Delete, or View (add functionality later)
  handleAction(action: string, challenge: any) {
    console.log(action, challenge);
    // You can navigate to another page or open a dialog based on the action
  }
  
  @ViewChildren('scrollingContainer') scrollingContainers!: QueryList<ElementRef>;

  
  ngAfterViewInit() {
    // Ensure that the QueryList is populated and that elements are available
    if (this.scrollingContainers) {
      this.scrollingContainers.changes.subscribe(() => {
        this.checkOverflowForAll();
      });
    }
  }

  // Function that checks if an element should scroll based on its overflow
  checkIfElementNeedsToScroll(index: number): boolean {
    const container = this.scrollingContainers.toArray()[index]?.nativeElement;
    return container ? container.scrollWidth > container.clientWidth : false;
  }

  // Function to check overflow for all elements (you can call this for debugging or manually)
  checkOverflowForAll() {
    this.scrollingContainers.forEach((containerRef, index) => {
      const container = containerRef.nativeElement;
      const isOverflow = container.scrollWidth > container.clientWidth;
      console.log(`Element ${index}: ${isOverflow ? 'Overflowing' : 'Not overflowing'}`);
    });
  }

  /** toggle the action menu */
  // Array to track the state for each item
  isMenuOpen: boolean[] = [];

  // Toggle the visibility for the current item
  toggleMenu(index: number) {
    this.isMenuOpen[index] = !this.isMenuOpen[index]; // Toggle visibility for this index
  }

  continuEditingChallenge(challengeId: number){
    console.log(challengeId)
    this.router.navigate(['/inside/challenge-creator', challengeId]);
  }
}
