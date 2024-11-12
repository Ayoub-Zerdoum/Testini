import { Component,Renderer2, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Question {
  type: string;
  mode: 'view' | 'creation' | 'ask';
  data: any
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
   currentStep = 0;

   steps : any[] = [
    { title: 'Question 1', question: null },
  ];




  selectedType: string | undefined;
  draggedItemType: string | null = null;
  droppedComponent: { type: string } | null = null;
  
  // Initial template is set to 'default-template'
  selectedTemplate: string = 'default-template';

  // Method to select a template
  selectTemplate(template: string): void {
    this.selectedTemplate = template;
  }

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
      this.steps[stepIndex].question = {
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

  // Function to add a new step after the current index
  addStep(index: number) {
    const newStep = {
      title: `Question ${this.steps.length + 1} `,
      question: null
    };

    this.currentStep = index+1;
    
    // Insert new step after the current index
    this.steps.splice(index + 1, 0, newStep);

    // Optionally, update headers to match the new step order
    this.steps.forEach((step, i) => {
      step.title = `Question ${i + 1} `;
    });
  }

  // Method to handle question updates from the child component
  onQuestionChange(updatedQuestion: any,i: any) {
    console.log(this.steps)
    this.steps[i].question = updatedQuestion; // Update the question in the parent
  }

  // Function to set the active step
  setStep(index: number): void {
    this.currentStep = index; // Set the current step to the clicked step
  }

  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }
  
  getInvalidQuestion(step: any): string {
    // Check if there is no question or the question text is empty
    if (!step.question) {
      return 'No type selected';
    }

    // Check if question text is missing
    if (!step.question.data || !step.question.data.text) {
      return 'No question specified';
    }
  
    // Check if the question has fewer than 2 options
    if (step.question.type == "Quiz" && step.question.data.options.length < 2) {
      return ' (This question has less than 2 options)';
    }
  
    // Check if any option is empty
    if (step.question.type == "Quiz" && step.question.data.options.some((option: string) => option.trim() === '')) {
      return 'Some options are empty';
    }
  
    // If all checks pass, return an empty string
    return '';
  }
  

  Save(){}
  Publish(){}

}
