import { Component,Renderer2, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Question {
  type: string;
  mode: 'view' | 'creation' | 'ask';
  data: any
}

interface Stepper {
  visible:Boolean,
  header: string;
  question: Question | null; // Define question type as Question or null
}


@Component({
  selector: 'app-challenge-creator',
  templateUrl: './challenge-creator.component.html',
  styleUrl: './challenge-creator.component.scss'
})
export class ChallengeCreatorComponent {
  changeDetector: any;

  constructor(private route: ActivatedRoute,private renderer: Renderer2, private el: ElementRef) {}


  id: Number = 0;
  types: { label: string; value: string }[] = [];

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id') ?? 0);

    this.types = [
      { label: 'Quiz', value: 'Quiz' },
      { label: 'Game', value: 'game' },
      { label: 'Survey', value: 'survey' },
      { label: 'Q/A', value: 'Q/A' }
    ];
  }

  // Initialize steppers with an empty array for questions in each stepper
   // Initial state for steppers
   steppers : Stepper[] = [
    { visible: true, header: 'Step 1', question: null },
    { visible: true, header: 'Step 2', question: null },
    { visible: false, header: 'Step 3', question: null },
    { visible: false, header: 'Step 4', question: null },
    { visible: false, header: 'Step 5', question: null }
  ];




  selectedType: string | undefined;
  draggedItemType: string | null = null;
  droppedComponent: { type: string } | null = null;

  dragStart(type: string) {
    this.draggedItemType = type;
    console.log(type)
  }

  dragEnd() {
    this.draggedItemType = null;
  }

  // Handle drop event in the respective stepper
  drop(stepIndex: number) {
    if (this.draggedItemType) {
      this.steppers[stepIndex].question = {
        type: this.draggedItemType, // Create a new question object
        mode: 'creation', // Specify the mode here if needed
        data: {
          text: '', // Start with an empty string for the question text
          options: [], // Start with an empty array for options
          correctAnswerIndex: null // Initialize to null
        }
      };
      this.draggedItemType = null; // Reset dragged item
    }
  }

  // Add a new stepper based on the index of the current stepper
  addStepper(index: number) {
    if (index < this.steppers.length - 1) {
      this.steppers[index + 1].visible = true;
    }
  }

  // Method to handle question updates from the child component
  onQuestionChange(updatedQuestion: any) {
    console.log(this.steppers)
    this.steppers[0].question = updatedQuestion; // Update the question in the parent
  }

  
}
