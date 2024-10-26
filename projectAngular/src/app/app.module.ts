import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';

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
    ClassroomDisplayComponent
  ],
  imports: [
    BrowserModule, RadioButtonModule,
    BrowserAnimationsModule, ImageModule,
    CalendarModule, SplitButtonModule,
    ButtonModule, DropdownModule,
    AutoCompleteModule, CheckboxModule,
    CascadeSelectModule, InputTextModule,
    FormsModule,
    AppRoutingModule, TableModule,
    BreadcrumbModule, DialogModule, StepperModule, TabViewModule,
    ToolbarModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
