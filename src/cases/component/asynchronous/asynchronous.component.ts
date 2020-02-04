import {Component} from '@angular/core';

@Component({
  selector: 'app-asynchronous',
  templateUrl: './asynchronous.component.html',
  styleUrls: ['./asynchronous.component.css']
})
export class AsynchronousComponent {

  message = '';

  changeAsync() {
    setTimeout(() => {
      this.message = 'change-1';
    }, 1000);

    setTimeout(() => {
      this.message = 'change-2';
    }, 2000);
  }

}
