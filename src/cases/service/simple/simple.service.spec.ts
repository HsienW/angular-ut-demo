import {TestBed} from '@angular/core/testing';

import {SimpleService} from './simple.service';

describe('SimpleService', () => {

  let service: SimpleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimpleService]
    });
    service = TestBed.get(SimpleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return Service Value', () => {
    const valueResult = service.getServiceValue();
    expect(valueResult).toBe('get value success');
  });

});
