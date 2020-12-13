import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-vues',
  templateUrl: './vues.component.html',
  styleUrls: ['./vues.component.css']
})
export class VuesComponent implements OnChanges {
  vues: number;
  @Input()
  set vuess(v: number) {
    this.vues = v;
  }
  vuestoDisplay: number;
  @Output() eventvues = new EventEmitter<number>();
  i: number;
  constructor() {
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.i = 0;
  }
ngOnChanges(changes: SimpleChanges) {
   // console.log(changes);
    if (this.vues && this.i !== 1){
      this.i = 1;
      this.vuestoDisplay = this.vues + 1;
      this.eventvues.emit(this.vuestoDisplay);
    }

}
}
