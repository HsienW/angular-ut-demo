import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleService {

  public getServiceValue() {
    return 'get value success';
  }

}
