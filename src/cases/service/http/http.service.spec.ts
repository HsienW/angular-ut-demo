import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import {HttpService} from './http.service';

describe('HttpService', () => {
  let httpTestingController: HttpTestingController;
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpService],
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(HttpService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#simulationPostCall() returned Observable should match the right data', () => {
    const requestObj = {
      name: 'hello',
      description: 'hello av8d'
    };

    service.simulationPostCall({
      name: 'hello',
      description: 'test'
    }).subscribe(requestData => {
      expect(requestData.name).toEqual('hello');
    });

    const apiRequest = httpTestingController.expectOne('http://localhost:4000/posts');
    expect(apiRequest.request.method).toEqual('POST');
    apiRequest.flush(requestObj);
  });


});
