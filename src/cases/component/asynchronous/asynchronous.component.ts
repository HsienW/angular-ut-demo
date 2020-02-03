import {Component} from '@angular/core';

@Component({
  selector: 'app-asynchronous',
  templateUrl: './asynchronous.component.html',
  styleUrls: ['./asynchronous.component.css']
})
export class AsynchronousComponent {

  showMessage = false;

  submit() {
    this.showMessage = true;
    setTimeout(() => (this.showMessage = false), 2000);
  }

}
