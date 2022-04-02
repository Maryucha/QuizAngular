import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ViewsRoutingModule } from './views-routing.module';
import { QuestionsComponent } from './components/questions/questions.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    WelcomeComponent,
    QuestionsComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule,
  ],
  exports: [
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
