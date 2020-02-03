import {Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})

export class CounterComponent {

  public counter = 0;

  // increment
  public increaseCounter(): number {
    this.counter++;
    return this.counter;
  }

  // decrement
  public decreaseCounter(): number {
    this.counter--;
    return this.counter;
  }

}
