import {Component} from '@angular/core';

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styleUrls: ['./parameter.component.css']
})

export class ParameterComponent {

  public getTrapezoidArea(upperLine: number, lowerLine: number, height: number): number {
    const area = (upperLine + lowerLine) * height / 2;
    return area;
  }

  // public getTriangleArea(bottom: number, height: number): number {
  //   const area = (bottom * height) / 2;
  //   return area;
  // }
  //
  // public getSquareArea(side: number): number {
  //   const area = side * side;
  //   return area;
  // }

}
