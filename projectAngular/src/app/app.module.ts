import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { TagModule } from 'primeng/tag'; // Import PrimeNG TagModule


import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


import { CascadeSelectModule } from 'primeng/cascadeselect';
import { TableModule } from 'primeng/table';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { DialogModule } from 'primeng/dialog';
import { StepperModule } from 'primeng/stepper';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { ImageModule } from 'primeng/image';
import { ToolbarModule } from 'primeng/toolbar';
import { DividerModule } from 'primeng/divider';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SplitterModule } from 'primeng/splitter';
import { DragDropModule } from 'primeng/dragdrop';

import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';

import { ConfirmationService } from 'primeng/api';

import { TreeTableModule } from 'primeng/treetable';







import { InputTextModule } from 'primeng/inputtext';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReportCardComponent } from './report-card/report-card.component';
import { HomeComponent } from './home/home.component';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TemplateComponent } from './template/template.component';
import { TemplateCardComponent } from './template-card/template-card.component';
import { LoginComponent } from './login/login.component';
import { InsideComponent } from './inside/inside.component';
import { ClassroomDisplayComponent } from './classroom-display/classroom-display.component';
import { ClassroomCardComponent } from './classroom-card/classroom-card.component';
import { AssignementsComponent } from './assignements/assignements.component';
import { ChallengesGalleryComponent } from './challenges-gallery/challenges-gallery.component';
import { QuizType1Component } from './quiz-type1/quiz-type1.component';
import { ChallengeCreatorComponent } from './challenge-creator/challenge-creator.component';
import { Quiz1Component } from './questions/quiz1/quiz1.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { CustomStepperComponent } from './custom-stepper/custom-stepper.component';
import { QRQuestionComponent } from './questions/qr-question/qr-question.component';


import { TreeTableModule } from 'primeng/treetable';

import { TreeModule } from 'primeng/tree';







@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ReportCardComponent,
    HomeComponent,
    TemplateComponent,
    TemplateCardComponent,
    LoginComponent,
    InsideComponent,
    ClassroomDisplayComponent,
    ClassroomCardComponent,
    AssignementsComponent,
    ChallengesGalleryComponent,
    QuizType1Component,
    ChallengeCreatorComponent,
    Quiz1Component,
    CustomStepperComponent,
    QRQuestionComponent
  ],
  imports: [HttpClientModule,
    BrowserModule, RadioButtonModule,
    BrowserAnimationsModule, ImageModule, FormsModule,
    CalendarModule, SplitButtonModule,
    ButtonModule, DropdownModule,
    AutoCompleteModule, CheckboxModule,
    CascadeSelectModule, InputTextModule,
    AppRoutingModule, TableModule,
    BreadcrumbModule, DialogModule, StepperModule, TabViewModule,
    ToolbarModule,
    DividerModule,
    SelectButtonModule, TagModule,
<<<<<<< HEAD
    SplitterModule, DragDropModule,
    ToastModule,
    IconFieldModule, InputIconModule,
    ConfirmDialogModule,
    MessagesModule,
    TreeTableModule
=======

    SplitterModule, DragDropModule, ToastModule, ConfirmDialogModule, TreeTableModule, TreeModule, IconFieldModule, InputIconModule, MessagesModule
>>>>>>> 913a90161c9198a21a4aed123ad2c6f203a1c318
  ],
  providers: [
    provideClientHydration(), provideHttpClient(withFetch()), MessageService, ConfirmationService


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
