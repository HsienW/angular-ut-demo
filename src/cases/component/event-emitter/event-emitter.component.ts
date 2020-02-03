import {Component, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-event-emitter',
  templateUrl: './event-emitter.component.html',
  styleUrls: ['./event-emitter.component.css']
})
export class EventEmitterComponent {

  counter = 0;
  counterChanged = new EventEmitter();

  public incrementCounter() {
    this.counter++;
    this.counterChanged.emit(this.counter);
  }

}
