import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog,  MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { interval } from 'rxjs/internal/observable/interval';
import { FinishModalComponent } from 'src/app/shared/components/finish-modal/finish-modal.component';
import { QuestionsService } from 'src/app/shared/services/questions.service';

export interface DialogData {
  points: number;
}

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  public player = localStorage.getItem('player');
  public questionList: any = [];
  @ViewChild('points') pointsGame!: ElementRef;


  //variables controllers
  public currentQuestion = 0;
  public points = 0;
  public counter = 60;
  public isSelected = false;
  public correctAnswer = 0;
  public wrongAnswer = 0;
  public interval$: any;

  constructor(
    public dialog: MatDialog,
    public questionsService: QuestionsService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.questionsService.getQuestion().subscribe((x) => {
      this.questionList = x.questions;
    });
    this.startCounter();
  }

  /**
   * 
   */
  nextQuestion() {
    this.currentQuestion++;
    this.startCounter();
  }

  /**
   * 
   */
  previousQuestion() {
    this.currentQuestion--;
    this.resetCounter();
  }
  /**
   * 
   */
  refreshQuiz() {
    this.currentQuestion = 0;
    this.points = 0;
    this.resetCounter();
  }

  /**
   * 
   * @param currentQuestionNumber 
   * @param option 
   */
  answer(currentQuestionNumber: number, option: any) {
    if (option.correct) {
      this.points += 10
      this.correctAnswer++;
      this.currentQuestion++;
    } else {
      this.points -= 10;
      this.wrongAnswer++;
      this.currentQuestion++;
    }
  }

  /**
   * 
   */
  startCounter() {
    this.interval$ = interval(1000).subscribe(val => {
      this.counter--;
      if (this.counter === 0) {
        this.currentQuestion++;
        this.counter = 60;
        this.points -= 10;
      }
      localStorage.setItem('points', this.points.toString());
      if(this.currentQuestion === 10){
        this.stopCounter();
        const dialogRef = this.dialog.open(FinishModalComponent,{
          
          data: {
            points: localStorage.getItem('points')
          }
          
        });
        dialogRef.afterClosed().subscribe(result => {
         this.router.navigate([''])
        });
      }
    });
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 600000);
  }

  /**
   * 
   */
  stopCounter() {
    this.interval$.unsubscribe();
    this.counter = 0;
  }

  /**
   * 
   */
  resetCounter() {
    this.stopCounter();
    this.counter = 60;
    this.startCounter();
  }
}

