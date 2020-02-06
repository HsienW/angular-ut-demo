import {TestBed} from '@angular/core/testing';

import {CommonService} from './common.service';

describe('CommonService', () => {
  let service: CommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CommonService,
      ]
    });
    service = TestBed.get(CommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe(`'getCommonServiceValue' function testing`, () => {
    it(`#getCommonServiceValue should return 'get common value success'`, () => {
      const value = service.getCommonServiceValue();
      expect(value).toBe('get common value success');
    });
  });
});
