import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Question {
  type: string; // The type of question (e.g., 'Quiz')
  number: number; // The question number
  data: any;
}

@Component({
  selector: 'app-quiz1',
  templateUrl: './quiz1.component.html',
  styleUrl: './quiz1.component.scss'
})
export class Quiz1Component {
  @Input() mode?: 'view' | 'creation' | 'ask';
  @Input() number!: number;

  @Input() type!: string; // Required type of the question
  @Input() template?: string; // Optional template string
  @Input() questionData: any;

  @Output() questionChange = new EventEmitter<any>();

  selectedAnswer: number | null = null;

  // Default question structure
  question: Question = {
    type: 'Quiz',
    number: 1,
    data: {
      text: '', // Initialize text to an empty string
      options: [], // Initialize options to an empty array
      correctAnswerIndex: null // Initialize correct answer index to null
    }
  };

  quizDataView = {
    type: 'Quiz',
    mode: 'view',
    number: 1,
    text: 'What is the capital of France?',
    options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
  }

   // Add an empty option to the options array in question data
   addOption() {
    if (!Array.isArray(this.question.data.options)) {
      this.question.data.options = []; // Ensure options is an array
    }
    this.question.data.options.push(''); // Add an empty string for a new option
    this.questionChange.emit(this.question); // Emit the updated question
  }

  // Update question text
  updateQuestionText(text: string) {
    this.question.data.text = text;
    this.questionChange.emit(this.question); // Emit the updated question
  }

  // Update a specific option in question data
  updateOption(index: number, value: string) {
    if (Array.isArray(this.question.data.options)) {
      this.question.data.options[index] = value;
      this.questionChange.emit(this.question); // Emit the updated question
    }
  }

  // Set the correct answer index
  setCorrectAnswer(index: number) {
    this.question.data.correctAnswerIndex = index;
    this.questionChange.emit(this.question); // Emit the updated question
  }

  trackByIndex(index: number, item: any): number {
    return index;
  }

}
