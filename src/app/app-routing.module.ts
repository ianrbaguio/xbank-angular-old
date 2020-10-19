import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/login/login/login.component';
import { SecurityQuestionComponent } from 'src/main/security-question/security-question.component';
import { AccountSummaryComponent } from 'src/main/account-summary/account-summary.component';
import { RegisterComponent } from 'src/register/register/register.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent },
  { path: 'security-question', component: SecurityQuestionComponent },
  { path: 'account-summary', component: AccountSummaryComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
