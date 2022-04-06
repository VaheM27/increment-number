import { Component } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.css'],
})
export class IncrementComponent {
  num = 0;
  showInfo: boolean = false;

  showSection() {
    this.showInfo = !this.showInfo;
  }
  setIncrement() {
    return (this.num += 1);
  }
  setDecrement() {
    return (this.num -= 1);
  }
}
