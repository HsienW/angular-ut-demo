import {TestBed} from '@angular/core/testing';

import {InjectorService} from './injector.service';
import {CommonService} from '../common/common.service';

describe('InjectorService', () => {

  let service: InjectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InjectorService],
    });
    service = TestBed.get(InjectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return Service Value', () => {
    const valueResult = service.getInjectorServiceValue();
    expect(valueResult).toBe('get injector value success');
  });

});

describe('InjectCommonService', () => {

  let service: InjectorService;
  let commonServiceSpy: jasmine.SpyObj<CommonService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        InjectorService,
        {provide: CommonService}
      ]
    });
    service = TestBed.get(InjectorService);
    commonServiceSpy = TestBed.get(CommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return Service Value', () => {
    const value = service.getInjectorServiceValue();
    expect(value).toBe('get injector value success');
  });

  it('#getCommonServiceValue should return shouldReturn from a spy', () => {
    const value = 'get injector value success';
    const commonValue = 'get common value success';

    expect(service.getInjectorServiceValue()).toBe(value);
    // expect(service.callCommonServiceGetValue).toBe(commonValue);
    // expect(commonServiceSpy.getCommonServiceValue.and.returnValue).toBe(commonValue);
  });

});
