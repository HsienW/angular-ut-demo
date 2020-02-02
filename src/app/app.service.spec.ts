// import {TestBed, async, inject} from '@angular/core/testing';
//
// import {AppService} from './app.service';
//
// describe('AppService', () => {
//
//   // // 掛入 AppService 相當於 NgModule 的概念
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       providers: [
//         AppService,
//       ],
//     });
//   }));
//
//   it('should be created', inject([AppService], (targetService: AppService) => {
//     expect(targetService).toBeTruthy();
//   }));
//
//   it('should return array content & length', inject([AppService], (targetService: AppService) => {
//     const nameArray = targetService.getArray();
//     expect(nameArray).toContain('joe-1');
//     expect(nameArray).toContain('joe-2');
//     expect(nameArray).toContain('joe-3');
//     expect(nameArray.length).toBe(3);
//   }));
//
//   it('should return app2 array content', inject([AppService], (targetService: AppService) => {
//     const app2Array = targetService.getApp2ServiceArray();
//     expect(app2Array).toContain('App2-1');
//     expect(app2Array).toContain('App2-2');
//     expect(app2Array).toContain('App2-3');
//     expect(app2Array).toContain('App2-4');
//     expect(app2Array.length).toBe(4);
//   }));
//
// });
