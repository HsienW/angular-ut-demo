import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SimpleComponentParameterComponent} from './simple-component-parameter.component';

describe('SimpleComponentParameterComponent', () => {
  let component: SimpleComponentParameterComponent;
  let fixture: ComponentFixture<SimpleComponentParameterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SimpleComponentParameterComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SimpleComponentParameterComponent);
    component = fixture.componentInstance;

  }));

  it('should create the SimpleComponentParameterComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should return area equal or greater than 25', () => {
    const areaResult = component.getTrapezoidArea(2, 3, 10);
    expect(areaResult).toBeGreaterThanOrEqual(25);
  });

});

/* Focused and Disabled tests */

// focused => 必要的重點測試

// fdescribe('SimpleComponentParameterComponent focused testing', () => {
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         ParameterComponent
//       ],
//     }).compileComponents();
//   }));
//
//
//   fit('should return area equal than 3', () => {
//     const fixture = TestBed.createComponent(ParameterComponent);
//     const component = fixture.debugElement.componentInstance;
//     const areaResult = component.getTriangleArea(2, 3);
//     expect(areaResult).toBeGreaterThanOrEqual(3);
//   });
//
// });
//
// // disabled => 想忽略的測試
//
// xdescribe('SimpleComponentParameterComponent disabled testing', () => {
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         ParameterComponent
//       ],
//     }).compileComponents();
//   }));
//
//   xit('should return area equal than 4', () => {
//     const fixture = TestBed.createComponent(ParameterComponent);
//     const component = fixture.debugElement.componentInstance;
//     const areaResult = component.getSquareArea(2);
//     expect(areaResult).toBeGreaterThanOrEqual(4);
//   });
//
// });
