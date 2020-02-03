// import {async, ComponentFixture, TestBed} from '@angular/core/testing';
// import {FocusedIgnoredComponent} from './focused-ignored.component';

// focused => describe前 + 上 f 為必要的重點測試

// fdescribe('FocusedIgnoredComponent focused testing', () => {
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         FocusedIgnoredComponent
//       ],
//     }).compileComponents();
//   }));
//
//   fit('should return Current testing only show focused', () => {
//     const fixture = TestBed.createComponent(FocusedIgnoredComponent);
//     const component = fixture.debugElement.componentInstance;
//     const valueResult = component.callFocusedFunction();
//     expect(valueResult).toBe('Current testing only show focused');
//   });
//
// });
//
// // disabled => describe前 + 上 x 為想忽略的測試
//
// xdescribe('FocusedIgnoredComponent ignored testing', () => {
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         FocusedIgnoredComponent
//       ],
//     }).compileComponents();
//   }));
//
//   xit('should return Current testing have been Ignored', () => {
//     const fixture = TestBed.createComponent(FocusedIgnoredComponent);
//     const component = fixture.debugElement.componentInstance;
//     const valueResult = component.callIgnoredFunction();
//     expect(valueResult).toBe('Current testing have been Ignored');
//   });
//
// });
