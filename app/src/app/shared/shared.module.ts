import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './components/error/error.component';
import { ModalComponent } from './components/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HttpClientModule } from '@angular/common/http';
import { FinishModalComponent } from './components/finish-modal/finish-modal.component';

@NgModule({
  declarations: [
    ErrorComponent,
    ModalComponent,
    FinishModalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressBarModule,
    HttpClientModule,
  ],
  exports: [
    ErrorComponent,
    ModalComponent,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressBarModule,
    FinishModalComponent
  ]
})
export class SharedModule { }
