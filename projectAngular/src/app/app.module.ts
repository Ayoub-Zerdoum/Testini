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
    QuizType1Component
  ],
  imports: [
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
    SelectButtonModule, TagModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
