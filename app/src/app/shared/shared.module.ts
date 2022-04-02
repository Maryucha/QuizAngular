import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './components/error/error.component';
import { ModalComponent } from './components/modal/modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    ErrorComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressBarModule
  ],
  exports: [
    ErrorComponent,
    ModalComponent,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressBarModule
  ]
})
export class SharedModule { }
