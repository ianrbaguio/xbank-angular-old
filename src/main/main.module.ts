import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityQuestionComponent } from './security-question/security-question.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountSummaryComponent } from './account-summary/account-summary.component';

@NgModule({
  declarations: [SecurityQuestionComponent, AccountSummaryComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class MainModule {}
