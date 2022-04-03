import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/views/components/questions/questions.component';

@Component({
  selector: 'app-finish-modal',
  templateUrl: './finish-modal.component.html',
  styleUrls: ['./finish-modal.component.scss']
})
export class FinishModalComponent implements OnInit {
  public imgModal = '';
  public modalMsg = '';
  public className = 'has-text-primary';

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
    if (this.data.points >= 80) {
      this.modalMsg = 'Parabéns você foi mega bem!'
      this.imgModal = '../../../../assets/logos/win-100.png'
    } else if (this.data.points <= 70 && this.data.points === 79) {
      this.modalMsg = 'Parabéns você foi bem!'
      this.imgModal = '../../../../assets/logos/win-70.png'
    } else {
      this.className = 'has-text-danger'
      this.modalMsg = 'Vai estudar mais FDP'
      this.imgModal = '../../../../assets/logos/bad-result.png'
    }
  }
}
