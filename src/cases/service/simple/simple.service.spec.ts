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
  describe(`'getServiceValue' function testing`, () => {
    it(`#getServiceValue should return 'get value success'`, () => {
      const value = service.getServiceValue();
      expect(value).toBe('get value success');
    });
  });
});
