import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-increments',
  templateUrl: './increments.component.html',
  styles: [
  ]
})
export class IncrementsComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;
  // tslint:disable-next-line: no-input-rename
  @Input() legend = 'Leyenda';
  @Input() progress = 50;

  @Output() value: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onChanges(newValue: number) {

    // const elemHTML: any = document.getElementsByName('progress')[0];

    if (newValue >= 100) {
      this.progress = 100;
    } else if (newValue <= 0) {
      this.progress = 0;
    }
    else {
      this.progress = newValue;
    }

    // elemHTML.value = this.progress;
    this.txtProgress.nativeElement.value = this.progress;
    this.value.emit(this.progress);
  }

  changeValue(valor: number) {
    if (this.progress >= 100 && valor > 0) {
      this.progress = 100;
      return;
    }

    if (this.progress <= 0 && valor < 0) {
      this.progress = 0;
      return;
    }

    this.progress = this.progress + valor;
    this.txtProgress.nativeElement.focus();

    this.value.emit(this.progress); // function Output
  }


}
