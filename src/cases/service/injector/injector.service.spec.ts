import {TestBed} from '@angular/core/testing';

import {InjectorService} from './injector.service';
import {CommonService} from '../common/common.service';

describe('InjectorService', () => {
  let service: InjectorService;
  let commonServiceSpy: jasmine.SpyObj<CommonService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        InjectorService,
        CommonService
      ]
    });
    service = TestBed.get(InjectorService);
    commonServiceSpy = TestBed.get(CommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe(`'getInjectorServiceValue' function testing`, () => {
    it(`#getInjectorServiceValue should return 'get injector value success'`, () => {
      const value = service.getInjectorServiceValue();
      expect(value).toBe('get injector value success');
    });
  });

  describe(`'callCommonServiceGetValue' function testing`, () => {
    it(`#callCommonServiceGetValue should return 'get common value success'`, () => {
      const value = service.callCommonServiceGetValue();
      expect(value).toBe('get common value success');
    });
  });
});
