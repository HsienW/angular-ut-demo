import {Component} from '@angular/core';

@Component({
  selector: 'app-simple-component-counter',
  templateUrl: './simple-component-counter.component.html',
  styleUrls: ['./simple-component-counter.component.css']
})

export class SimpleComponentCounterComponent {

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
