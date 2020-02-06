import {Component} from '@angular/core';

@Component({
  selector: 'app-dynamic-value',
  templateUrl: './dynamic-value.component.html',
  styleUrls: ['./dynamic-value.component.css']
})
export class DynamicValueComponent {

  public randomNumber(min, max): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

}
