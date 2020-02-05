import {Component} from '@angular/core';

@Component({
  selector: 'app-dynamic-value',
  templateUrl: './dynamic-value.component.html',
  styleUrls: ['./dynamic-value.component.css']
})
export class DynamicValueComponent {

  public getCurrentDate(): number {
    return Date.now();
  }

}
