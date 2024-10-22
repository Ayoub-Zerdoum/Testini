import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Adjust as necessary
import { InsideComponent } from './inside/inside.component'; // Adjust as necessary
import { HomeComponent } from './home/home.component'; // Adjust as necessary
import { ReportCardComponent } from './report-card/report-card.component';
import { TemplateComponent } from './template/template.component'; // Adjust as necessary

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'inside', component: InsideComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'report-card', component: ReportCardComponent },

      { path: 'template', component: TemplateComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default route
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
