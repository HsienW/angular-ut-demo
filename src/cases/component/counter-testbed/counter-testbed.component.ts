import {Component} from '@angular/core';

@Component({
  selector: 'app-counter-testbed',
  templateUrl: './counter-testbed.component.html',
  styleUrls: ['./counter-testbed.component.css']
})

export class CounterTestbedComponent {

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
