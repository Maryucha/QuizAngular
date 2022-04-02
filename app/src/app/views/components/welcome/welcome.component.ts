import { Component, Input, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  public formPlayer!: FormGroup;
  @ViewChild('player') playerKey!: ElementRef;
  public player='';
  
  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    public router: Router
  ) { }

  ngOnInit(): void {
    const dialogRef = this.dialog.open(ModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

    this.formPlayer = this.formBuilder.group({
      playerControl: new FormControl('',[Validators.required])
    })
  }

  onSubmit() {
    if(this.formPlayer.valid){
      this.player = this.formPlayer.get('playerControl')?.value
    }
    localStorage.setItem('player', this.player);
    this.router.navigate(['/questions']);
    this.formPlayer.reset();
  }
}

